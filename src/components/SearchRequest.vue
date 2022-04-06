<template>
  <div class="search">
    <h1>{{ msg }}</h1>
    <form form @submit.prevent="sendRequest">
    <div class="search">
    <br/>
    <h2>PARAMETERS</h2>
        <h3>complete</h3>
            <select class="complete" name="complete" v-model="complete" required>
                <option value="true">True</option>
                <option value="false">False</option>
            </select>
        <h3>status</h3>
            <select class="status" name="status" v-model="status" required>
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
            <select class="saga" name="saga" v-model="saga" required>
                <option value="crear_sede">crear_sede</option>
                <option value="crear_sede">borrar_sede</option>
            </select>
        <h3>from_date</h3>
        <input type="date" v-model="from" required/>
        <h3>to_date</h3>
        <input type="date" v-model="to" required/>
    </div>
      <button class="reset" type="reset">Reset</button>
      <br/>
      <button class="erase" type="submit">Search</button>
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
      complete: '',
      status: '',
      saga: '',
      from: '',
      to: ''
    }
  }
}
</script>
