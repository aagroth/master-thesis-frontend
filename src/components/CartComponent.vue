<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Cart</p>
        <button class="delete" v-on:click="$emit('closeCartComponent')"></button>
      </header>
      <section class="modal-card-body">
        <div class="has-background-primary pb-3 pt-3">
          <p class="has-text-white-bis has-text-centered">Woooho! Free shipping as always!</p>
        </div>
        <div>
          <table class="table mt-5">
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
        </div>
        <div class="mt-5 has-text-right">
          <p class="has-text-weight-bold">Total: ${{ this.totalSum }}</p>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-primary" v-on:click="this.goToCheckout()">Checkout</button>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CartComponent',
  emits: ['closeCartComponent'],
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
        if (this.cart) {
          this.cart.forEach((product, i) => {
          total += product.price
        })
      } else {

      }
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
    goToCheckout: function () {
      localStorage.setItem("cart", JSON.stringify(this.cart))
      this.$emit('closeCartComponent')
      this.$router.push({name:'checkout'})
    }
  }
}
</script>