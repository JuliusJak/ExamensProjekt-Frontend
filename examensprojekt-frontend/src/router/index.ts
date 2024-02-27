import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import ProfileView  from '@/views/ProfileView.vue';
import SignInView  from '@/views/SignInView.vue';
import SignUpView  from '@/views/SignUpView.vue';
 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signin',
      name: 'Signin',
      component: SignInView ,
    },
    {
      path: '/signup',
      name: 'Signup',
      component: SignUpView ,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: ProfileView ,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
