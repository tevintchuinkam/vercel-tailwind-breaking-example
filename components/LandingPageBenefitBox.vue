<template>
    <div class="flex flex-col items-center md:p-8 lg:p-14">
        <img :src="svgPath" alt="">
        <h3 class="mt-12 text-xl font-bold text-gray-900 font-pj">{{ title }}</h3>
        <p class="mt-5 text-base text-gray-600 font-pj">{{ description }}</p>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    title: String,
    description: String,
    icon: String,
});

// Static imports for each SVG
import supportSvg from '@/assets/svgs/benefits/support.svg';
import progressSvg from '@/assets/svgs/benefits/progress.svg';
import clockSvg from '@/assets/svgs/benefits/clock.svg';
import productSvg from '@/assets/svgs/benefits/product.svg';
import qualitySvg from '@/assets/svgs/benefits/quality.svg';
import revisionsSvg from '@/assets/svgs/benefits/revisions.svg';
// Import other SVGs similarly

// Mapping object
const svgMap: { [key: string]: string } = {
    'support.svg': supportSvg,
    'progress.svg': progressSvg,
    'clock.svg': clockSvg,
    'product.svg': productSvg,
    'quality.svg': qualitySvg,
    'revisions.svg': revisionsSvg,
};

const svgPath = computed(() => {
    return props.icon ? svgMap[props.icon] : '';
});
</script>
