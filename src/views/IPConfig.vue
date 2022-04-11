<template>
<div class="config">
    <br>
    <ConfigureIp msg="LOREM IPSUM"/>
</div>
</template>

<script>
// @ is an alias to /src
import ConfigureIp from '@/components/ConfigureIp.vue'

export default {
  name: 'HomeView',
  components: {
    ConfigureIp
  }
}
</script>
