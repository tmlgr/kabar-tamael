<template>
  <div class="w-full">
    <h1 class="text-2xl"><span class="font-bold">Headline</span> hari ini</h1>
    <test />
  </div>
</template>

<script>
import test from "~/components/test.vue";
import popular from "~/components/popular.vue";

export default {
  layout: "default",
  components: {
    test,
    popular,
  },
};
</script>
