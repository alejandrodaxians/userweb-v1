<template>
  <div class="delete_2">
    <h1>{{ msg }}</h1>
    <form form @submit.prevent="sendRequest">
    <div class="delete">
    <br/>
      <h2>PARAMETERS</h2>
        <h3>vnf_id</h3>
          <input type="number" v-model="vnf_id" required/>
        <h3>vnfd_id</h3>
          <input type="number" v-model="vnfd_id" required/>
        <h3>ucpe_id</h3>
          <input type="number" v-model="ucpe_id" required/>
      <br/>
      <button class="reset" type="reset">Reset</button>
      <br/>
      <button class="erase" type="submit">Delete</button>
        </div>
      </form>
  </div>
</template>

<script>
export default {
  name: 'DeleteRequest',
  props: {
    msg: String
  },
  data () {
    return {
      vnf_id: 4335,
      vnfd_id: 4333,
      ucpe_id: 4332
    }
  }
}
</script>
