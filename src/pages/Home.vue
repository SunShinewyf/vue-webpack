<template>
  <div class="home">
     <app-header></app-header>
     <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from '@/components/appHeader.vue'
import appFooter from '@/components/appFooter.vue'
export default {
  name: 'home',
  components: {
    appHeader,
    appFooter
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