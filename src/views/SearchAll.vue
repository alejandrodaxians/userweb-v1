<template>
  <div class="search">
    <br>
    <SearchAll msg="RETURNS A LIST OF REQUESTS FILTERED BY THE GIVEN PARAMETERS"/>
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
