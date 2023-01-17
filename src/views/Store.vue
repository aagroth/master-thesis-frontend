<template>
  <div class="has-background-danger p-3" v-if="this.warnUser === true">
    <p class="has-text-white-bis has-text-centered">You already have this product in your cart!</p>
  </div>
  <div class="columns is-flex-direction-row is-flex-wrap-wrap m-2 is-equal-height">
    <div class="column is-one-quarter-desktop is-full-mobile is-full-tablet" v-for="product in this.products" :key="product.id">
      <div class="card">
        <div class="card-image">
          <figure class="image">
            <img :src="product.imgUrl" alt="Product image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img :src="product.imgUrl" alt="Small product image">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">{{ product.title }}</p>
              <p class="subtitle is-6">${{ product.price }}</p>
            </div>
          </div>
          <div class="content">
            {{ product.description }}
          </div>
          <div class="">
            <div>
              <td><button class="button is-small mr-2" v-on:click="product.qty--">-</button></td>
              <td>{{ product.qty }}</td>
              <td><button class="button is-small ml-2" v-on:click="product.qty++">+</button></td>
            </div>
            <button v-on:click="this.goToProduct(product.id)" class="button mr-2 mt-2">See product</button>
            <button class="button is-primary mt-2" v-on:click="this.storeToLocalStorage(product)">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import apiManager from '@/components/apiManager.ts'

  export default {
    name: 'Store',
    data () {
      return {
        products: null,
        cart: [],
        product: null,
        warnUser: false
      }
    },
    mounted: function () {
      this.getProducts()
    },
    methods: {
      getProducts: function () {
        apiManager.getAllProductsFromDb().then(products => {
          this.products = products
        })
        .catch(error => {
          console.log(error)
        })
      },
      goToProduct: function (idProduct) {
        this.$router.push({name:'product',params:{id:idProduct}})
      },
      storeToLocalStorage: function (productObject) {
        this.cart = localStorage.getItem('cart')
        this.cart = this.cart ? JSON.parse(this.cart) : []
        let found = this.cart.find(product => product.id == productObject.id)

        if (found) {
          this.warnUser = true
        } else {
          this.warnUser = false
          this.product = productObject
          this.cart.push(this.product)
          localStorage.setItem("cart", JSON.stringify(this.cart))
        }
      }
    }
  }
</script>