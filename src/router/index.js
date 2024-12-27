import { createRouter, createWebHistory } from 'vue-router';
import HomepageComponent from '../components/HomepageComponent.vue';
import ResumeUploadComponent from '../components/ResumeUploadComponent.vue';


const routes = [
  { path: '/', component: HomepageComponent },
  { path: '/upload', component: ResumeUploadComponent },
  { path: '/analysis', component: () => import('../components/AnalysisResultsComponent.vue') },
  { path: '/about', component: () => import('../components/AboutPageComponent.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
