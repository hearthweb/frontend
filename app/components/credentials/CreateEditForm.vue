<template>
  <UForm
    :schema="zCredentialCreateEdit"
    :state="state"
    class="space-y-4"
    @submit="onSubmit"
  >
    <UFormField label="Service" name="service">
      <UInput v-model="state.service" placeholder="Gmail, Facebook, etc." />
    </UFormField>
    <UFormField label="Username or email" name="username_or_email">
      <UInput v-model="state.username_or_email" />
    </UFormField>
    <UFormField label="Password" name="password">
      <UFieldGroup>
        <UInput v-model="state.password" />
        <UButton color="neutral" variant="subtle" @click="handleGenerate">
          Generate
        </UButton>
      </UFieldGroup>
    </UFormField>
    <UButton type="submit">Submit</UButton>
  </UForm>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui"
import { credentialsCreate, type CredentialCreateEdit } from "~/client"
import { zCredentialCreateEdit } from "~/client/zod.gen"

const { credential } = defineProps<{
  credential: CredentialCreateEdit
}>()

const state = reactive(credential)

async function onSubmit(payload: FormSubmitEvent<CredentialCreateEdit>) {
  const { error } = await credentialsCreate({ body: payload.data })
  if (!error) {
    await navigateTo("/credentials")
    return
  }
  // TODO: handle error
}

// TODO: this is cryptographically sound but could use a better approach that
// doesn't loop continuously and picks from among better special characters

function handleGenerate() {
  function generate(): string {
    const bytes = window.crypto.getRandomValues(new Uint8Array(12))
    return bytes.toBase64()
  }
  while (true) {
    const password = generate()
    if (
      password.match(/[a-z]/) &&
      password.match(/[A-Z]/) &&
      password.match(/\d/) &&
      password.match(/\W/)
    ) {
      state.password = password
      break
    }
  }
}
</script>
