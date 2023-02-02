import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../pages/HomePage.vue';
import AboutUs from '../pages/AboutUs.vue';
import Contacts from '../pages/Contacts.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage
        },
        {
            path: '/chi-siamo',
            name: 'about-us',
            component: AboutUs
        },
        {
            path: '/contatti',
            name: 'contacts',
            component: Contacts
        },
    ]
})

export default router;