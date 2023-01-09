<template>
    This is the product page
</template>  export default {
      data () {
        return {
          idProduct: this.$route.params.id,
          products: null
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
            console.log(json)
            this.products = json
            console.log(this.products)
          })
          .catch(error => {
            console.log('Something went wrong!')
          })
        }
      }
    }
</script>