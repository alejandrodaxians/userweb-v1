<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Returns 200 if request was received, else returns 500.<br>
    </p>
    <form form @submit.prevent="sendRequest">
    <div class="column">
    <br/>
      <h2>Parameters</h2>
        <h3>template_id</h3>
          <input type="text" v-model="template_id"/>
        <h3>license_pack_id</h3>
          <input type="text" v-model="license_pack_id"/>
        <h3>vnfd_name</h3>
          <input type="text" v-model="vnfd_name"/>
        <h3>vnfd_desc</h3>
          <input type="text" v-model="vnfd_desc"/>
        <h3>vnf_name</h3>
          <input type="text" v-model="vnf_name"/>
        <h3>vnf_desc</h3>
          <input type="text" v-model="vnf_desc"/>
      </div>
      <div class="colum2">
        <br/>
      <h2>Essential Links</h2>
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
