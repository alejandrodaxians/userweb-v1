<template>
  <div class="getOne">
    <h4 class="title">{{ msg }}</h4>
    <form form @submit.prevent="onSubmit">
       <div class="get">
      <h4>Parameters:</h4>
        <label for="request">request_id</label>
        <br>
          <input id="request" type="number" v-model="getData.request_id" placeholder="3333" required/>
        <p class="complete">complete</p>
            <input type="radio" id="true" value="true" name="complete" v-model="getData.complete">
            <label for="true"> True</label>
            <input type="radio" id="false" value="false" name="complete" v-model="getData.complete">
            <label for="true"> False</label>
          </div>
      <button class="reset" type="reset">Reset</button>
      <br>
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
