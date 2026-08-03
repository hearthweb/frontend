<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar title="Credentials">
        <template #right>
          <UButton
            icon="i-lucide-plus"
            size="md"
            class="rounded-full"
            @click="handleCreate"
          />
        </template>
      </UDashboardNavbar>
    </template>
    <template #body>
      <HelpText>
        Create and manage usernames, emails, and passwords for shared services
      </HelpText>
      <UTable :data="data" :columns class="flex-1" />
    </template>
  </UDashboardPanel>
</template>

<script setup lang="ts">
import type { TableColumn } from "@nuxt/ui"
import { credentials, type CredentialPublic } from "~/client"
import { username } from "~/util/user"

const NuxtTime = resolveComponent("NuxtTime")
const UButton = resolveComponent("UButton")
const UDropdownMenu = resolveComponent("UDropdownMenu")

const { data, error } = await credentials()

const columns: TableColumn<CredentialPublic>[] = [
  {
    accessorKey: "service",
    header: "Service",
  },
  {
    accessorKey: "username_or_email",
    header: "Username or email",
  },
  {
    accessorKey: "password",
    header: "Password",
  },
  {
    accessorFn: (c) => username(c.user),
    header: "User",
  },
  {
    header: "Created",
    cell: ({ row }) => {
      return h(NuxtTime, {
        datetime: row.original.created_at,
      })
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return h(
        "div",
        { class: "text-right" },
        h(UDropdownMenu, {}, () =>
          h(UButton, {
            icon: "i-lucide-ellipsis-vertical",
            color: "neutral",
            variant: "ghost",
            class: "ml-auto",
          }),
        ),
      )
    },
  },
]

async function handleCreate() {
  await navigateTo("/credentials/create")
}
</script>
