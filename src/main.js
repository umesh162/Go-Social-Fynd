import Vue from "vue";
import App from "./App.vue";
import "./index.css";
import "flowbite";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import store from "./store/index";
import Vuelidate from "vuelidate";
import Router from "vue-router";
import router from "./router";
import Cloudinary from "cloudinary-vue";
Vue.config.productionTip = false;
Vue.use(Cloudinary, {
  configuration: {
    cloudName: "djkwbh7hu",
  },
});
Vue.use(Router);
Vue.use(Vuelidate);
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
