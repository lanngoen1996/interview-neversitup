interface LoginForm {
  username: string
  password: string
}

interface AuthToken {
  username: string
  accessToken: string
}

declare module '#auth-utils' {
  interface User {
    username: string
  }

  interface UserSession {
    user?: User
    token?: string
    loggedInAt?: Date
  }
}
