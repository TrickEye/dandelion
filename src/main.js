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
    { path: '/interview/leidaye', component: () => import('./interview/rural/leidaye.vue') },
    { path: '/interview/lidaniang', component: () => import('./interview/rural/lidaniang.vue') },
    { path: '/interview/xuhaiyou', component: () => import('./interview/rural/xuhaiyou.vue') },
    { path: '/interview/xulele', component: () => import('./interview/rural/xulele.vue') },
    { path: '/interview/blue', component: () => import('./interview/urban/blue.vue') },
    { path: '/interview/govern', component: () => import('./interview/urban/govern.vue') },
    { path: '/interview/shop', component: () => import('./interview/urban/shop.vue') },
    { path: '/interview/secretary', component: () => import('./interview/urban/secretary.vue') },
    { path: '/interview/summary', component: () => import('./interview/interSummary.vue') },
    { path: '/us', component: () => import('./pages/aboutus.vue') },
    { path: '/blogs', component: () => import('./pages/blogs.vue') },
    { path: '/blogs/push1', component: () => import('./blogs/push1.vue') },
    { path: '/blogs/push0', component: () => import('./blogs/push0.vue') },
    { path: '/blogs/push2', component: () => import('./blogs/push2.vue') },
    { path: '/blogs/push3', component: () => import('./blogs/push3.vue') },
    { path: '/blogs/push4', component: () => import('./blogs/push4.vue') },
    { path: '/blogs/push5', component: () => import('./blogs/push5.vue') },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

createApp(App).use(vuetify).use(router).mount('#app')
