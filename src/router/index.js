import Router from "vue-router";
// import store from "../store/index";
import Login from "../components/AuthScreen/LoginPage.vue";
import Register from "../components/AuthScreen/RegisterPage.vue";
import Home from "../components/Community/HomePage.vue";
const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/Home",
      name: "home",
      component: Home,
      redirectIfLogged: false,
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   let auth = store.getters["auth/isAuthenticated"];
//   if (auth) {
//     next();
//   } else {
//     next("login");
//   }
// });

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (!store.getters["auth/isAuthenticated"]) {
//       next({
//         path: "/",
//         query: { redirect: to.fullPath },
//       });
//     } else {
//       next();
//     }
//   } else if (to.matched.some((record) => record.meta.redirectIfLogged)) {
//     if (store.getters["auth/isAuthenticated"]) {
//       next({
//         path: "/home",
//       });
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });
export default router;
