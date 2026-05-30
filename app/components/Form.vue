<template>
  <form @submit.prevent="onSubmit" class="flex flex-col gap-y-8">
    <div>
      <div class="text-xl">{{ title }}</div>
      <div class="text-sm text-foreground-secondary">{{ description }}</div>
    </div>
    <Fields>
      <slot />
    </Fields>
    <Buttons>
      <Button>{{ action }}</Button>
    </Buttons>
  </form>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate"

withDefaults(
  defineProps<{
    title: string
    description: string
    action?: string
  }>(),
  {
    action: "Submit",
  },
)

const { handleSubmit } = useForm()

const onSubmit = handleSubmit(async (values) => {
  console.log(values)
})
</script>
