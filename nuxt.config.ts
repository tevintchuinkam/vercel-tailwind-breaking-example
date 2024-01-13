// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
    devtools: { enabled: false },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts',
        '@nuxtjs/plausible',
    ],

    imports: {
        dirs: ['types']
    },
    runtimeConfig: {
        public: {
            PB_URL_PROD: process.env.PB_URL_PROD,
            PB_URL_LOCAL: process.env.PB_URL_LOCAL,
        },
    },

    plausible: {
        domain: 'launchpad-it.com',
    },

    googleFonts: {
        families: {
            'Lora': true,
            'Kanit': true
        },
        display: 'swap',
        // useStylesheet: true,
    },
    css: ['~/assets/css/main.css'],
    // postcss: {
    //     plugins: {
    //         tailwindcss: {},
    //         autoprefixer: {},
    //         // cssnano:
    //         //     process.env.NODE_ENV === 'production'
    //         //         ? { preset: ['default', { discardComments: { removeAll: true } }] }
    //         //         : false, // disable cssnano when not in production
    //     },
    // },
    app: {
        head: {
            title: 'Launchpad IT',
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
            ],
            script: [
                { src: 'https://js.stripe.com/v3/' },
            ],
            link: [
                {
                    href: 'https://fonts.googleapis.com/css2?family=Lora&display=swap',
                    rel: 'preload',
                    as: 'style',
                    crossorigin: 'anonymous'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Lora&display=swap',
                    media: 'print',
                    onload: "this.media='all'"
                },
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', sizes: 'any' },

                {
                    href: 'https://fonts.googleapis.com/css2?family=Passion+One&display=swap',
                    rel: 'preload',
                    as: 'style',
                    crossorigin: 'anonymous'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Passion+One&display=swap',
                    media: 'print',
                    onload: "this.media='all'"
                },
            ],
        }
    },
    ssr: true,
})
