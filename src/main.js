import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { Amplify } from "aws-amplify";
import amplifyconfig from "./amplifyconfiguration.json";
Amplify.configure(amplifyconfig);

import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

const app = createApp(App);

app.use(router)

app.mount('#app')


//createApp(App).use(router).mount("#app");