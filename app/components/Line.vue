<script setup lang="ts">
withDefaults(
  defineProps<{
    vertical?: boolean
  }>(),
  {},
)
</script>

<template>
  <div :class="['bg-panel', vertical ? 'w-[1px]' : 'h-[1px]']" />
</template>
