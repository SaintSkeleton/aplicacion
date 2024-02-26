<script setup>
import { Authenticator } from '@aws-amplify/ui-vue';
import '@aws-amplify/ui-vue/styles.css';
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';
import { generateClient } from 'aws-amplify/api';
import { onMounted, ref } from 'vue';
import { v4 as uuidv4 } from 'uuid'; // Import for generating unique file name
</script>

<template>
  <authenticator>

    <template v-slot="{ user, signOut }">

      <h1>Hola, {{ user.username }}!</h1>

      <button @click="signOut">Sign Out</button>


    </template>

  </authenticator>
  
  <div id="app">

  </div>
</template>
