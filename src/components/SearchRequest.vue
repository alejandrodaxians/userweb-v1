<template>
  <h4 class="title">{{ msg }}</h4>
  <div class="search2">
    <form form @submit.prevent="onSearchdata">
    <h4>Parameters:</h4>
      <p class="complete">complete</p>
        <input type="radio" id="true2" value="true2" name="complete" v-model="searchData.complete" required>
        <label for="true2">True</label>
        <input type="radio" id="false2" value="false2" name="complete" v-model="searchData.complete" required>
        <label for="false2">False</label>
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
        <p>saga_name</p>
          <input type="radio" name="crear" id="crear" v-model="searchData.saga" required>
          <label for="crear">crear_sede</label>
          <input type="radio" name="borrar" id="borrar" v-model="searchData.saga" required>
          <label for="borrar">borrar_sede</label>
        <br>
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
      <button class="reset" type="reset">Reset</button>
      <br/>
      <button @click="searchAll" class="erase" type="submit">Search</button>
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
