import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Checkout from '@/views/Checkout.vue'
import Product from '@/views/Product.vue'
import Store from '@/views/Store.vue'
import TermsAndCondition from '@/views/TermsAndCondition.vue'
import User from '@/views/User.vue'
import Contact from '@/views/Contact.vue'

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
      path: '/store',
      name: 'store',
      component: Store
    },
    {
      path: '/product/:id',
      name: 'product',
      component: Product
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
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})

export default router
