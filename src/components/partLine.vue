<template>
    <div class="part-line">
        <p>{{title}}</p>
        <img src="../assets/yellow.png"/>
    </div>
</template>

<script>
  export default{
    data () {
      return {
        title: '海岛之旅',
        yellow:true
      }
    }
  }
</script>
<style scoped>
p{
   font-size:30px;
   color:#666;
   font-weight:bold;
}
img{
  width:100px;
  height:100px;  
  margin-top:-35px;
}
</style>
