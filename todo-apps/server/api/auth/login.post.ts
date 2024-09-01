import dayjs from 'dayjs'

type AuthResponse = {
  username: string
  access_token: string
}

export default defineEventHandler(async (event) => {
  const body = await readBody<LoginForm>(event)
  const config = useRuntimeConfig()

  try {
    const login = await $fetch<AuthResponse>(`${config.public.apiBase}/auth/login`, {
      method: 'POST',
      body
    }).then((resp): AuthToken => {
      return {
        username: resp.username,
        accessToken: resp.access_token
      }
    })
    await setUserSession(event, {
      user: {
        username: login.username
      },
      token: login.accessToken,
      loggedInAt: dayjs().toDate(),
    })
  } catch (error) {
    console.error(error)
  }
})
