import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

import { Amplify } from "aws-amplify";
import amplifyconfig from "./amplifyconfiguration.json";
Amplify.configure(amplifyconfig);

import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

import router from "./router";

app.config.warnHandler = function (msg, vm, trace) {
    // Ignore the specific warning about the "myAuthStateChange" event
    if (msg.includes('Extraneous non-emits event listeners (myAuthStateChange)')) {
       return;
    }
 }

createApp(App).use(router).mount("#app");