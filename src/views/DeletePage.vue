<template>
  <div class="delete">
    <img alt="Vue logo" src="../assets/logo.png">
    <DeleteRequest msg="Delete a VNF, VNFD, and UCPe"/>
  </div>
</template>

<script>
// @ is an alias to /src
import DeleteRequest from '@/components/DeleteRequest.vue'

export default {
  name: 'HomeView',
  components: {
    DeleteRequest
  }
}
</script>
