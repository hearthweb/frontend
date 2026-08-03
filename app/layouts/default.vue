<template>
  <UDashboardGroup>
    <UDashboardSidebar
      v-model:open="open"
      collapsible
      class="bg-elevated/25"
      :ui="{ footer: 'lg:border-t lg:border-default' }"
    >
      <template #header>
        <p>Hearth</p>
      </template>
      <template #default>
        <UNavigationMenu
          :items="items"
          orientation="vertical"
          tooltip
          popover
        />
      </template>
    </UDashboardSidebar>
    <slot />
  </UDashboardGroup>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui"

const toast = useToast()
const { logout } = useAuth()

const open = ref(true)
const items: NavigationMenuItem[][] = [
  [
    {
      label: "Credentials",
      to: "/credentials",
    },
    {
      label: "Documents",
      to: "/documents",
    },
    {
      label: "Finances",
      to: "/finances",
    },
  ],
  [
    {
      label: "Users",
      to: "/users",
    },
  ],
  [
    {
      label: "Logout",
      async onSelect() {
        const { error } = await logout()
        if (error) {
          toast.add({
            title: "Logout failed",
            description: "Please try again or reload the page.",
            color: "error",
          })
        } else {
          await navigateTo("/login")
          toast.add({
            title: "Logout succeeded",
            description: "You are now logged out of the application.",
            color: "success",
          })
        }
      },
    },
  ],
]
</script>
