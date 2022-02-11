<template>
  <header class="bg-white items-center shadow py-2 md:px-4 px-2">
    <div class="flex items-center p-3 px-4">
      <a href="/" class="text-xl font-bold uppercase"> Tamael </a>
      <button @click.prevent="handleSidebarClick" type="button" class="ml-auto">
        <icons-hamburger />
      </button>
    </div>
  </header>
</template>

<script setup>
const isOpen = useFoo();

const handleSidebarClick = () => {
  isOpen.value = !isOpen.value;
};
</script>
