import Config from "@/config";
import axios from "axios";
export default {
  async getAllCOmmunity({ commit }) {
    try {
      const { data } = await axios.post(
        `${Config.baseUrl}/community/getAll`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      commit("getAllComm", data);
    } catch (e) {
      console.log();
    }
  },
  async joinCommunity(_, payload) {
    console.log("From action", payload);
    try {
      await axios.post(`${Config.baseUrl}/community/joinCommunity`, payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    } catch (e) {
      console.log(e);
    }
  },

  async getUserJoinComm({ commit }, payload) {
    try {
      const { data } = await axios.post(
        `${Config.baseUrl}/community/userCommunity`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      commit("getUserJoinedComm", data);
    } catch (e) {
      console.log();
    }
  },

  async singleChannInfo({ commit }, payload) {
    try {
      const { data } = await axios.post(
        `${Config.baseUrl}/community/getSingleCommunity`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      commit("getSingleChannInfo", data);
    } catch (e) {
      console.log(e);
    }
  },

  async CommAllPost({ commit }, payload) {
    try {
      const { data } = await axios.post(
        `${Config.baseUrl}/posts/getByCommunity`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      commit("getCommPost", data);
    } catch (e) {
      console.log(e);
    }
  },

  async CreatePost({ commit }, payload) {
    try {
      const { data } = await axios.post(
        `${Config.baseUrl}/posts/create`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      commit("addPost", data);
    } catch (e) {
      console.log(e);
    }
  },

  async LikePost(payload) {
    try {
      await axios.post(`${Config.baseUrl}/likes/likePost`, payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      // commit("addPost", data);
    } catch (e) {
      console.log(e);
    }
  },

  async UnLikePost(payload) {
    try {
      await axios.post(`${Config.baseUrl}/likes/removelike`, payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(localStorage.getItem("token"));

      // commit("addPost", data);
    } catch (e) {
      console.log(e);
    }
  },

  async Comment({ commit }, payload) {
    try {
      const { data } = await axios.post(
        `${Config.baseUrl}/comment/addAComment`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      commit("allComments", data);
    } catch (e) {
      console.log(e);
    }
  },
};
