<template>
  <div>
    <SinglePost :post="post[0]" />
  </div>
</template>
<script>
export default {
  async asyncData({ app, store, params }) {
    const { data } = await app.$axios.get(
      `/wp/v2/posts?slug=${params.slug}&_embed`
    );

    const formated = data.map((post) => {
      const embeded = post._embedded;

      return {
        created_at: post.date,
        title: post.title.rendered,
        content: post.content.rendered,
        excerpt: post.excerpt.rendered,
        cover: embeded["wp:featuredmedia"]
          ? embeded["wp:featuredmedia"][0].source_url
          : require(`~/assets/img/___.png`),
        related: post["jetpack-related-posts"],
        categories: post._embedded["wp:term"][0],
        tags: post._embedded["wp:term"][1],
        author: {
          name: embeded.author[0].name,
          profile_picture: Object.values(embeded.author[0].avatar_urls)[1],
        },
      };
    });

    return { post: formated };
  },
};
</script>
