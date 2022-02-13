export const state = () => ({
  isOpen: false,
  posts: [],
});

export const mutations = {
  toggle(state) {
    state.isOpen = !state.isOpen;
  },
  setPosts(state, data) {
    state.posts.push(data);
  },
};
