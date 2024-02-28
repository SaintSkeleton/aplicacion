import { createApp } from "vue";
import App from "./App.vue";
import { Amplify } from "aws-amplify";
import amplifyconfig from "./amplifyconfiguration.json";
import { BootstrapVue3 } from "bootstrap-vue-3"; // Only import the main Bootstrap Vue 3 module
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import { createRouter, createWebHistory } from "vue-router";
import homepage from "./views/homepage.vue";
import about from "./views/about.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: homepage,
    },
    {
      path: "/about",
      component: about,
    },
  ],
});
Amplify.configure(amplifyconfig);
const app = createApp(App);

// Install BootstrapVue3 (no need for IconsPlugin here)
app.use(BootstrapVue3);

// ... Other plugins (if any)

createApp(App).use(router).mount("#app");