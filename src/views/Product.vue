<template>
  <div class="" v-for="(product,index) in products" :key="index">
    <div class="container" v-if="idProduct == product.id">
      <div class="columns">
        <div class="column is-half">
          <figure class="image">
            <img :src="product.image" alt="Placeholder image">
          </figure>
        </div>
        <div class="column auto">
          <table class="table">
            <thead>
              <th>Details</th>
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
                <td>{{ product.price }}$</td>
              </tr>
              <tr>
                <td>Category:</td>
                <td>{{ product.category }}</td>
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
  export default {
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
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json => {
          this.products = json
        })
        .catch(error => {
          console.log('Something went wrong!')
        })
      },
      goToProducts: function (idProduct) {
        this.$router.push({name:'products'})
      },
      storeToLocalStorage: function (productObject) {
        this.product = productObject
        this.cart.push(this.product)
        localStorage.setItem("cart", JSON.stringify(this.cart))
      }
    }
  }
</script>