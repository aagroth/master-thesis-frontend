<template>
  <section class="hero is-link is-medium">
    <div class="hero-body">
      <router-link to="/store" class="">
        <div class="columns">
          <div class="column has-text-centered is-half">
            <p class="title is-2">
              Amazing products!
            </p>
            <p class="subtitle mt-5 is-4">
              Take a look in my store for epic designs. On Groth's you can find merchandise that you can 
              use for every day of the year. If you would like me to add something, please contact me
              in the contact form below!
            </p>
          </div>
          <div class="column is-half">
            <div class="is-flex is-horizontal-center">
              <figure>
                <img src="@/assets/banner.png" alt="products">
              </figure>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </section>
  <section class="hero is-medium">
    <div class="hero-body">
      <div class="column is-three-fifths is-offset-one-fifth">
        <p class="title">
          Contact me!
        </p>
      </div>
      <div class="column">
        <form class="column is-three-fifths is-offset-one-fifth">
          <div class="field">
            <label class="label">Name</label>
            <input type="text" class="input" v-model="this.name"> 
          </div>
          <div class="field">
            <label class="label">Email</label>
            <input type="text" class="input" v-model="this.email"> 
          </div>
          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea class="textarea" v-model="this.message"></textarea>
            </div> 
          </div>
          <button class="button is-primary" v-on:click="storeMessage()">Send</button>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
  import apiManager from '@/components/apiManager.ts'

  export default {
    name: 'Home',
    data () {
      return {
        name: null,
        email: null,
        message: null
      }
    },
    methods: {
      // POSTing name, email and message to the backend
      // Uses fetch call frm apiManager
      storeMessage: function () {
        const requestOptions = {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            message: this.message
          })
        }
        apiManager.postMessageToDb(requestOptions).then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
      }
    }
  }
</script>