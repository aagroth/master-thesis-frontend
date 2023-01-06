<template>
  <section class="hero is-link is-medium">
    <div class="hero-body">
      <router-link to="/products" class="">
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
            <input type="text" class="input"> 
          </div>
          <div class="field">
            <label class="label">Phone number</label>
            <input type="text" class="input"> 
          </div>
          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea class="textarea"></textarea>
            </div> 
          </div>
          <button class="button is-primary">Send</button>
        </form>
      </div>
    </div>
  </section>
</template>