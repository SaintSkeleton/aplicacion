<template>
  <div>
    <p>{{ isLoggedIn }}</p>
    <authenticator v-if="!isLoggedIn" :hide-sign-up="true" @authStateChange="authStateChange">
    </authenticator>
    <router-view v-else />
  </div>
</template>

<script setup>
import { Amplify } from 'aws-amplify';
import { ref, onMounted } from 'vue';
import { Authenticator } from "@aws-amplify/ui-vue";
import { Auth } from 'aws-amplify';
import { useRouter } from 'vue-router';
import Homepage from './views/homepage.vue';
import config from './amplifyconfiguration.json';

Amplify.configure(config);

const isLoggedIn = ref(false);
const router = useRouter();

async function authStateChange(state, data) {
  if (state === 'signedin') {
    console.log('User is')
    //isLoggedIn.value = true;
    //router.push(Homepage); // Assuming '/home' is your homepage route
  }
}

onMounted(() => {
  // Check for initial login state
  Auth.currentAuthenticatedUser()
    .then(() => (isLoggedIn.value = true))
    .catch(() => (isLoggedIn.value = false));
});
</script>