<template>
    <button class="relative block my-5 z-20 text-xl md:text-xl group w-auto min-w-[10rem]">
        <div
            class="absolute inset-0 rounded-md bg-gray-400 z-10 translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 duration-300 ease-in-out ">
        </div>
        <div
            class=" flex flex-col  items-center text-center space-x-2 align-middle relative font-bold bordershadow text-white p-3 lg:px-10 lg:p-4 bg-black rounded-lg z-30 bg-orange-30 ">
            <span class=""> {{ text }}</span>
        </div>
    </button>
</template>


<script setup lang="ts">

const props = defineProps({
    text: {
        type: String,
        required: true,
    }
});

</script>

