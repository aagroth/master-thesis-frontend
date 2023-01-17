<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Cart</p>
        <button class="delete" v-on:click="$emit('closeCartComponent')"></button>
      </header>
      <section class="modal-card-body" v-if="this.cart.length > 0">
        <div class="has-background-primary pb-3 pt-3">
          <p class="has-text-white-bis has-text-centered">Woooho! Free shipping as always!</p>
        </div>
        <div>
          <table class="table is-fullwidth is-narrow mt-5">
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
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
                <td>
                  <button class="button is-small" v-on:click="product.qty--">-</button>
                  {{ product.qty }}
                  <button class="button is-small" v-on:click="product.qty++">+</button>
                </td>
                <td><button class="delete has-background-danger" v-on:click="removeProductFromLocalStorage(product)"></button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mt-5 has-text-right">
          <p class="has-text-weight-bold">Total: ${{ this.totalSum }}</p>
        </div>
      </section>
      <section class="modal-card-body" v-else>
        <p class="has-text-centered">Cart is empty</p>
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
    // Calculate items * price to get a total
    totalSum () {
      let total = 0;
        if (this.cart) {
          this.cart.forEach((item, i) => {
          total += item.price * item.qty
        })
        }
        return total;
    }
  },
  methods: {
    // Will be running when mounting and get cart from LocalStorage
    getProductsFromLocalStorage: function () {
      this.cart = JSON.parse(localStorage.getItem("cart"))
    },
    // Loops through cart and remove the choosen product and then set the new LocalStorage
    removeProductFromLocalStorage: function (product) {
      let index = this.cart.indexOf(product)
      this.cart.splice(index, 1)
      localStorage.setItem("cart", JSON.stringify(this.cart))
    },
    // Will first set cart and then emit up to parent and push user to Checkout
    goToCheckout: function () {
      localStorage.setItem("cart", JSON.stringify(this.cart))
      this.$emit('closeCartComponent')
      this.$router.push({name:'checkout'})
    }
  }
}
</script>