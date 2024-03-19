import { createRouter, createWebHistory } from "vue-router";
import homepage from "../views/homepage.vue";
import dashboard from "../views/dashboard.vue";
import about from "../views/about.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: homepage,
    },
    {
      path: "/dashboard/:section",
      component: dashboard,
    },
    {
      path: "/about",
      component: about,
    },
  ],
});

export default router;