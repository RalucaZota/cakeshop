import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      path: '/about',
      name: 'about',
      path: '/products',
      name: 'products',
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Home.vue'),
      component: () => import('../views/About.vue'),
      component: () => import('../views/Products.vue'),
      component: () => import('../views/Contact.vue')
    }
  ]
})

export default router
