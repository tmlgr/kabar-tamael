<template>
  <div class="w-full">
    <div class="p-6">
      <PageTitle title="<strong>Semua</strong> Kabar" />
    </div>

    <div>
      <Posts :posts="posts" />

      <div v-if="loading">
        <div class="flex items-center justify-center">
          <Loading />
        </div>
      </div>

      <div v-if="isAll" class="text-center p-3">
        <span class="text-gray-600 font-semibold">
          Semua Kabar Ditampilkan
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ app, store, params }) {
    const { data } = await app.$axios.get(
      `/wp/v2/posts?orderby=date&per_page=10&_embed`
    );

    const formated = data.map((post) => store._vm.formatPosts(post));

    return { posts: formated };
  },
  mounted() {
    this.morePosts();
  },
  data() {
    return {
      isAll: false,
      loading: false,
    };
  },
  mixins: {
    formatPosts: Function,
  },
  methods: {
    morePosts() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight >=
          document.documentElement.offsetHeight - 10;

        if (bottomOfWindow && !this.isAll) {
          this.loading = true;

          this.$axios
            .get(
              `/wp/v2/posts?orderby=date&per_page=10&offset=${this.posts.length}&_embed`
            )
            .then((response) => {
              const { data, headers } = response;

              if (headers["x-wp-total"] == 0) {
                this.isAll = true;
              }

              const formated = data.map((post) => this.formatPosts(post));

              this.posts = [...this.posts, ...formated];
            })
            .finally(() => {
              this.loading = false;
            });
        }
      };
    },
  },
};
</script>
