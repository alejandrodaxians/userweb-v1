<template>
  <div class="search">
    <h1>{{ msg }}</h1>
    <form form @submit.prevent="onSubmit">
    <div class="search">
    <br/>
    <h2>PARAMETERS</h2>
        <h3>complete</h3>
            <select class="complete" name="complete" v-model="searchData.complete" required>
                <option value="true">True</option>
                <option value="false">False</option>
            </select>
        <h3>status</h3>
            <select class="status" name="status" v-model="searchData.status" required>
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
        <h3>saga_name</h3>
            <select class="saga" name="saga" v-model="searchData.saga" required>
                <option value="crear_sede">crear_sede</option>
                <option value="crear_sede">borrar_sede</option>
            </select>
        <h3>from_date</h3>
        <input type="date" v-model="searchData.from" required/>
        <h3>to_date</h3>
        <input type="date" v-model="searchData.to" required/>
    </div>
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
