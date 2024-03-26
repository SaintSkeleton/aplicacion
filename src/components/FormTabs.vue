<template>
    <div>
        <ul>
            <li v-for="tab in tabs" :key="tab.name" @click="changeTab(tab.name)">
                {{ tab.label }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        tabs: {
            type: Array,
            required: true
        }
    },
    methods: {
        changeTab(tabName) {
            this.$emit('tab-changed', tabName);
        }
    }
};
</script>