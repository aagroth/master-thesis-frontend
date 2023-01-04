<template>
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">
      <h1 class="is-size-3">Do you want to contact me?</h1>
      <p>If you have any questions regarding my merch please contact me, using the contact form below!</p>
    </div>
  </div>
  <div class="columns">
    <form class="column is-half is-offset-one-quarter">
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
</template>