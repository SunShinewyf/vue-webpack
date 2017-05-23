<template>
  <div class="home">
     <app-header></app-header>
     <div class="header-img">
     <div class="text">
        <p class="title">WELCOME TO TRAVEL TIME</p>
        <div class="line"></div>
        <p>享受生活和分享喜悦</p>
     </div>
     </div>
     <partLine></partLine>
     <appList></appList>
     <partLine></partLine>
     <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from '@/components/appHeader.vue'
import appFooter from '@/components/appFooter.vue'
import partLine from '@/components/partLine.vue'
import appList from '@/components/appList.vue'
export default {
  name: 'home',
  components: {
    appHeader,
    appFooter,
    partLine,
    appList
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
.header-img{
   width:100%;
   height:384px;
   background:url(../assets/header.jpg) no-repeat;
   margin-top:-30px;
   background-size:100% 100%;
}
.text{
   color:#fff;
   text-align:center;
}
.text p{
   font-size:30px;
}
.text .title{
   padding-top:30px;
}
.line{
   border:1px solid #fff;
   width:356px;
   margin:0 auto;
}
</style>