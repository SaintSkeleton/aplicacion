import './assets/main.css'
import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
import { createApp } from 'vue'
import App from './App.vue'

Amplify.configure(amplifyconfig);

createApp(App).mount('#app')
