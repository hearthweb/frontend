<template>
  <div class="flex flex-col gap-y-1">
    <label class="block text-sm font-bold">
      {{ label }}
    </label>
    <input
      type="{{ type }}"
      name="{{ name }}"
      class="w-full rounded border border-panel p-2 text-sm focus:outline focus:outline-2 focus:outline-foreground-primary"
      :placeholder
    />
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: string
    name: string
    label: string
    placeholder?: string
  }>(),
  {
    type: "text",
    placeholder: "",
  },
)
</script>
