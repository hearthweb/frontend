<template>
  <div class="h-screen flex">
    <Sidebar />
    <Line vertical="true" />
    <main class="flex-1 p-8">
      <slot />
    </main>
  </div>
</template>
