<template>
  <div class="columns is-flex-direction-row is-flex-wrap-wrap m-2">
    <div class="column is-one-quarter-desktop is-full-mobile is-full-tablet" v-for="product in this.products" :key="product.id">
      <div class="card">
        <div class="card-image">
          <figure class="image">
            <img :src="product.image" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img :src="product.image" alt="Placeholder image">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">{{ product.title }}</p>
              <p class="subtitle is-6">{{ product.category }}</p>
            </div>
          </div>
          <div class="content">
            {{ product.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        products: null
      }
    },
    mounted: function () {
      this.getProducts()
    },
    methods: {
      getProducts: function () {
        console.log('We got here!')
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json => {
          console.log(json)
          this.products = json
          console.log(this.products)
        })
        .catch(error => {
          console.log('Something went wrong!')
        })
      }
    }
  }
</script>