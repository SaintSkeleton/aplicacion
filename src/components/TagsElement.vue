<template>
    <div>
        <label>{{ label }}</label>
        <select multiple v-model="selectedTags">
            <option v-for="option in options" :key="option">{{ option }}</option>
        </select>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },
        options: {
            type: Array,
            required: true
        },
        value: {
            // If v-model is used, it should have a value prop
        }
    },
    data() {
        return {
            selectedTags: this.value || []
        };
    },
    watch: {
        selectedTags(newValue) {
            this.$emit('input', newValue);
        }
    }
};
</script>