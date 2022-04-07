<template>
  <div class="delete_2">
    <h1>{{ msg }}</h1>
    <form form @submit.prevent="onSubmit">
    <div class="delete">
    <br/>
      <h2>PARAMETERS</h2>
        <h3>vnf_id</h3>
          <input type="number" v-model="deleteData.vnf_id" placeholder="4335" required/>
        <h3>vnfd_id</h3>
          <input type="number" v-model="deleteData.vnfd_id" placeholder="4333" required/>
        <h3>ucpe_id</h3>
          <input type="number" v-model="deleteData.ucpe_id" placeholder="4332" required/>
      <br/>
      <button class="reset" type="reset">Reset</button>
      <br/>
      <button class="erase" type="submit">Delete</button>
        </div>
      </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'DeleteRequest',
  props: {
    msg: String
  },
  data () {
    return {
      deleteData: {
        vnf_id: '',
        vnfd_id: '',
        ucpe_id: ''
      }
    }
  },
  methods: {
    deleteRequest () {
      axios.delete('')
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
