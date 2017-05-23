<template>
    <ul class="list">
        <a href=""><li><img src="../assets/1.jpg"/></li></a>
        <a href=""><li><img src="../assets/2.jpg"/></li></a>
        <a href=""><li><img src="../assets/3.jpg"/></li></a>
        <a href=""><li><img src="../assets/4.jpg"/></li></a>
        <a href=""><li><img src="../assets/5.jpg"/></li></a>
        <a href=""><li><img src="../assets/6.jpg"/></li></a>
    </ul>
</template>

<script>
  export default{
    data () {
      return {
       
      }
    }
  }
</script>
<style scoped>
   .list{
       list-style:none;
       margin:0 20px;
       border:1px solid red;
   }
   li{
      display:inline-block;
      width:30%;
      height:180px;
   }
   li img{
      width:100%;
      height:180px;
   }
</style>
