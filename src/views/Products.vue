<template>
    This is the products page
</template>      getProducts: function () {
        console.log('We got here!')
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