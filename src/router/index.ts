import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import Products from '../views/Products.vue'
import ProductStock from '../views/ProductStock.vue'
import OrderList from '../views/OrderList.vue'
import Favorites from '../views/Favorites.vue'
import Settings from '../views/Settings.vue'
import Inbox from '../views/Inbox.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { requiresAuth: false }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: { requiresAuth: false }
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      meta: { requiresAuth: true }
    },
    {
      path: '/products',
      name: 'Products',
      component: Products,
      meta: { requiresAuth: true }
    },
    {
      path: '/product-stock',
      name: 'ProductStock',
      component: ProductStock,
      meta: { requiresAuth: true }
    },
    {
      path: '/order-lists',
      name: 'OrderList',
      component: OrderList,
      meta: { requiresAuth: true }
    },
    {
      path: '/favorites',
      name: 'Favorites',
      component: Favorites,
      meta: { requiresAuth: true }
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings,
      meta: { requiresAuth: true }
    },
    {
      path: '/inbox',
      name: 'Inbox',
      component: Inbox,
      meta: { requiresAuth: true }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/login')
  } else if (!to.meta.requiresAuth && authStore.isAuthenticated) {
    next('/')
  } else {
    next()
  }
})

export default router