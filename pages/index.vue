<template>
  <div class="w-full">
    <div class="bg-white border-t shadow p-6">
      <PageTitle title="<strong>Headline</strong> Hari Ini" />
      <Headline />
    </div>

    <div class="p-6">
      <PageTitle title="<strong>Kabar</strong> Terkini" />
    </div>

    <Posts :posts="posts" />

    <div class="p-6">
      <NuxtLink
        to="/posts"
        class="p-3 block text-center w-full text-white font-semibold bg-green-500 rounded shadow focus:opacity-60"
      >
        Lihat Semua
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ app, store, params }) {
    const { data } = await app.$axios.get(
      `/wp/v2/posts?orderby=date&per_page=6&_embed`
    );

    const formated = data.map((post) => {
      return store._vm.formatPosts(post);
    });

    return { posts: formated };
  },
};
</script>
