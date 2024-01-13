<template>
    <div class="py-5">
        <details class="group">
            <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                <span class="lg:text-xl"> {{ title }}</span>
                <span class="transition group-open:rotate-180 duration-500">
                    <svg fill="none" height="32" shape-rendering="geometricPrecision" stroke="currentColor"
                        stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                        <path d="M6 9l6 6 6-6"></path>
                    </svg>
                </span>
            </summary>
            <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                {{ description }}
            </p>
        </details>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})
</script>

<style scoped></style>