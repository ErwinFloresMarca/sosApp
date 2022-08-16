import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    name: 'Home',
    path: '/',
    component: () => import('../views/HomePage.vue')
  },
  {
    name: 'LineasDeOrientacion',
    path: '/lineas-de-orientacion',
    component: () => import('../views/lineasDeOrientacion.vue')
  },
  {
    name: 'LineasDeEmergencia',
    path: '/lineas-de-emergencia',
    component: () => import('../views/lineasDeEmergencia.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
