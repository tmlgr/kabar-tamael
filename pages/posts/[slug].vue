<template>
  <transition>
    <div v-if="post">
      <LazySinglePost :post="post" />
    </div>
  </transition>
</template>
<script setup>
const route = useRoute();
const { slug } = route.params;
const { post } = await $fetch(`/api/posts/${slug}`);

useMeta({
  title: `${post?.title} | Kabar Tamael`,
  meta: [
    // facebook
    { property: "og:type", content: "article" },
    { property: "og:url", content: "https://kabar.tamaelgrupternate.com" },
    { property: "og:title", content: post?.title },
    { property: "og:description", content: post?.excerpt },
    { property: "og:image", content: post.cover },
    { property: "og:site_name", content: post?.title },
    { property: "fb:app_id", content: "" },
    { property: "fb:pages", content: "" },
    // twitter
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:site", content: "@tamaelgrup" },
    { property: "twitter:creator", content: "@tamaelgrup" },
    { property: "twitter:title", content: post?.title },
    { property: "twitter:description", content: post?.excerpt },
  ],
});
</script>
