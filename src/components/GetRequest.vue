<template>
  <div class="getOne">
    <h1>{{ msg }}</h1>
    <form form @submit.prevent="onSubmit">
       <div class="get">
    <br/>
      <h2>PARAMETERS</h2>
        <h3>request_id</h3>
          <input type="number" v-model="getData.request_id" placeholder="3333" required/>
        <h3>complete</h3>
            <select class="complete" name="complete" v-model="getData.complete" required>
                <option value="true">True</option>
                <option value="false">False</option>
            </select>
        </div>
      <button class="reset" type="reset">Reset</button>
      <br/>
      <button @click="getPost" class="erase" type="submit">Search</button>
    </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'GetOne',
  props: {
    msg: String
  },
  data () {
    return {
      getData: {
        request_id: '',
        complete: ''
      }
    }
  },
  methods: {
    getRequest () {
      axios.get('')
        .then((response) => {
          console.log(response.data)
          // cuerpo
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
