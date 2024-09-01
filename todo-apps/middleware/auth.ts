export default defineNuxtRouteMiddleware(async () => {
  const { session } = useUserSession()

  if (!session.value.token) {
    return navigateTo('/login')
  }

  return
})
