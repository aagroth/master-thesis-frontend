import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import AboutUs from '@/views/AboutUs.vue'
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
    }
  ]
})

export default router
