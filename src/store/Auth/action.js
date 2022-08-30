import Config from "@/config";
import axios from "axios";
export default {
  async loginUserAction({ commit }, payload) {
    try {
      const { data } = await axios.post(
        `${Config.baseUrl}/auth/Login`,
        payload
      );
      commit("loginUser", data);
      localStorage.setItem(Config.TOKEN_KEY, data.token);
    } catch (e) {
      console.log();
    }
  },
  async logoutAction({ commit }) {
    try {
      console.log("caaller");
      commit("loginUser", {});
      localStorage.clear();
    } catch (e) {
      console.log();
    }
  },
  async registerUserAction({ commit }, payload) {
    try {
      await axios.post(`${Config.baseUrl}/auth/Register`, payload);
      commit("registerSuccess", "Register success");
    } catch (e) {
      console.log();
    }
  },
};
