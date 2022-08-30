export default {
  getAllComm(state, payload) {
    state.commList = payload;
  },
  getUserJoinedComm(state, payload) {
    state.userJoinComm = payload;
  },
  getSingleChannInfo(state, payload) {
    state.singleChannel = payload;
  },
  getCommPost(state, payload) {
    state.commPost = payload;
  },
};
