<template>
  <div class="flex flex-col space-y-4">
    <headline v-for="(post, index) in posts" :key="index" :post="post" />
  </div>
</template>

<script setup>
//
</script>
