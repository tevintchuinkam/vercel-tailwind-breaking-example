<script setup lang="ts">
const expanded = ref(false)

// use hompage layout 
definePageMeta({
    layout: 'homepage'
})
const spotsLeft = ref(1)

const spots = computed(() => {
    if (spotsLeft.value != 1) {
        return String(spotsLeft.value) + " spots left"
    }
    else {
        return String(spotsLeft.value) + " spot left"
    }
})


const rocket = ref<HTMLElement | null>(null);
const mousePosition = reactive({ x: 0, y: 0 });
let elementPosition = { x: 0, y: 0 };

const updateElementPosition = () => {
    if (rocket.value) {
        const rect = rocket.value.getBoundingClientRect();
        elementPosition.x = rect.left + rect.width / 2;
        elementPosition.y = rect.top + rect.height / 2;
    }
};

const updateMousePosition = (event: MouseEvent) => {
    mousePosition.x = event.clientX;
    mousePosition.y = event.clientY;
};

const distanceToRocket = () => {
    const dx = mousePosition.x - elementPosition.x;
    const dy = mousePosition.y - elementPosition.y;
    return Math.sqrt(dx * dx + dy * dy);
};

const rocketUp = computed(() => {
    let distance = distanceToRocket();
    if (distance < 400) {
        return true;
    }
    return false
});


function scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
        });
    } else {
        console.warn(`Element with id ${elementId} not found.`);
    }
}

const calendarURL = "https://calendly.com/tevintchuinkam/launchpad-it-intro"

onMounted(() => {
    window.addEventListener('mousemove', updateMousePosition);
    updateElementPosition();
    window.addEventListener('resize', updateElementPosition);
});

onUnmounted(() => {
    window.removeEventListener('mousemove', updateMousePosition);
    window.removeEventListener('resize', updateElementPosition);
});
</script>


<template>
    <div>
        <!-- Hero Section -->
        <section id="hero" class=" bg-[#d3e1f2] pb-10">

            <!-- Hero Container -->
            <div class="container flex flex-row items-center mx-auto max-w-7xl ">
                <!-- Content Container -->
                <div class="flex flex-col items-center md:items-start space-y-6 lg:mt-3 lg:w-3/4 xl:mb-20 mx-3">
                    <img src="@/assets/logo/logo-black.png" class="h-7 mt-5 mb-20" alt="">

                    <h1
                        class="text-[2.75rem] font-bold tracking-tight font-kanit leading-tight text-center md:text-start max-w-[38rem] lg:text-7xl">
                        Get your software mvp
                        in <span class=" text-indigo-600 accent-indigo-400">three weeks</span>
                    </h1>
                    <p class="text-lg lg:text-xl text-center md:text-start max-w-[36rem] text-gray-700 accent-gray-700">
                        We help your fullstack web app get to market faster. Simple and transparent.
                    </p>

                    <a :href="calendarURL" target="_blank">
                        <CTA text="contact"></CTA>
                    </a>
                    <!-- <CTA text="see pricing" @click="scrollToElement('pricing')"></CTA> -->
                </div>

                <div class="hidden md:flex flex-col items-center space-y-6 lg:mt-3 p-1 lg:w-3/4 mx-5">
                    <img src="@/assets/svgs/rocket.svg" id="rocket" ref="rocket" @mousemove="updateMousePosition"
                        class="z-40 transition-all md:w-56 lg:w-64 xl:w-72 duration-1000" alt="rocket taking off"
                        :class="{ 'translate-y-8 md:translate-y-12': !rocketUp, 'translate-y-0': rocketUp }">
                    <img src="@/assets/svgs/launchpad.svg" class="md:w-56 lg:w-64 xl:w-72" alt="launchpad for rocket">
                </div>
            </div>
        </section>


        <section id="social-proof-1">

        </section>


        <section id="visual-process-diagram">

        </section>



        <section id="benefits" class="bg-gray-200">
            <section class="py-12 bg-white sm:py-16 lg:py-20">
                <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div class="text-center flex flex-col items-center">
                        <h2 class="text-4xl md:text-5xl font-kanit font-bold leading-tight max-w-[30rem] text-gray-900">
                            Benefits
                        </h2>
                        <p class="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">For a smooth ride from idea to
                            MVP.
                        </p>
                    </div>
                    <div
                        class="grid grid-cols-1 mt-10 text-center sm:mt-10 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-16">

                        <LandingPageBenefitBox title="Quality assurance"
                            description="We ensure that your MVP is not only fast to market but also robust and reliable."
                            icon="quality.svg" />
                        <LandingPageBenefitBox title="Top tier support" description="You have direct access to our developers. That way, you benefit from 
                    extremely fast feedback loops." icon="support.svg" />
                        <LandingPageBenefitBox title="Progress tracking" description="Stay informed and in control during the entire development process
                     with real-time progress tracking." icon="progress.svg" />
                        <LandingPageBenefitBox title="Time efficient" description="We value your time just like you do. That's why we make sure to 
                    minimize your time commitment." icon="clock.svg" />
                        <LandingPageBenefitBox title="Full MVP" description="Landing page, authentication, 3-5 key features, 
                    transactional emails and payment." icon="product.svg" />
                        <LandingPageBenefitBox title="Unlimited revisions" description="Customer satisfaction is our top priority. We make sure 
                    to get you get the result you want. " icon="revisions.svg" />
                    </div>
                </div>
            </section>

        </section>

        <section id="tech" class="py-16">

            <div class="flex flex-col items-center">
                <h1 class="text-4xl md:text-5xl font-kanit font-bold mb-7 max-w-[32rem] text-center">Technology</h1>
                <p class="mb-20 text-gray-600">Built with reliable tech that adjusts to your needs.</p>
                <div class="grid grid-cols-4 gap-7 lg:gap-16 md:gap-10 xl:gap-20">
                    <img src="@/assets/svgs/nuxt.svg" class="lg:w-32 lg:h-32 md:h-24 md:w-24 h-16 w-16" alt="nuxtjs logo">
                    <img src="@/assets/svgs/vue.svg" class="lg:w-20 lg:h-20 md:h-16 md:w-16 h-12 w-12" alt="vuejs logo">
                    <img src="@/assets/svgs/tailwind.svg" class="lg:w-20 lg:h-20 md:h-16 md:w-16 h-12 w-12"
                        alt="tailindcss logo">
                    <img src="@/assets/svgs/go.svg" class="lg:w-20 lg:h-20 md:h-16 md:w-16 h-12 w-12" alt="golang logo">
                    <img src="@/assets/svgs/python.svg" class="lg:w-20 lg:h-20 md:h-16 md:w-16 h-12 w-12" alt="python logo">
                    <img src="@/assets/svgs/mongodb.svg" class="lg:w-20 lg:h-20 md:h-16 md:w-16 h-12 w-12"
                        alt="mongodb logo">
                    <img src="@/assets/svgs/typescript.svg" class="lg:w-20 lg:h-20 md:h-16 md:w-16 h-12 w-12"
                        alt="typescript logo">
                    <img src="@/assets/svgs/stripe.svg" class="lg:w-20 lg:h-20 md:h-16 md:w-16 h-12 w-12" alt="stripe logo">
                    <img src="@/assets/svgs/sendgrid.svg" class="lg:w-32 lg:h-32 md:h-24 md:w-24 h-16 w-16"
                        alt="sendgrid logo">
                    <img src="@/assets/svgs/pocketbase.svg" class="lg:w-20 lg:h-20 md:h-16 md:w-16 h-12 w-12"
                        alt="pocketbase logo">
                    <img src="@/assets/svgs/openai.svg" class="lg:w-20 lg:h-20 md:h-16 md:w-16 h-12 w-12" alt="openai logo">
                    <img src="@/assets/svgs/docker.svg" class="lg:w-20 lg:h-20 md:h-16 md:w-16 h-12 w-12" alt="docker logo">
                </div>
            </div>
        </section>



        <section id="pricing" class="bg-[#d3e1f2] py-10">
            <div class="flex flex-col items-center p-6 mx-auto max-w-lg text-center text-gray-900 ">
                <h3 class="mb-12 text-4xl md:text-5xl font-kanit font-semibold">Let's get started!</h3>
                <!-- <p class="font-light text-gray-600 sm:text-lg ">Simple and transparent.</p> -->
                <!-- <div class="flex justify-center items-baseline my-8">
                <span class="mr-2 text-5xl font-extrabold font-kanit">$4990</span>
            </div> -->
                <!-- List -->
                <dev role="list" class="grid grid-cols-2 gap-6 mb-8 space-y-2 text-left">
                    <LandingPagePricingSectionIncludedFeature text="MVP"></LandingPagePricingSectionIncludedFeature>
                    <LandingPagePricingSectionIncludedFeature text="3-5 features">
                    </LandingPagePricingSectionIncludedFeature>
                    <LandingPagePricingSectionIncludedFeature text="Landing page">
                    </LandingPagePricingSectionIncludedFeature>
                    <LandingPagePricingSectionIncludedFeature text="Transactional emails">
                    </LandingPagePricingSectionIncludedFeature>
                    <LandingPagePricingSectionIncludedFeature text="Stripe integration">
                    </LandingPagePricingSectionIncludedFeature>
                    <LandingPagePricingSectionIncludedFeature text="Authentication">
                    </LandingPagePricingSectionIncludedFeature>
                    <LandingPagePricingSectionIncludedFeature text="Deployment"></LandingPagePricingSectionIncludedFeature>
                    <LandingPagePricingSectionIncludedFeature text="Unlimited revisions">
                    </LandingPagePricingSectionIncludedFeature>
                </dev>
                <div class="flex flex-col items-center">
                    <!-- <a href="https://calendly.com/tevintchuinkam/launchpad-it-intro" target="_blank">
                    <CTA class=" " text="Book a call"></CTA>
                </a> -->
                    <a :href="calendarURL" target="_blank">
                        <CTA class=" " text="contact"></CTA>
                    </a>

                    <!-- <div class=" text-red-800 accent-red-800 text-sm flex flex-row items-center space-x-2"><span>Currently {{
                    spots }} left</span>
                    <img src="@/assets/svgs/redclock.svg" class="w-3 h-3  fill-red-600 stroke-red-600 " alt="">
                </div> -->
                </div>

            </div>
        </section>



        <section id="faq">
            <div class="relative w-full px-6 pt-10 pb-8 mt-8 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
                <div class="mx-auto px-5">
                    <div class="flex flex-col items-center">
                        <h2 class="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl font-kanit">FAQs</h2>
                        <p class="mt-5 text-lg text-neutral-500 md:text-xl">Frequently asked questions

                        </p>
                    </div>
                    <div class="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
                        <FAQDetails title="What types of apps can you build?" description="We exclusively build web apps. We currently do not
                    offer mobile app development.">
                        </FAQDetails>
                        <FAQDetails title="What happens after I buy?" description="After an initial meeting in which you outline your vision for the Minimum Viable 
                        Product (MVP) and we collaboratively identify its key features, the development process starts.
                        From that point forward, you'll have round-the-clock access to monitor all ongoing progress, 
                        complemented by daily updates. Following a three-week development period, you will have the opportunity
                        to review the final product and request any necessary revisions.">
                        </FAQDetails>
                        <FAQDetails title="Are all projects guaranteed to be done in three weeks?"
                            description="Yes. 
                    If you pick our standard package with 3-5 features, we guarantee that your MVP will be ready three weeks after signing the contract (excluding revisions).
                    If however you need more (or highly complex) features for your MVP, we may need to adjust the scope of your project. "></FAQDetails>
                        <FAQDetails title="How does the billing work?" description="You will be charged 50% of the contract value 
                    at the start, and the remaining 50% at the end."></FAQDetails>
                        <FAQDetails title="Can I get revisions?" description="Absolutely. We value 
                    customer satisfaction over everything. You have unlimited free revisions available. "></FAQDetails>
                    </div>
                </div>
            </div>
        </section>


        <section id="last-cta">


        </section>
    </div>
</template>

