<template>
  <div>
    <single-post :post="post" />
  </div>
</template>
<script setup>
const post = ref(null);
const related = ref([]);
const config = useRuntimeConfig();
const route = useRoute();
const { slug } = route.params;

const {
  data: { value },
} = await useFetch(`${config.API_BASE}/wp-json/wp/v2/posts?slug=${slug}`, {
  transform: (data) => {
    let result = data[0];

    return {
      author: result["_links"].author[0],
      created_at: result.date,
      title: result.title.rendered,
      content: result.content.rendered,
      cover: result.featured_media_src_url,
      related: result["jetpack-related-posts"],
    };
  },
});

const {
  author: { href },
} = value;

const { data } = await useFetch(`${href}`, {
  transform: (data) => {
    return {
      author: {
        name: data.name,
        picture: Object.values(data.avatar_urls)[1],
      },
    };
  },
});

value.author = data.value.author;

post.value = value;
</script>
