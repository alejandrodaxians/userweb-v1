<template>
  <div class="search">
    <br>
    <SearchAll msg="Returns a list of requests filtered by the given parameters."/>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchAll from '@/components/SearchRequest.vue'

export default {
  name: 'HomeView',
  components: {
    SearchAll
  }
}
</script>
