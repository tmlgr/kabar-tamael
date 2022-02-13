<template>
  <h1 class="text-2xl flex items-center">
    <p v-html="title"></p>
    <hr
      class="w-[6rem] border-[4px] rounded-full bg-green-500 border-green-500 ml-4"
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
