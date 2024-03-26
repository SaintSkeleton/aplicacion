<template>
    <div>
        <label>{{ label }}</label>
        <input type="file" @change="handleFileChange" :multiple="drop" />
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },
        drop: {
            type: Boolean,
            default: false
        },
        value: {
            // If v-model is used, it should have a value prop
        }
    },
    methods: {
        handleFileChange(event) {
            const files = event.target.files;
            // Handle file selection
            this.$emit('input', files);
        }
    }
};
</script>