import { client } from "~/client/client.gen"

export default defineNuxtPlugin(async () => {
  // Specify the base for the API URLs
  client.setConfig({
    baseUrl: "/api",
  })

  // Attempt to load the user's data; if not available, redirect to login
  const { fetchUser } = useAuth()
  const { error } = await fetchUser()
  if (error) {
    await navigateTo("/login")
    return
  }
})
