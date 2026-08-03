<template>
  <div class="flex flex-1 flex-col">
    <div class="dark">
      <UHeader
        toggle-side="left"
        title="Hearth"
        :ui="{
          container: 'm-0 px-4!',
        }"
      >
        <template #toggle>
          <UButton
            icon="i-lucide-panel-left"
            color="neutral"
            variant="ghost"
            aria-label="Toggle sidebar"
            @click="open = !open"
          />
        </template>
      </UHeader>
    </div>
    <div class="flex min-h-0 flex-1">
      <USidebar
        v-model:open="open"
        collapsible="offcanvas"
        :ui="{
          gap: 'h-[calc(100%-var(--ui-header-height))]',
          container:
            'bg-neutral-50 absolute top-(--ui-header-height) bottom-0 h-[calc(100%-var(--ui-header-height))]',
        }"
      >
        <UNavigationMenu
          :items="items"
          orientation="vertical"
          :ui="{ link: 'overflow-hidden' }"
        />
      </USidebar>
      <div class="flex-1 p-4">
        <slot />
      </div>
    </div>
  </div>
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
