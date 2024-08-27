import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './components/HomeView.vue';
import AboutView from './components/AboutView.vue';

const navRoutes = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
    { name: 'Reports', href: '#', current: false },
]

const routes = navRoutes.map(item => {path: item.href})

[
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export { router, routes, navRoutes };