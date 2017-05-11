<template>
  <div class="home">
     <app-header></app-header>
  </div>
</template>

<script>
import appHeader from '@/components/appHeader.vue'
export default {
  name: 'home',
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