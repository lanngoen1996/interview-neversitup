declare module 'nuxt/schema' {
  interface RuntimeConfig {
    sessionPassword: string
  }
  interface PublicRuntimeConfig {
    apiBase: string
  }
}

export { }
