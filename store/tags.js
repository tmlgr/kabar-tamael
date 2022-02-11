export const state = () => ({
  lists: [],
});

export const mutations = {
  setTags(state, data) {
    state.lists = data;
  },
};

export const actions = {
  async getTags({ commit }) {
    try {
      const response = await fetch(`${process.env.baseUrl}/wp-json/wp/v2/tags`);

      const data = response.json();

      if (data.length) {
        commit("setTags", data);
      }

      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
