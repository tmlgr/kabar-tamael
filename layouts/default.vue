<template>
  <div class="bg-gray-100">
    <navbar />

    <div class="flex flex-row space-x-4 p-6">
      <leftbar />

      <div class="w-full">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import leftbar from "../components/leftbar.vue";
import navbar from "../components/navbar.vue";

export default {
  components: {
    navbar,
    leftbar,
  },
};
</script>
