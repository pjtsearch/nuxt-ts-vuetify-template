export const state = () => ({
  dark: true
});

export const mutations = {
  set(state, { item, value }) {
    state[item] = value;
  },
  toggle(state, { item }) {
    state[item] = !state[item];
  }
};
 
