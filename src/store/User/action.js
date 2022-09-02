import Config from "@/config";
import axios from "axios";
export default {
  async updateUser(temp, payload) {
    try {
      const { data } = await axios.post(
        `${Config.baseUrl}/user/profileChange`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(data);
      // commit("getAllComm", data);
    } catch (e) {
      console.log();
    }
  },
};
