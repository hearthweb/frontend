<template>
  <Form
    title="Login to Hearth"
    description="Please enter your email address and password"
    action="Login"
  >
    <Input name="email" label="Email" placeholder="user@example.com" />
    <Input
      type="password"
      name="password"
      label="Password"
      placeholder="*****"
    />
    <div class="text-sm text-foreground-secondary">
      TODO: forgot your password?
    </div>
  </Form>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth",
})
</script>
