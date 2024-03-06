<script setup>
import { Authenticator } from '@aws-amplify/ui-vue';
import '@aws-amplify/ui-vue/styles.css';
import sidebar from './components/sidebar.vue';
import { ref } from 'vue';
import { useAuthenticator } from '@aws-amplify/ui-vue';

const isAdmin = ref(false);
const { authStatus, user } = useAuthenticator('context')

const handleAuthStateChange = (state) => {
  if (state === 'signedIn') {
    Auth.currentAuthenticatedUser()
      .then(user => {
        const cognitoGroups = user.signInUserSession.accessToken.payload['cognito:groups'];
        isAdmin.value = cognitoGroups && cognitoGroups.includes('admin');
      })
      .catch(err => console.error('Error fetching user', err));
  } else {
    isAdmin.value = false;
  }
}

// Add the emits declaration

emits: ['my-auth-state-change'] 
</script>

<template>
  <authenticator @my-auth-state-change="handleAuthStateChange" :hide-sign-up="true">
    <template v-slot="{ signOut }">
      <div class="app">
        <sidebar :is-admin="isAdmin" />

        <router-view />

        <button @click="signOut">Cerrar Sesion</button>


        <!-- Other content -->
      </div>
    </template>
  </authenticator>
</template>

<style Lang="scss">
:root {
  --primary: #4ade80;
  --primary-alt: #22c55e;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 300px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--light);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;

}

.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 1024px) {
      padding-left: 6rem;
    }
  }
}
</style>