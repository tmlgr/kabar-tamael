<template>
  <div class="grid grid-cols-4 gap-4">
    <div class="col-span-3">
      <h1 class="text-2xl"><span class="font-bold">Headline</span> hari ini</h1>

      <headline />
      <headline />
    </div>
    <div>
      <popular />
    </div>
  </div>
</template>

<script>
import popular from "../components/popular.vue";
import headline from "../components/headline.vue";

export default {
  layout: "default",
  components: {
    popular,
    headline,
  },
};
</script>
