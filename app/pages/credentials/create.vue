<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar title="Add Credentials" />
    </template>
    <template #body>
      <CredentialsCreateEditForm :credential />
    </template>
  </UDashboardPanel>
</template>

<script setup lang="ts">
import type { CredentialCreateEdit } from "~/client"

const credential: CredentialCreateEdit = {
  service: "",
}
</script>
