export const state = () => ({
  posts: [],
});

export const mutations = {
  setPosts(state, data) {
    state.posts = data;
  },
};

export const actions = {
  async getPosts({ commit }) {
    try {
      const response = await fetch(
        `${process.env.baseUrl}/wp-json/wp/v2/posts`
      );

      const data = response.json();

      if (data.length) {
        commit("setPosts", data);
      }

      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
