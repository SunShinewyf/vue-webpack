<template>
  <div class="app">
     <app-header></app-header>
  </div>
</template>

<script>
import appHeader from './appHeader.vue'
export default {
  name: 'app',
  components: {
    appHeader
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>