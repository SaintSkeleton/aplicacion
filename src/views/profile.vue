<script>
import { fetchUserAttributes } from 'aws-amplify/auth';

export default {
    data() {
        return {
            name: null, // Initial state
            email: null,
            phone_number: null,
            user: null,
            isLoading: false
        };
    },
    mounted() { // Or created()
        this.isLoading = true; // Start in loading state
        this.fetchData();
    },
    methods: {
        async fetchData() { // Renamed the function
            try {
                const userAttributes = await fetchUserAttributes();
                this.name = userAttributes.name || 'Name Unavailable'; // Handle potential missing name
                this.email = userAttributes.email || 'Email Unavailable';
                this.phone_number = userAttributes.phone_number || 'Phone Number Unavailable';
                this.user = userAttributes.sub || 'User ID Unavailable';
                console.log(userAttributes);
            } catch (error) {
                console.log(error);
            } finally {
                this.isLoading = false; // Done loading, regardless of success
            }
        }
    }
}
</script>

<template v-slot="{name, email, phone_number, user}">
    <div v-if="!isLoading">
        <h1>Nombre: {{ name }}</h1>
        <h1>Correo electronico: {{ email }}</h1>
        <h1>Numero celular: {{ phone_number }}</h1>
        <h1>ID de usuario: {{ user }}</h1>
    </div>
    <div v-else>
        Loading...
    </div>
</template>

<style>
template {
    text-align: center;
}
</style>