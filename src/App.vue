<script setup>
import { Authenticator } from '@aws-amplify/ui-vue';
import '@aws-amplify/ui-vue/styles.css';
import sidebar from './components/sidebar.vue';
// ... other code below
</script>
<template>
  <authenticator>
    <template v-slot="{ signOut }">
      <div class="app">
        <sidebar />
        <router-view />
        <button @click="signOut">Sign Out</button>
        <!-- Other content from before-->
      </div>
    </template>
  </authenticator>
</template>

<style Lang="scss">
:root {
  --primary: ;
  --grey: ;
  --dark: ;
  --dark-alt: ;
  --light: ;
  --sidebar-width: 300px;
}

* {
  margin: 0%;
  padding: 0%;
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

    @media (max-width: 768px) {
      padding-left: 6rem;
    }
  }
}
</style>