<template>
    This is the checkout page
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
      }
    }
  }
</script>