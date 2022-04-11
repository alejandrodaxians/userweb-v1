<template>
  <h4 class="title">{{ msg }}</h4>
  <div class="container">
  <form @submit="prevent.sendRequest">
    <div class="column">
      <h4>Parameters:</h4>
      <label for="temp">template_id</label>
      <br>
      <input id="temp" type="number" v-model="sendData.template_id" placeholder="3333" required/>
      <br>
      <label for="license">license_pack_id</label>
      <br>
      <input id="license" type="number" v-model="sendData.license_pack_id" placeholder="270" required/>
      <br>
      <label for="name">vnfd_name</label>
      <br>
      <input id="name" type="text" v-model="sendData.vnfd_name" placeholder="VNFD_testname" required/>
      <br>
    </div>
    <div class="column2">
      <label for="desc">vnfd_desc</label>
      <br>
      <input id="desc" type="text" v-model="sendData.vnfd_desc" placeholder="VNFD_test_desc" required/>
      <br>
      <label for="vnf_name">vnf_name</label>
      <br>
      <input id="vnf_name" type="text" v-model="sendData.vnf_name" placeholder="VNF_testname" required/>
      <br>
      <label for="vnf_desc">vnf_desc</label>
      <br>
      <input id="vnf_desc" class="last" type="text" v-model="sendData.vnf_desc" placeholder="VNF_test_desc" required/>
    </div>
    <div class="column3">
      <h4 class="essential">Essential links:</h4>
      <label for="raw">raw_json</label>
      <br>
      <input id="raw" type="file" required>
      <br>
      <label for="tosca">tosca_file</label>
      <br>
      <input id="tosca" type="file" required>
      <br>
      <label for="params">params_file</label>
      <br>
      <input id= "params" type="file" required>
    </div>
    <div class="column4">
      <br/>
      <br>
      <button class="reset" type="reset">RESET</button>
      <br/>
      <button @click="sendRequest" class="button" type="submit">EXECUTE</button>
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
