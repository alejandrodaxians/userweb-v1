<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form form @submit.prevent="sendRequest">
    <div class="column">
    <br/>
      <h2>PARAMETERS</h2>
        <h3>template_id</h3>
          <input type="number" v-model="template_id" required/>
        <h3>license_pack_id</h3>
          <input type="number" v-model="license_pack_id" required/>
        <h3>vnfd_name</h3>
          <input type="text" v-model="vnfd_name" required/>
        <h3>vnfd_desc</h3>
          <input type="text" v-model="vnfd_desc" required/>
        <h3>vnf_name</h3>
          <input type="text" v-model="vnf_name" required/>
        <h3>vnf_desc</h3>
          <input type="text" v-model="vnf_desc" required/>
      </div>
      <div class="colum2">
        <br/>
      <h2>ESSENTIAL LINKS</h2>
        <h3>raw_json</h3>
          <input type="file">
        <h3>tosca_file</h3>
          <input type="file">
        <h3>params_file</h3>
          <input type="file">
      <br/>
      </div>
      <button class="reset" type="reset">Reset</button>
      <br/>
      <button type="submit">Execute</button>
      </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      template_id: 3333,
      license_pack_id: 270,
      vnfd_name: 'VNFD_testname',
      vnfd_desc: 'VNFD_test_desc',
      vnf_name: 'VNF_testname',
      vnf_desc: 'VNF_test_desc',
      raw_json: '',
      tosca_file: '',
      params_file: ''
    }
  }
}
</script>
