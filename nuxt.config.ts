// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // modules: ['@pinia/nuxt','nuxt-vuefire'],
    modules: ['@pinia/nuxt','@vueuse/motion/nuxt','nuxt-vuefire'],
    css: ['vuetify/lib/styles/main.sass', '@/assets/css/fonts.css'],
    ssr: true,
    build: {
        transpile: ['vuetify'],
    },
    nitro: {
        preset: 'firebase'
    },
    vuefire: {
        auth: {
            enabled: true
        },
        config: {
            apiKey: process.env.CLIENT_FIREBASE_API_KEY,
            authDomain: process.env.CLIENT_FIREBASE_AUTH_DOMAIN,
            projectId: process.env.CLIENT_FIREBASE_PROJECT_ID,
            appId: process.env.CLIENT_FIREBASE_APP_ID,
        },
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    },
    pinia: {
        autoImports: ['defineStore', ['defineStore', 'definePiniaStore']],
    },
    runtimeConfig: {
        public: {
            //깃헙 표시용 깃헙 주소
            BASE_URL: process.env.BASE_URL,
            selfGitHubUrl: process.env.SELF_GITHUB_URL,
        }
    },


});
