<template>
  <div class="w-full">
    <div class="p-6">
      <PageTitle title="<strong>Headline</strong> Hari Ini" />
      <Headline />
    </div>

    <Posts :posts="posts" />
  </div>
</template>

<script>
export default {
  async asyncData({ app, store, params }) {
    const { data } = await app.$axios.get(
      `/wp/v2/posts?orderby=date&per_page=6&_embed`
    );

    const formated = data.map((post) => {
      const embeded = post._embedded;

      return {
        slug: post.slug,
        created_at: post.date,
        title: post.title.rendered,
        cover: embeded["wp:featuredmedia"]
          ? embeded["wp:featuredmedia"][0].source_url
          : require(`~/assets/img/___.png`),
        categories: post._embedded["wp:term"][0],
        author: {
          name: embeded.author[0].name,
          profile_picture: Object.values(embeded.author[0].avatar_urls)[1],
        },
      };
    });

    return { posts: formated };
  },
};
</script>
