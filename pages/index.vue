<template>
  <transition>
    <div class="w-full">
      <div class="p-6 shadow">
        <LazyPageTitle title="<strong>Headline</strong> hari ini" />
        <LazyHeadline />
      </div>
      <LazyPosts :posts="posts" />
    </div>
  </transition>
</template>

<script setup>
const { posts } = await $fetch("/api/posts");
useMeta({
  title: "Kabar Tamael",
});
</script>
