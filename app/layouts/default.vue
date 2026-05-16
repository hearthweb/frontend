<template>
  <div class="flex gap-x-8 h-screen p-8">
    <Sidebar />
    <Line vertical="true" />
    <main class="flex-1">
      <slot />
    </main>
  </div>
</template>
