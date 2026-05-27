<template>
  <div class="flex flex-col gap-y-8">
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
  </div>
</template>

<script setup lang="ts">
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
</script>
