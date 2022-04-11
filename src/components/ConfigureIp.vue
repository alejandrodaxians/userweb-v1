<template>
<h4 class="title">{{ msg }}</h4>
  <form form @submit.prevent="onSubmit">
      <div class="config">
        <h4>Parameters:</h4>
      </div>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ConfigureIP',
  props: {
    msg: String
  },
  data () {
    return {
    }
  },
  methods: {
    configureRequest () {
      axios.post('')
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
