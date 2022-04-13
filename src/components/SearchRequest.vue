<template>
  <h4 class="title">{{ msg }}</h4>
  <div class="search">
  <form form @submit.prevent="onSearchdata">
    <div class="column">
      <h4>Parameters:</h4>
      <input type="checkbox" id="complete" value="complete" name="complete" v-model="searchData.complete">
      <label for="complete">complete</label>
      <br>
      <br>
      <label for="sede">saga_name</label>
      <br>
      <select name="sede" id="sede" required>
        <option value="crear">crear_sede</option>
        <option value="borrar">borrar_sede</option>
      </select>
      <br>
      <br>
      <label for="status">status</label>
      <br>
      <select id="status" name="status" v-model="searchData.status" required>
        <option value="acknowledged">ACKNOWLEDGED</option>
        <option value="progress">IN-PROGRESS</option>
        <option value="pending">PENDING</option>
        <option value="held">HELD</option>
        <option value="cancelled">CANCELLED</option>
        <option value="completed">COMPLETED</option>
        <option value="failed">FAILED</option>
        <option value="partial">PARTIAL</option>
        <option value="rejected">REJECTED</option>
      </select>
      <br>
      <br>
      <label for="from">from_date</label>
      <br>
      <input id="from" type="date" v-model="searchData.from" required/>
      <br>
      <label for="to">to_date</label>
      <br>
      <input id="to" type="date" v-model="searchData.to" required/>
      <br>
    </div>
    <div class="column6">
      <button class="reset" type="reset">RESET</button>
      <br/>
      <button @click="searchAll" class="button" type="submit">SEARCH</button>
    </div>
  </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SearchAll',
  props: {
    msg: String
  },
  data () {
    return {
      searchData: {
        complete: '',
        status: '',
        saga: '',
        from: '',
        to: ''
      }
    }
  },
  methods: {
    searchAll () {
      axios.get('')
        .then((response) => {
          console.log(response.data)
          response.data = this.searchData
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
