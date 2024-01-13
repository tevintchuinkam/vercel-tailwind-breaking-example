<template>
   <!-- ====== FAQ Section Start -->
   <section class="relative z-20 overflow-hidden bg-gray-50  pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
      <div class="container mx-auto">
         <div class="flex flex-wrap -mx-4">
            <div class="w-full px-4">
               <div class="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                  <span class="block mb-2 text-lg font-semibold text-primary">
                     FAQ
                  </span>
                  <h2 class="text-gray-900  mb-4 text-3xl font-lora font-bold sm:text-[40px]/[48px]">
                     {{ ('faq-header') }}

                  </h2>
                  <p class="text-base text-body-color">
                     {{ ('faq-subheader') }}
                  </p>
               </div>
            </div>
         </div>
         <div class="flex  flex-wrap -mx-4">
            <div class="w-full px-4 lg:w-1/2">
               <div
                  class="w-full p-4 mb-8 bg-white rounded-lg shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] (0,0,0,0.30)] -2 sm:p-8 lg:px-6 xl:px-8">
                  <button class="flex w-full text-left faq-btn" @click="openFaq1 = !openFaq1">
                     <div
                        class="bg-primary/5 /5 text-primary mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg">
                        <svg :class="{ 'rotate-180': openFaq1 }" width="22" height="22" viewBox="0 0 22 22" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M11 15.675C10.7937 15.675 10.6219 15.6062 10.45 15.4687L2.54374 7.69998C2.23436 7.3906 2.23436 6.90935 2.54374 6.59998C2.85311 6.2906 3.33436 6.2906 3.64374 6.59998L11 13.7844L18.3562 6.53123C18.6656 6.22185 19.1469 6.22185 19.4562 6.53123C19.7656 6.8406 19.7656 7.32185 19.4562 7.63123L11.55 15.4C11.3781 15.5719 11.2062 15.675 11 15.675Z"
                              fill="currentColor" />
                        </svg>
                     </div>
                     <div class="w-full">
                        <h4 class="mt-1 text-lg font-semibold text-gray-900 ">
                           {{ ('faq-question-1') }}
                        </h4>
                     </div>
                  </button>
                  <div v-if="openFaq1" class="faq-content pl-[62px]">
                     <p class="py-3 text-base leading-relaxed text-body-color -6">
                        {{ ('faq-answer-1') }}

                     </p>
                  </div>
               </div>
               <div
                  class="w-full p-4 mb-8 bg-white rounded-lg shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] (0,0,0,0.30)] -2 sm:p-8 lg:px-6 xl:px-8">
                  <button class="flex w-full text-left faq-btn" @click="openFaq2 = !openFaq2">
                     <div
                        class="bg-primary/5 /5 text-primary mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg">
                        <svg :class="{ 'rotate-180': openFaq2 }" width="22" height="22" viewBox="0 0 22 22" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M11 15.675C10.7937 15.675 10.6219 15.6062 10.45 15.4687L2.54374 7.69998C2.23436 7.3906 2.23436 6.90935 2.54374 6.59998C2.85311 6.2906 3.33436 6.2906 3.64374 6.59998L11 13.7844L18.3562 6.53123C18.6656 6.22185 19.1469 6.22185 19.4562 6.53123C19.7656 6.8406 19.7656 7.32185 19.4562 7.63123L11.55 15.4C11.3781 15.5719 11.2062 15.675 11 15.675Z"
                              fill="currentColor" />
                        </svg>
                     </div>
                     <div class="w-full">
                        <h4 class="mt-1 text-lg font-semibold text-gray-900 ">
                           {{ ('faq-question-2') }}
                        </h4>
                     </div>
                  </button>
                  <div v-if="openFaq2" class="faq-content pl-[62px]">
                     <p class="py-3 text-base leading-relaxed text-body-color -6">
                        {{ ('faq-answer-2') }}

                     </p>
                  </div>
               </div>
               <div
                  class="w-full p-4 mb-8 bg-white rounded-lg shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] (0,0,0,0.30)] -2 sm:p-8 lg:px-6 xl:px-8">
                  <button class="flex w-full text-left faq-btn" @click="openFaq3 = !openFaq3">
                     <div
                        class="bg-primary/5 /5 text-primary mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg">
                        <svg :class="{ 'rotate-180': openFaq3 }" width="22" height="22" viewBox="0 0 22 22" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M11 15.675C10.7937 15.675 10.6219 15.6062 10.45 15.4687L2.54374 7.69998C2.23436 7.3906 2.23436 6.90935 2.54374 6.59998C2.85311 6.2906 3.33436 6.2906 3.64374 6.59998L11 13.7844L18.3562 6.53123C18.6656 6.22185 19.1469 6.22185 19.4562 6.53123C19.7656 6.8406 19.7656 7.32185 19.4562 7.63123L11.55 15.4C11.3781 15.5719 11.2062 15.675 11 15.675Z"
                              fill="currentColor" />
                        </svg>
                     </div>
                     <div class="w-full">
                        <h4 class="mt-1 text-lg font-semibold text-gray-900 ">
                           {{ ('faq-question-3') }}
                        </h4>
                     </div>
                  </button>
                  <div v-if="openFaq3" class="faq-content pl-[62px]">
                     <p class="py-3 text-base leading-relaxed text-body-color -6">
                        {{ ('faq-answer-3') }}

                     </p>
                  </div>
               </div>
            </div>
            <div class="w-full px-4 lg:w-1/2">
               <div
                  class="w-full p-4 mb-8 bg-white rounded-lg shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] (0,0,0,0.30)] -2 sm:p-8 lg:px-6 xl:px-8">
                  <button class="flex w-full text-left faq-btn" @click="openFaq4 = !openFaq4">
                     <div
                        class="bg-primary/5 /5 text-primary mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg">
                        <svg :class="{ 'rotate-180': openFaq4 }" width="22" height="22" viewBox="0 0 22 22" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M11 15.675C10.7937 15.675 10.6219 15.6062 10.45 15.4687L2.54374 7.69998C2.23436 7.3906 2.23436 6.90935 2.54374 6.59998C2.85311 6.2906 3.33436 6.2906 3.64374 6.59998L11 13.7844L18.3562 6.53123C18.6656 6.22185 19.1469 6.22185 19.4562 6.53123C19.7656 6.8406 19.7656 7.32185 19.4562 7.63123L11.55 15.4C11.3781 15.5719 11.2062 15.675 11 15.675Z"
                              fill="currentColor" />
                        </svg>
                     </div>
                     <div class="w-full">
                        <h4 class="mt-1 text-lg font-semibold text-gray-900 ">
                           {{ ('faq-question-4') }}
                        </h4>
                     </div>
                  </button>
                  <div v-if="openFaq4" class="faq-content pl-[62px]">
                     <p class="py-3 text-base leading-relaxed text-body-color -6">
                        {{ ('faq-answer-4') }}

                     </p>
                  </div>
               </div>
               <div
                  class="w-full p-4 mb-8 bg-white rounded-lg shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] (0,0,0,0.30)] -2 sm:p-8 lg:px-6 xl:px-8">
                  <button class="flex w-full text-left faq-btn" @click="openFaq5 = !openFaq5">
                     <div
                        class="bg-primary/5 /5 text-primary mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg">
                        <svg :class="{ 'rotate-180': openFaq5 }" width="22" height="22" viewBox="0 0 22 22" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M11 15.675C10.7937 15.675 10.6219 15.6062 10.45 15.4687L2.54374 7.69998C2.23436 7.3906 2.23436 6.90935 2.54374 6.59998C2.85311 6.2906 3.33436 6.2906 3.64374 6.59998L11 13.7844L18.3562 6.53123C18.6656 6.22185 19.1469 6.22185 19.4562 6.53123C19.7656 6.8406 19.7656 7.32185 19.4562 7.63123L11.55 15.4C11.3781 15.5719 11.2062 15.675 11 15.675Z"
                              fill="currentColor" />
                        </svg>
                     </div>
                     <div class="w-full">
                        <h4 class="mt-1 text-lg font-semibold text-gray-900 ">
                           {{ ('faq-question-5') }}
                        </h4>
                     </div>
                  </button>
                  <div v-if="openFaq5" class="faq-content pl-[62px]">
                     <p class="py-3 text-base leading-relaxed text-body-color -6">
                        {{ ('faq-answer-5') }}

                     </p>
                  </div>
               </div>
               <div
                  class="w-full p-4 mb-8 bg-white rounded-lg shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] (0,0,0,0.30)] -2 sm:p-8 lg:px-6 xl:px-8">
                  <button class="flex w-full text-left faq-btn" @click="openFaq6 = !openFaq6">
                     <div
                        class="bg-primary/5 /5 text-primary mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg">
                        <svg :class="{ 'rotate-180': openFaq6 }" width="22" height="22" viewBox="0 0 22 22" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M11 15.675C10.7937 15.675 10.6219 15.6062 10.45 15.4687L2.54374 7.69998C2.23436 7.3906 2.23436 6.90935 2.54374 6.59998C2.85311 6.2906 3.33436 6.2906 3.64374 6.59998L11 13.7844L18.3562 6.53123C18.6656 6.22185 19.1469 6.22185 19.4562 6.53123C19.7656 6.8406 19.7656 7.32185 19.4562 7.63123L11.55 15.4C11.3781 15.5719 11.2062 15.675 11 15.675Z"
                              fill="currentColor" />
                        </svg>
                     </div>
                     <div class="w-full">
                        <h4 class="mt-1 text-lg font-semibold text-gray-900 ">
                           {{ ('faq-question-6') }}
                        </h4>
                     </div>
                  </button>
                  <div v-show="openFaq6" class="faq-content pl-[62px]">
                     <p class="py-3 text-base leading-relaxed text-body-color -6">
                        {{ ('faq-answer-6') }}
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="absolute bottom-0 right-0 z-[-1]">
         <svg width="1440" height="886" viewBox="0 0 1440 886" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.5"
               d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
               fill="url(#paint0_linear)" />
            <defs>
               <linearGradient id="paint0_linear" x1="1308.65" y1="1142.58" x2="602.827" y2="-418.681"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="#7dd3fc" stop-opacity="0.36" />
                  <stop offset="1" stop-color="#bae6fd" stop-opacity="0" />
                  <stop offset="1" stop-color="#7dd3fc" stop-opacity="0.096144" />
               </linearGradient>
            </defs>
         </svg>
      </div>
   </section>
   <!-- ====== FAQ Section End -->
</template>

<script setup lang="ts">


import { ref } from 'vue'
const openFaq1 = ref(false)
const openFaq2 = ref(false)
const openFaq3 = ref(false)
const openFaq4 = ref(false)
const openFaq5 = ref(false)
const openFaq6 = ref(false)

</script>
