<template>
  <div class="bg-gray-100">
    <navbar />

    <div class="flex flex-row md:p-8">
      <leftbar />

      <div class="w-full overflow-hidden p-6">
        <nuxt />
      </div>
    </div>
  </div>
</template>
<script>
import leftbar from "~/components/leftbar.vue";
import navbar from "~/components/navbar.vue";

export default {
  components: {
    navbar,
    leftbar,
  },
};
</script>
