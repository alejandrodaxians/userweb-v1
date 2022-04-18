<template>
<h4 class="title">{{ msg }}</h4>
  <div class="getOne">
    <form form @submit.prevent="getRequest">
    <div class="column">
      <h4>Parameters:</h4>
      <label for="request">request_id</label>
      <br>
      <input id="request" type="number" v-model="getData.request_id" placeholder="3333" required/>
      <br>
      <br>
      <label for="complete-id">complete</label>
      <input type="checkbox" id="complete-id" value="complete-id" name="complete-id" v-model="getData.complete">
      <br>
      <br>
      <br>
      <button class="reset" type="reset">RESET</button>
      <br>
      <button @click="getRequest()" class="button" type="submit">SEARCH</button>
    </div>
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
      getData: {
        request_id: '',
        complete: [true, false]
      }
    }
  },
  methods: {
  }
}
</script>
