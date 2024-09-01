export default defineNuxtPlugin((nuxtApp) => {

  const { session } = useUserSession()
  const config = useRuntimeConfig()

  const api = $fetch.create({
    baseURL: config.public.apiBase,
    onRequest({ options }) {
      if (session.value.token) {
        const headers = options.headers ||= {}
        if (Array.isArray(headers)) {
          headers.push(['Authorization', `Bearer ${session.value.token}`])
        } else if (headers instanceof Headers) {
          headers.set('Authorization', `Bearer ${session.value.token}`)
        } else {
          headers.Authorization = `Bearer ${session.value.token}`
        }
      }
    },
    async onResponseError({ response }) {
      if (response.status === 401) {
        await nuxtApp.runWithContext(() => navigateTo('/login'))
      }
      await nuxtApp.runWithContext(() => navigateTo(`/errors/${response.status}`))
    }
  })

  // Expose to useNuxtApp().$api
  return {
    provide: {
      api
    }
  }
})
