<template>
  <div class="getOne">
    <h3>{{ msg }}</h3>
    <form form @submit.prevent="onSubmit">
       <div class="get">
    <br/>
      <h4>PARAMETERS</h4>
        <p>request_id</p>
          <input type="number" v-model="getData.request_id" placeholder="3333" required/>
        <p>complete</p>
            <input type="radio" id="true" value="true" name="complete" v-model="getData.complete">
            <label for="true"> True</label>
            <input type="radio" id="false" value="false" name="complete" v-model="getData.complete">
            <label for="true"> False</label>
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
        complete: [true, false]
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
