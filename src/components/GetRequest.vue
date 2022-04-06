<template>
  <div class="getOne">
    <h1>{{ msg }}</h1>
    <form form @submit.prevent="sendRequest">
       <div class="delete">
    <br/>
      <h2>PARAMETERS</h2>
        <h3>request_id</h3>
          <input type="number" v-model="request_id" required/>
        </div>
      <button class="reset" type="reset">Reset</button>
      <br/>
      <button class="erase" type="submit">Search</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'GetOne',
  props: {
    msg: String
  },
  data () {
    return {
      request_id: 3333
    }
  }
}
</script>
