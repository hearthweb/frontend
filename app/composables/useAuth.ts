import { login, logout, usersMe } from "~/client"
import type { UserRead, UserLogin } from "~/client"

const user = ref<UserRead | null>(null)

export function useAuth() {
  // Fetches the currently logged in user's data if available and stores it
  async function fetchUser() {
    const r = await usersMe()
    if (r.data !== undefined) {
      user.value = r.data
    }
    return r
  }

  // Attempt to login the user using the provided credentials
  async function doLogin(credentials: UserLogin) {
    const r = await login({ body: credentials })
    if (r.data !== undefined) {
      user.value = r.data
    }
    return r
  }

  // Attempt to log out the current user
  async function doLogout() {
    const r = await logout()
    if (r.data !== undefined) {
      user.value = null
    }
    return r
  }

  return {
    user,
    fetchUser,
    login: doLogin,
    logout: doLogout,
  }
}
