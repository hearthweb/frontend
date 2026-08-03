<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar title="Users" :ui="{ right: 'gap-3' }" />
    </template>
    <template #body>
      <p>Test test test</p>
      <UTable :data="data" :columns class="flex-1" />
    </template>
  </UDashboardPanel>
</template>

<script setup lang="ts">
import type { TableColumn } from "@nuxt/ui"
import { users, type UserRead } from "~/client"

const { data, error } = await users()

const columns: TableColumn<UserRead>[] = [
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "first_name",
    header: "First Name",
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
  },
  {
    accessorKey: "is_admin",
    header: "Is admin",
  },
]
</script>
