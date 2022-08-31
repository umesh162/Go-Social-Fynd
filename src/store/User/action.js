import Config from "@/config";
import axios from "axios";
export default {
  async UploadImage(payload) {
    try {
      console.log("Payload", payload);
      const { data } = await axios.post(
        `${Config.baseUrl}/user/uploadImg`,
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
