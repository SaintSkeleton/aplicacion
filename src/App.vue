<script setup>
import { Authenticator } from '@aws-amplify/ui-vue';
import '@aws-amplify/ui-vue/styles.css';
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';
import { generateClient } from 'aws-amplify/api';
import { onMounted, ref } from 'vue';
import { v4 as uuidv4 } from 'uuid'; // Import for generating unique file name

const title = ref('');
const storeId = ref(''); // Assuming you have a way to select or input the storeId
const file = ref(null);
const documents = ref([]);

const client = generateClient();

async function createDocument() {
  try {
    if (!title.value || !storeId.value || !file.value) return;

    const uniqueFilename = `${uuidv4()}.${file.value.name.split('.').pop()}`; // Generate unique filename

    const documentInput = {
      title: title.value,
      file: {
        filename: uniqueFilename,
        content: file.value,
      },
      storeId: storeId.value,
    };

    await client.graphql({
      query: mutations.createDocument,
      variables: { input: documentInput },
    });

    // Clear input fields and display success message
    title.value = '';
    storeId.value = '';
    file.value = null;
    alert('Document created successfully!');

    // Refresh document list after successful creation
    fetchDocuments();
  } catch (error) {
    console.error('Error creating document:', error);
    // Handle errors gracefully, e.g., display user-friendly error messages
  }
}

async function fetchDocuments() {
  const fetchedDocuments = await client.graphql({
    query: queries.listDocuments, // Assuming your query to list documents is named listDocuments
  });

  documents.value = fetchedDocuments.data.listDocuments.items; // Adjust the data path if needed
}

onMounted(() => {
  fetchDocuments();
});
</script>

<template>
  <authenticator>

    <template v-slot="{ user, signOut }">

      <h1>Hello {{ user.username }}!</h1>

      <button @click="signOut">Sign Out</button>

      <!-- Other content from before-->

    </template>

  </authenticator>
  
  <div id="app">
    <h2>Documents</h2>

    <div v-for="document in documents" :key="document.id">
      <h3>{{ document.title }}</h3>
    </div>

    <h2>Create Document</h2>
    <input type="text" v-model="title" placeholder="Document title" />
    <select v-model="storeId"> </select>
    <input type="file" v-on:change="file = $event.target.files[0]" />
    <button v-on:click="createDocument">Upload Document</button>
  </div>
</template>
