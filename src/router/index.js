import { createRouter, createWebHistory } from "vue-router";
import homepage from "../views/homepage.vue";
import dashboard from "../views/dashboard.vue";
import about from "../views/about.vue";
import profile from "../views/profile.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: homepage,
    },
    {
      path: "/dashboard",
      component: dashboard,
    },
    {
      path: "/about",
      component: about,
    },
    {
      path: "/profile",
      component: profile,
    }
  ]
});

export default router;
