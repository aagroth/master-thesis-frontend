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