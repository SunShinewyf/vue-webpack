<template>
  <div class="result">
     <app-header></app-header>
     <span>{{msg}}</span>
  </div>
</template>

<script>
import appHeader from './appHeader.vue'
export default {
  name: 'result',
  components: {
    appHeader
  },
  data () {
    return {
      msg: 'this is the result page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>