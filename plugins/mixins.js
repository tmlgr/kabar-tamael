import Vue from "vue";

Vue.mixin({
  methods: {
    truncate(string, limit = 80) {
      if (string.length <= limit) {
        return string;
      }

      return string.slice(0, limit) + "...";
    },
    formatPosts(post) {
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
    },
  },
});
