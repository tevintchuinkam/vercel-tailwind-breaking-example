<!-- <script setup lang="ts">
import { ref } from "vue";


const { $notify } = useNuxtApp();

const { PB_URL } = useUtils();

interface SignupData {
    email: string;
    firstName: string;
}


// async function addSubscriberToList(email: string, list: string) {


// }

// function sendAgain() {
//     sentAgain.value = true;
//     addSubscriberToList(email.value, props.list);
// }


const props = defineProps<{
    show: boolean;
    list: string;
}>();


const email = ref("");
const firstName = ref("");
const errorMessage = ref("");
const showConfirmPage = ref(false);
const sentAgain = ref(false);

// get route param
const route = useRoute();
const confirmed = route.params.confirmed;

const emit = defineEmits(["closePopup"]);

function handleClose(e: any) {
    if (props.show && e.target?.closest("#email-form") === null) {
        showConfirmPage.value = false;
        sentAgain.value = false;
        emit("closePopup");
    }
}

async function signupEmail() {
    if (!validateInput()) {
        return
    }
    showConfirmPage.value = true;
    const data: SignupData = {
        email: email.value,
        firstName: firstName.value,
    };
    const response = await fetch(PB_URL + "/api/kts/add-to-convertkit", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    if (response.ok) {
        console.log('Signup successful');
        $notify.notify({
            title: 'Email Signup Success',
            text: 'You have signed up for our email list.',
            type: 'success'
        })
        // track email signups in plausible.io
        emit("closePopup");
    } else {
        console.error('Signup failed:', response.statusText);
        $notify.notify({
            title: 'Email Signup Error',
            text: 'We are having trouble reaching our servers. Please try again later.',
            type: 'error'
        })
    }
}

function validateInput() {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (firstName.value == "") {
        errorMessage.value = 'Please enter your first name';
        console.log(firstName.value + " no good!")
        return false;
    }

    if (!emailRegex.test(email.value)) {
        console.log(email.value + " no good!")
        errorMessage.value = 'Please enter a valid email address';
        return false;
    }

    errorMessage.value = '';
    return true;
}

</script>

<template>
    <!-- Name and Email Form -->
<div v-if="props.show" class="fixed inset-0 bg-gray-500 bg-opacity-60 flex items-center justify-center z-40">

        <div class="relative">
            <!-- Close Button -->
            <button @click="handleClose" class="absolute top-0 right-0 -translate-x-2 translate-y-2 z-50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#9ca3af"
                    class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <form id="email-form" @keydown.enter.prevent="signupEmail"
                class="z-50 bg-violet-50
                                p-6 rounded-lg flex flex-col items-center text-left lg:max-w-2xl md:max-w-xl max-w-[26rem] h-auto">
                <h1 class="lg:text-2xl md:text-xl text-lg text-dark pb-1 font-lora font-bold">
                    {{ $t('email-popup.title') }}
                </h1>
                <p class="text-violet-500 lg:text-lg text-md text-center pb-4 md:w-[30rem] w-auto">
                    <i class="">{{ $t('email-popup.subtitle') }}
                    </i>
                </p>

                <div class="flex items-center border rounded bg-white py-2 md:w-[30rem] w-full mb-3">
                    <input v-model="firstName"
                        class="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text" :placeholder="$t('first-name')" :aria-label="$t('first-name')" required="true">
                </div>
<div class="flex items-center bg-white rounded border mb-3 py-2 md:w-[30rem] w-full">
                    <input v-model="email"
                        class="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="email" :placeholder="$t('email.label')" :aria-label="$t('email.label')">
                </div>

<button @click="signupEmail"
                    class="flex-shrink-0 w-full text-2xl font-bold shadow-lg hover:opacity-80 bg-teal-500 g-orange-500  text-white py-2  rounded"
                    type="button">
                    {{ $t('email-popup.button') }}
                </button>

<span v-if="errorMessage" class="pt-3 text-red-500">{{ errorMessage }}</span>
            </form>
        </div>

    </div>
</template>
 -->
