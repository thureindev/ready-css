import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './components/HomeView.vue';
import AboutView from './components/AboutView.vue';
import ButtonsView from './components/ButtonsView.vue';


const navRoutes = [
    { name: 'Home', href: '/', current: false, component: HomeView },
    { name: 'Buttons', href: '/buttons', current: false, component: ButtonsView },
    { name: 'About', href: '/about', current: false, component: AboutView },
]

const routes = navRoutes.map((item) => ({ path: item.href, component: item.component }));
const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export { router, routes, navRoutes };