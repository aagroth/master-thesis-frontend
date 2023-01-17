<template>
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
                <td><button class="button is-small" v-on:click="product.qty--">-</button></td>
                <td>{{ product.qty }}</td>
                <td><button class="button is-small" v-on:click="product.qty++">+</button></td>
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
        product: null
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
      goToProducts: function (idProduct) {
        this.$router.push({name:'store'})
      },
      storeToLocalStorage: function (productObject) {
        let found = this.cart.find(product => product.id == productObject.id)

        if (found) {
          // TODO: Fix better handling
          console.log('This product is already added')
        } else {
          this.cart = localStorage.getItem('cart')
          this.cart = this.cart ? JSON.parse(this.cart) : []
          this.product = productObject
          this.cart.push(this.product)
          localStorage.setItem("cart", JSON.stringify(this.cart))
        }
      }
    }
  }
</script>