<script>

import { fetchUserAttributes } from 'aws-amplify/auth';

async function handleFetchUserAttributes() {
    try {
        const userAttributes = await fetchUserAttributes();
        console.log(userAttributes);
    } catch (error) {
        console.log(error)
    }
}
</script>

<template v-slot="{name, email, phone_number, user}">
    <h1>Nombre: {{ name }}</h1>
    <h1>Correo electronico: {{ email }}</h1>
    <h1>Numero celular: {{ phone_number }}</h1>
    <h1>ID de usuario: {{ user }}</h1>
</template>

<style></style>