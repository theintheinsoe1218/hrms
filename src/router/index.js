import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/backend/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/backend/Dashboard.vue'),
    },
    {
      path: '/attendance',
      name: 'attendance',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/backend/Attendance.vue'),
    },
    {
      path: '/leave',
      name: 'leave',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/backend/Leave.vue'),
    },
  ],
})

export default router
