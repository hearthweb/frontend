<template>
  <div class="flex flex-col">
    <div class="flex gap-x-4 m-8">
      <img src="https://placehold.co/48x48" class="rounded-full" />
      <div>
        <a href="/" class="text-xl">Hearth</a>
        <div class="text-sm text-foreground-secondary">Welcome, username!</div>
      </div>
    </div>
    <Line />
    <div class="flex-1 p-4">
      <Menu>
        <MenuItem label="Credentials" icon="uil:padlock" path="/credentials" />
        <MenuItem label="Documents" icon="uil:file-alt" path="/documents" />
        <MenuItem label="Finances" icon="uil:dollar-alt" path="/finances" />
      </Menu>
    </div>
    <Line />
    <div class="p-4">
      <Menu>
        <MenuItem label="Account" icon="uil:user" path="/account" />
        <MenuItem label="Logout" icon="uil:sign-out-alt" path="/logout" />
      </Menu>
    </div>
  </div>
</template>
