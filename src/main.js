import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const vuetify = createVuetify({
    components, directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        }
    }
})

// Vue router
import * as VueRouter from 'vue-router'
const routes = [
    { path: '/', component: () => import('./pages/testModule.vue') },
    { path: '/overview', component: () => import('./pages/overview.vue') },
    { path: '/overview/fungus', component: () => import('./overview/fungus.vue') },
    { path: '/interview', component: () => import('./pages/interview.vue') },
    { path: '/us', component: () => import('./pages/aboutus.vue') },
    { path: '/blogs', component: () => import('./pages/blogs.vue') },
    { path: '/blogs/push1', component: () => import('./blogs/push1/push1.vue') },
    { path: '/blogs/push0', component: () => import('./blogs/push0.vue') },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

createApp(App).use(vuetify).use(router).mount('#app')
