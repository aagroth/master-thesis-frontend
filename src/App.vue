<template>
  <header>
    <nav class="navbar m-2" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <img alt="logo" src="@/assets/logo.png" class="image is-96x96"/>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="isOpen = !isOpen" v-bind:class="{'is-active': isOpen}">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" v-bind:class="{'is-active': isOpen}">
        <div class="navbar-end">
            <router-link to="/products" class="navbar-item is-tab">Products</router-link>
            <router-link to="/about" class="navbar-item is-tab">About</router-link>
            <router-link to="/terms-and-condition" class="navbar-item is-tab">Terms & Condition</router-link>
            <router-link to="/contact" class="navbar-item is-tab">Contact</router-link>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
   data: function() {
       return {
           isOpen: false
       }
   }
}
</script>