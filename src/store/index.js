import Vue from "vue";
import Vuex from "vuex";
import auth from "./Auth/index";
import comm from "./Community/index";

// import Config from "@/config";
// import axios from "axios";
Vue.use(Vuex);
const storeModules = { auth, comm };
const store = new Vuex.Store({
  modules: storeModules,
});
export default store;
