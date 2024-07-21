import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './components/AppHome.vue';
import AppAbout from './components/AppAbout.vue';
import AppProjects from './components/AppProjects.vue';
import AppContacts from './components/AppContacts.vue';

const routes = [
  { path: '/', component: AppHome },
  { path: '/about', component: AppAbout },
  { path: '/projects', component: AppProjects },
  { path: '/contacts', component: AppContacts }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;