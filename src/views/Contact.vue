<template>
  <div class="columns">
    <div class="column is-three-fifths is-offset-one-fifth">
      <h1 class="is-size-3 pb-2">Do you want to contact me?</h1>
      <p>If you have any questions regarding my merch please contact me, using the contact form below!</p>
    </div>
  </div>
  <div class="columns">
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
      <button class="button is-primary" v-on:click="storeMessageToDb()">Send</button>
    </form>
  </div>
</template>
<script>
  export default {
    name: 'Contact',
    data () {
      return {
        name: null,
        email: null,
        message: null
      }
    },
    methods: {
      storeMessageToDb: function () {
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
        console.log(requestOptions)
        fetch('master-thesis-backend/', requestOptions)
        .then(response => {
          alert('Test')
          console.log(response)
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
</script>