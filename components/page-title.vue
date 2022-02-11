<template>
  <h1 class="text-2xl flex items-center">
    <!-- <p><strong>Headline</strong> hari ini</p> -->
    <p v-html="title"></p>
    <hr
      class="w-[6rem] border-[2px] rounded-full bg-green-500 border-green-500 ml-4"
    />
  </h1>
</template>
<script>
export default {
  props: {
    title: String,
  },
};
</script>
