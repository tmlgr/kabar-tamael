<template>
  <div class="bg-gray-100">
    <navbar />

    <div
      :class="[isOpen ? 'w-64' : 'w-0']"
      class="fixed top-0 block bottom-0 left-0 z-50 w-0 h-full min-h-screen overflow-y-auto text-gray-400 transition-all duration-300 ease-in-out bg-gray-900 shadow-lg overflow-x-hidden"
    >
      <div class="flex items-center p-6">
        <div class="ml-auto">
          <button @click.prevent="handleClick">
            <svg
              id="menu-close-icon"
              class="h-6 w-6 transition duration-200 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div class="flex flex-row md:p-8">
      <leftbar />

      <div class="w-full overflow-hidden">
        <slot />
      </div>
    </div>
  </div>
</template>
<script setup>
const isOpen = useFoo();

const handleClick = () => {
  isOpen.value = false;
};
</script>
