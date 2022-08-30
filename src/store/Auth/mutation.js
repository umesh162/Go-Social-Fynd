export default {
  loginUser(state, payload) {
    state.user = payload;
  },
  registerSuccess(state, payload) {
    state.succ = payload;
  },
};
