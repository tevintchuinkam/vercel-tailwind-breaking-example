<template>
    <div class="bg-white rounded-lg p-4 text-sm shadow-md shadow-gray-300">
        {{ $t(topic) }}

    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    topic: {
        type: String,
        required: true
    },
})

</script>

<style scoped>

</style>