<template>
  <UAuthForm
    :schema="zUserLogin"
    title="Hearth Login"
    description="Please enter your credentials to login"
    :fields="fields"
    @submit="onSubmit"
  />
</template>

<script setup lang="ts">
import type { AuthFormField, FormSubmitEvent } from "@nuxt/ui"
import type { UserLogin } from "~/client"
import { zHttpExceptionResponse, zUserLogin } from "~/client/zod.gen"

definePageMeta({
  layout: "auth",
})

const toast = useToast()
const { login } = useAuth()

const fields: AuthFormField[] = [
  {
    name: "email",
    type: "text" as const,
    label: "Email",
    placeholder: "Enter your email",
    required: true,
    autofocus: true,
  },
  {
    name: "password",
    label: "Password",
    type: "password" as const,
    placeholder: "Enter your password",
    required: true,
  },
]

async function onSubmit(payload: FormSubmitEvent<UserLogin>) {
  const { error } = await login(payload.data)
  if (!error) {
    await navigateTo("/")
    return
  }
  {
    const { success, data } = zHttpExceptionResponse.safeParse(error)
    if (success) {
      toast.add({
        title: "Login failed",
        description: data.detail,
        color: "error",
      })
    }
  }
}
</script>
