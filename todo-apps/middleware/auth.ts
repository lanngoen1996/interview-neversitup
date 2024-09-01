export default defineNuxtRouteMiddleware(async () => {
  const { loggedIn } = useUserSession()

  if (!loggedIn) {
    return navigateTo('/login')
  }

  return
})
