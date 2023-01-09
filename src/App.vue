<template>
  <header class="m-5">
    <nav class="navbar m-2" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/"><img alt="logo" src="@/assets/logo.png" class="image is-96x96"/></router-link>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" v-on:click="isOpen = !isOpen" v-bind:class="{'is-active': isOpen}">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu is-shadowless" v-bind:class="{'is-active': isOpen}">
        <div class="navbar-end">
            <router-link to="/products" class="navbar-item is-tab">Products</router-link>
            <router-link to="/about" class="navbar-item is-tab">About</router-link>
            <router-link to="/terms-and-condition" class="navbar-item is-tab">Terms & Condition</router-link>
            <router-link to="/contact" class="navbar-item is-tab">Contact</router-link>
            <router-link to="/cart" class="navbar-item is-tab"><font-awesome-icon icon="fa-solid fa-bag-shopping" /></router-link>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />
  <Footer class="mt-5" />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'

export default {
   data: function() {
       return {
           isOpen: false
       }
   },
   components: {
    Footer
   }
}
</script>