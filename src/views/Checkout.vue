<template>
  <div class="columns m-2">
    <div class="column is-half">
      <h3 class="is-size-4 has-background-warning pl-2">Billing details</h3>
      <div class="columns">
        <div class="column mt-2">
          <label class="label">First name</label>
          <input class="input" type="text">
        </div>
        <div class="column mt-2">
          <label class="label">Second name</label>
          <input class="input" type="text">
        </div>
      </div>
      <label class="label">Country</label>
      <input class="input" type="text">
      <label class="label">Street adress</label>
      <input class="input" type="text">
      <label class="label">Town/City</label>
      <input class="input" type="text">
      <label class="label">ZIP</label>
      <input class="input" type="text">
      <label class="label">Phone number</label>
      <input class="input" type="number">
    </div>
    <div class="column is-auto">
      <h3 class="is-size-4 has-background-warning pl-2">Your order</h3>
      <table class="table is-full">
        <thead>
          <tr>
            <th>Product</th>
            <th></th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody v-for="product in this.cart" :key="product.id">
          <tr>
            <td>
              <figure class="image is-48x48">
                <img :src="product.imgUrl" alt="Product image">
              </figure>
            </td>
            <td>{{ product.title }}</td>
            <td>${{ product.price }}</td>
            <td><button class="button" v-on:click="product.qty--">-</button></td>
            <td>{{ product.qty }}</td>
            <td><button class="button" v-on:click="product.qty++">+</button></td>
            <td><button class="delete has-background-danger" v-on:click="removeProductFromLocalStorage(product)"></button></td>
          </tr>
        </tbody>
      </table>
      <div class="columns has-background-light m-2 mt-2">
        <div class="column is-half">
          <p class="has-text-weight-bold mb-5">Shipping: </p>
          <p class="has-text-weight-bold">Total: </p>
        </div>
        <div class="column is-auto">
          <p class="has-text-right mb-5">Always free shipping</p>
          <p class="has-text-right has-text-primary">{{ this.totalSum }}$</p>
          <div class="is-flex is-align-items-flex-end is-justify-content-end mt-5">
            <button class="button is-primary">Place order</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Checkout',
    data () {
      return {
        cart: []
      }
    },
    mounted: function () {
      this.getProductsFromLocalStorage()
    },
    computed: {
    totalSum(){
      // TODO: Fix totalSum 
      let total = 0;
      this.cart.forEach((item, i) => {
          total += item.price
      });
      return total;
    }
    },
    methods: {
      getProductsFromLocalStorage: function () {
      this.cart = JSON.parse(localStorage.getItem("cart"))
      },
      removeProductFromLocalStorage: function (product) {
      let index = this.cart.indexOf(product)
      this.cart.splice(index, 1)
      localStorage.setItem("cart", JSON.stringify(this.cart))
      },
    }
  }
</script>