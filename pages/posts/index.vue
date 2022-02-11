<template>
  <div class="flex flex-col space-y-4">
    <headline v-for="(post, index) in posts" :key="index" :post="post" />
  </div>
</template>

<script>
export default {
  layout: "default",
  data() {
    return {
      posts: null,
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      let response = await fetch("https://css-tricks.com/wp-json/wp/v2/posts");
      let result = await response.json();

      this.posts = result;
    },
  },
};
</script>
