<template>
  <div class="has-background-danger p-3" v-if="this.warnUser === true">
    <p class="has-text-white-bis has-text-centered">You already have this product in your cart!</p>
  </div>
  <div class="mb-3" v-for="(product,index) in products" :key="index">
    <div class="container" v-if="idProduct == product.id">
      <div class="columns">
        <div class="column is-half">
          <figure class="image">
            <img :src="product.imgUrl" alt="Product image">
          </figure>
        </div>
        <div class="column auto">
          <table class="table">
            <thead>
              <th>Details</th>
              <th></th>
              <th></th>
              <th></th>
            </thead>
            <tbody>
              <tr>
                <td>Title:</td>
                <td>{{ product.title }}</td>
              </tr>
              <tr>
                <td>Description:</td>
                <td>{{ product.description }}</td>
              </tr>
              <tr>
                <td>Price:</td>
                <td>${{ product.price }}</td>
              </tr>
              <tr>
                <td>Quantity:</td>
                <td>
                  <button class="button is-small" v-on:click="product.qty--">-</button>
                  {{ product.qty }}
                  <button class="button is-small" v-on:click="product.qty++">+</button>
                </td>
              </tr>
            </tbody>
          </table>
          <button class="button is-primary mr-2" v-on:click="this.storeToLocalStorage(product)">Add to cart</button>
          <button class="button" v-on:click="this.goToProducts()">Back to Products</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import apiManager from '@/components/apiManager.ts'

  export default {
    name: 'Product',
    data () {
      return {
        idProduct: this.$route.params.id,
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
      // Runs on mount and fills the data property "products" with data from backend
      getProducts: function () {
        apiManager.getAllProductsFromDb().then(products => {
          this.products = products
        })
        .catch(error => {
          console.log(error)
        })
      },
      // Pushes user to store page
      goToProducts: function (idProduct) {
        this.$router.push({name:'store'})
      },
      // Stores product to LocalStorage
      storeToLocalStorage: function (productObject) {
        // First gets the cart from LocalStorage
        this.cart = localStorage.getItem('cart')
        // Else fill this.cart with a empty array
        this.cart = this.cart ? JSON.parse(this.cart) : []
        // Then check if product is already saved in LocalStorage
        let found = this.cart.find(product => product.id == productObject.id)

        // If so show message to user
        if (found) {
          this.warnUser = true
          // Else push product to this.cart and update LocalStorage
        } else {
          this.product = productObject
          this.cart.push(this.product)
          localStorage.setItem("cart", JSON.stringify(this.cart))
        }
      }
    }
  }
</script>