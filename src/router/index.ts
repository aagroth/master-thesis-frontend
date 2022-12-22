import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Cart from '@/views/Cart.vue'
import Checkout from '@/views/Checkout.vue'
import Product from '@/views/Product.vue'
import Products from '@/views/Products.vue'
import TermsAndCondition from '@/views/TermsAndCondition.vue'
import User from '@/views/User.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/terms-and-condition',
      name: 'terms and condition',
      component: TermsAndCondition
    },
    {
      path: '/user',
      name: 'user',
      component: User
    }
  ]
})

export default router
