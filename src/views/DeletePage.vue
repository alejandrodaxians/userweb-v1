<template>
  <div class="delete">
    <br>
    <DeleteRequest class="title" msg="Delete a VNF, VNFD, and UCPe."/>
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
