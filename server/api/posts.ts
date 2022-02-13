import type { IncomingMessage, ServerResponse } from "http";

export default async (req: any, res: ServerResponse) => {
  const { pathname } = new URL(req.url, `https://${req.headers.host}`);
  const slug = pathname.split("/")[1] || undefined;

  if (typeof slug == "undefined") {
    const response = await fetch(
      `${process.env.API_BASE}/wp-json/wp/v2/posts?per_page=6&_embed`
    );

    const data = await response.json();

    const formated = data.map((post: any) => {
      const embeded = post._embedded;

      return {
        slug: post.slug,
        created_at: post.date,
        title: post.title.rendered,
        cover: embeded["wp:featuredmedia"][0].source_url,
        categories: post._embedded["wp:term"][0],
        author: {
          name: embeded.author[0].name,
          profile_picture: Object.values(embeded.author[0].avatar_urls)[1],
        },
      };
    });

    return {
      posts: formated,
    };
  }

  const response = await fetch(
    `${process.env.API_BASE}/wp-json/wp/v2/posts?slug=${slug}&_embed`
  );

  const data = await response.json();

  const formated = data.map((post: any) => {
    const embeded = post._embedded;

    return {
      created_at: post.date,
      title: post.title.rendered,
      content: post.content.rendered,
      excerpt: post.excerpt.rendered,
      cover: embeded["wp:featuredmedia"][0].source_url,
      related: post["jetpack-related-posts"],
      categories: post._embedded["wp:term"][0],
      tags: post._embedded["wp:term"][1],
      author: {
        name: embeded.author[0].name,
        profile_picture: Object.values(embeded.author[0].avatar_urls)[1],
      },
    };
  });

  return {
    post: formated[0],
  };
};
