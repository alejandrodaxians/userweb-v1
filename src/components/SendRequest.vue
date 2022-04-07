<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form class="what" @submit="prevent.onSubmit">
    <div class="column">
    <br/>
      <h2>PARAMETERS</h2>
      <h3>template_id</h3>
          <input type="number" v-model="sendData.template_id" placeholder="3333" required/>
        <h3>license_pack_id</h3>
          <input type="number" v-model="sendData.license_pack_id" placeholder="270" required/>
        <h3>vnfd_name</h3>
          <input type="text" v-model="sendData.vnfd_name" placeholder="VNFD_testname" required/>
        <h3>vnfd_desc</h3>
          <input type="text" v-model="sendData.vnfd_desc" placeholder="VNFD_test_desc" required/>
        <h3>vnf_name</h3>
          <input type="text" v-model="sendData.vnf_name" placeholder="VNF_testname" required/>
        <h3>vnf_desc</h3>
          <input class="last" type="text" v-model="sendData.vnf_desc" placeholder="VNF_test_desc" required/>
      </div>
        <br/>
      <div class="column2">
      <h2>ESSENTIAL LINKS</h2>
        <h3>raw_json</h3>
          <input type="file" required>
        <h3>tosca_file</h3>
          <input type="file" required>
        <h3>params_file</h3>
          <input type="file" required>
      <br/>
      <button class="reset" type="reset">Reset</button>
      <br/>
      <button @click="sendRequest" class="bottom" type="submit">Execute</button>
      </div>
      </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  data () {
    return {
      sendData: {
        template_id: '',
        license_pack_id: '',
        vnfd_name: '',
        vnfd_desc: '',
        vnf_name: '',
        vnf_desc: '',
        raw_json: '',
        tosca_file: '',
        params_file: ''
      }
    }
  },
  methods: {
    sendRequest () {
      axios.post('', this.sendData)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
  }
}
</script>
