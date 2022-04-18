<template>
  <div class="delete">
    <br>
    <DeleteRequest class="title" msg="DELETE A VNF, VNFD, AND UCPE"/>
    </div>
</template>

<script>
import axios from 'axios'
import DeleteRequest from '@/components/DeleteRequest.vue'

export default {
  name: 'HomeView',
  components: {
    DeleteRequest
  },
  data () {
    return {
      deleteData: []
    }
  },
  methods: {
    deleteRequest () {
      axios.delete('')
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
