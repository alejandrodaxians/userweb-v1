<template>
  <div class="getOne">
    <br>
    <GetOne msg="SENDS A REQUEST TO REQUESTHANDLER TO GET REQUEST DATA"/>
  </div>
</template>

<script>
import GetOne from '@/components/GetRequest.vue'

export default {
  name: 'HomeView',
  components: {
    GetOne
  }
}
</script>
