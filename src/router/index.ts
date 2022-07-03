import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import { MainLayout } from '@/layouts'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'MainLayout',
    component: MainLayout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue'),
      },
      {
        path: '/settings',
        name: 'Settings',
        component: () => import(/* webpackChunkName: "about" */ '../views/settings/index.vue'),
      },
      {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/about/index.vue'),
      },
    ],
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "auth" */ '../views/auth/login.vue'),
  },
  {
    path: '/auth/signup',
    name: 'SignUp',
    component: () => import(/* webpackChunkName: "auth" */ '../views/auth/signup.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
