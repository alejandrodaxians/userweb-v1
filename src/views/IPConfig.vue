<template>
<div class="config">
    <br>
    <ConfigureIp msg="TBD"/>
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
