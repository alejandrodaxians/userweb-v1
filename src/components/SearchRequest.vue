<template>
  <h4 class="title">{{ msg }}</h4>
  <div class="search">
  <form form @submit.prevent="search">
    <div class="fieldset">
      <br>
      <h4>Parameters:</h4>
      <br>
      <br>
      <p>
        <label for="complete">complete</label>
        <input type="checkbox" id="complete" value="complete" name="complete" v-model="searchData.complete">
      </p>
      <br>
      <p>
        <label for="sede">saga_name</label>
        <select name="sede" id="sede" required>
          <option value="crear">crear_sede</option>
          <option value="borrar">borrar_sede</option>
        </select>
      </p>
      <br>
      <p>
        <label for="status">status</label>
        <select id="status" name="status" v-model="searchData.status" required>
          <option value="" disabled selected hidden></option>
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
      </p>
      <br>
      <p>
      <label for="from">from_date</label>
      <input id="from" type="date" v-model="searchData.from" required/>
      </p>
      <br>
      <p>
      <label for="to">to_date</label>
      <input id="to" type="date" v-model="searchData.to" required/>
      </p>
    </div>
    <div class="column6">
      <button class="reset" type="reset">RESET</button>
      <br/>
      <button @click="search()" class="button" type="submit">SEARCH</button>
    </div>
  </form>
  </div>
</template>

<script>
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
  }
}
</script>
