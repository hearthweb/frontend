<script setup lang="ts">
import { useRoute } from "nuxt/app"
import { computed } from "vue"

const props = withDefaults(
  defineProps<{
    label: string
    icon: string
    path: string
  }>(),
  {},
)

const route = useRoute()
const isActive = computed(() => route.path.startsWith(props.path))
</script>

<template>
  <a
    :href="path"
    :class="[
      'flex',
      'gap-x-2',
      'items-center',
      'px-4',
      'py-2',
      'hover:bg-panel',
      'rounded',
      {
        'text-foreground-secondary': !isActive,
        'font-bold': isActive,
      },
    ]"
  >
    <Icon :name="icon" />
    {{ label }}
  </a>
</template>
