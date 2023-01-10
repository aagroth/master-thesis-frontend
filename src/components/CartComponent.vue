<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Cart</p>
        <button class="delete has-background-danger" v-on:click="$emit('closeCartComponent')"></button>
      </header>
      <section class="modal-card-body">
        <div>
          <table class="table">
            <tbody v-for="product in this.cart" :key="product.id">
              <tr>
                <td>
                  <figure class="image is-48x48">
                    <img :src="product.image" alt="Placeholder image">
                  </figure>
                </td>
                <td>{{ product.title }}</td>
                <td>{{ product.price }}$</td>
                <td><button class="delete has-background-danger" v-on:click="removeProductFromLocalStorage(product.id)"></button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mt-5 has-text-right">
          <p class="has-text-weight-bold">Total: {{ this.totalSum }}$</p>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success">Checkout</button>
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
    removeProductFromLocalStorage: function (idProduct) {
      // Add way to remove specific product from LocalStorage
    }
  }
}
</script>