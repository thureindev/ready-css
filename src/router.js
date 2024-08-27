import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './components/HomeView.vue';
import AboutView from './components/AboutView.vue';

const navRoutes = [
    { name: 'Dashboard', href: '/', current: true, component: HomeView },
    { name: 'Team', href: '/about', current: false, component: AboutView },
    { name: 'Projects', href: '/', current: false, component: HomeView },
    { name: 'Calendar', href: '/about', current: false, component: AboutView },
    { name: 'Reports', href: '/', current: false, component: HomeView },
]

const routes = navRoutes.map((item) => ({ path: item.href, component: item.component }));
const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export { router, routes, navRoutes };