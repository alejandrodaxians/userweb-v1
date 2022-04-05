<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Returns 200 if request was received, else returns 500.<br>
    </p>
    <form form @submit.prevent="sendRequest">
    <div class="delete">
    <br/>
      <h2>Parameters</h2>
        <h3>vnf_id</h3>
          <input type="text" v-model="vnf_id"/>
        <h3>vnfd_id</h3>
          <input type="text" v-model="vnfd_id"/>
        <h3>ucpe_id</h3>
          <input type="text" v-model="ucpe_id"/>
        </div>
      <button class="reset" type="reset">Reset</button>
      <br/>
      <button class="erase" type="submit">Execute delete</button>
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
