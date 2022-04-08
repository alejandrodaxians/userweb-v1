<template>
    <h4 class="title">{{ msg }}</h4>
    <form form @submit.prevent="onSubmit">
    <div class="delete">
      <h4>Parameters:</h4>
          <label for="vnf">vnf_id</label>
          <br>
          <input id="vnf" type="number" v-model="deleteData.vnf_id" placeholder="4335" required/>
          <br>
          <label for="vnf">vnf_id</label>
          <br>
          <input id="vnfd" type="number" v-model="deleteData.vnfd_id" placeholder="4333" required/>
          <br>
          <label for="ucpe">ucpe_id</label>
          <br>
          <input id="ucpe" type="number" v-model="deleteData.ucpe_id" placeholder="4332" required/>
      <br/>
      <button class="reset" type="reset">Reset</button>
      <br/>
      <button class="erase" type="submit">Delete</button>
        </div>
      </form>
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
