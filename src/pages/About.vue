<template>
  <div class="optimize">
     <app-header></app-header>
     <span>{{msg}}</span>
  </div>
</template>

<script>
import appHeader from '@/components/appHeader.vue'
export default {
  name: 'optimize',
  components: {
    appHeader
  },
  data () {
    return {
      msg: 'this is the optimize page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>