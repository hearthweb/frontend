<script setup lang="ts">
withDefaults(
  defineProps<{
    vertical?: boolean
  }>(),
  {},
)
</script>

<template>
  <div :class="['bg-panel', { 'h-[1px]': !vertical, 'w-[1px]': vertical }]" />
</template>
