<template>
    <button :disabled="disabled" @click="$emit('click')">{{ label }}</button>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },
        disabled: {
            type: Boolean,
            default: false
        }
    }
};
</script>