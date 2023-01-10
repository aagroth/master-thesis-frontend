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
          <router-link to="/store" class="navbar-item is-tab">Store</router-link>
          <router-link to="/about" class="navbar-item is-tab">About</router-link>
          <router-link to="/terms-and-condition" class="navbar-item is-tab">Terms & Condition</router-link>
          <router-link to="/contact" class="navbar-item is-tab">Contact</router-link>
          <div class="navbar-item is-tab" v-on:click="this.showCartComponent = true"><font-awesome-icon icon="fa-solid fa-bag-shopping" /></div>
        </div>
      </div>
    </nav>
  </header>
  <CartComponent 
    v-if="this.showCartComponent"
    v-on:closeCartComponent="this.showCartComponent = false"
  />
  <RouterView />
  <Footer class="mt-5" />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import CartComponent from './components/CartComponent.vue'

export default {
  name: 'App', 
  data: function() {
      return {
          isOpen: false,
          showCartComponent: false
      }
  },
  components: {
  Footer,
  CartComponent
  }
}
</script>