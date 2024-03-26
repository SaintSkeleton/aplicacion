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
        <RouterView />
        <div class="dropdown">
          <button class="dropbtn">
            <span class="material-icons">
              person
            </span>
          </button>
          <div class="dropdown-content">
            <router-link class="button" to="/profile">
              <span class="text">Perfil</span>
            </router-link>
            <button @click="signOut">Cerrar Sesion</button>
          </div>
        </div>
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

/* Dropdown Button */
.dropbtn {
  background-color: #04AA6D;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  margin-top: 70%;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  right: 10%;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: #3e8e41;
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