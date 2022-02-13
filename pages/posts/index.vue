<template>
  <div class="w-full">
    <div class="p-6">
      <PageTitle title="<strong>Semua</strong> Kabar" />
    </div>

    <Posts :posts="posts" />
  </div>
</template>

<script>
export default {
  async asyncData({ app, store, params }) {
    const { data } = await app.$axios.get(
      `/wp/v2/posts?orderby=date&per_page=10&_embed`
    );

    const formated = data.map((post) => {
      return store._vm.formatPosts(post);
    });

    return { posts: formated };
  },
  mounted() {
    this.morePosts();
  },
  mixins: {
    formatPosts: Function,
  },
  methods: {
    morePosts() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          //
        }
      };
    },
  },
};
</script>
