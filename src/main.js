import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { Amplify } from "aws-amplify";
import amplifyconfig from "./amplifyconfiguration.json";
Amplify.configure(amplifyconfig);

import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

import Vueform from "@vueform/vueform";
import vueformConfig from "./../vueform.config";
import Builder from "@vueform/builder";
import builderConfig from "./../builder.config";

const app = createApp(App);

app.use(router);
app.use(Vueform, vueformConfig);
app.use(Builder, builderConfig);

app.mount("#app");

//createApp(App).use(router, VueFileAgentNext).mount("#app");
