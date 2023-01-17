<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Thank you for your order!</p>
        <button class="delete" v-on:click="$emit('closeSuccessMessage')"></button>
      </header>
      <section class="modal-card-body">
        <div>
          <h3 class="is-size-5 has-text-centered mb-2 mt-4">Delivery information</h3>
        </div>
        <div class="is-flex is-justify-content-center">
          <table class="table is-bordered is-fullwidth">
            <tbody>
              <tr>
                <th>Name</th>
                <td>{{ this.firstName }} {{ this.lastName }}</td>
              </tr>
              <tr>
                <th>Street address</th>
                <td>{{ this.streetAddress }}</td>
              </tr>
              <tr>
                <th>City</th>
                <td>{{ this.city }}</td>
              </tr>
              <tr>
                <th>ZIP</th>
                <td>{{ this.zip }}</td>
              </tr>
              <tr>
                <th>Country</th>
                <td>{{ this.country }}</td>
              </tr>
              <tr>
                <th>Phone number</th>
                <td>{{ this.phoneNumber }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h3 class="is-size-5 has-text-centered mb-2 mt-4">Order information</h3>
          <table class="table is-bordered is-fullwidth">
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
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
                <td>{{ product.qty }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button" v-on:click="goToHome()">Back to store</button>
      </footer>
    </div>
  </div>
</template>
<script>

export default {
  name: 'SuccessMessage',
  props: {
    firstName: String,
    lastName: String,
    country: String,
    streetAddress: String,
    city: String,
    zip: String,
    phoneNumber: String,
    cart: Array
  },
  emits: ['closeSuccessMessage'],
  data () {
    return {

    }
  },
  mounted: function () {
    console.log('We got here')
  },
  methods: {
    goToHome: function () {
      this.$router.push({name:'home'})
    }
  }
}
</script>