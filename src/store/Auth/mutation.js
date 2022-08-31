export default {
  loginUser(state, payload) {
    state.user = payload;
    state.userDetails = payload;
  },
  registerSuccess(state, payload) {
    state.succ = payload;
  },
};
