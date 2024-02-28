import { createApp } from "vue";
import App from "./App.vue";

import { Amplify } from "aws-amplify";
import amplifyconfig from "./amplifyconfiguration.json";
Amplify.configure(amplifyconfig);
const app = createApp(App);

import { BootstrapVue3 } from "bootstrap-vue-3"; // Only import the main Bootstrap Vue 3 module
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
// Install BootstrapVue3 (no need for IconsPlugin here)
app.use(BootstrapVue3);

import router from "./router";
createApp(App).use(router).mount("#app");