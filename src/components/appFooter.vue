<template>
    <footer id="footer">
       <div class="tips">
         <p>致力于为出游的小伙伴们，提供物超所值的旅游线路，令你享受旅途每刻</p>
       </div>
       <div class="about">
          <a><p>企业资质</p></a>
          <a><p>主题旅游</p></a>
          <a><p>网站地图</p></a>
       </div>
       <div class="terms">
          <a><p>用户协议</p></a>
          <a><p>隐私条款</p></a>
          <a><p>帮助中心</p></a>
       </div>
       <div class="follow">
          <a><p>隐私条款</p></a>
          <a><p>帮助中心</p></a>   
       </div>
    </footer>
</template>

<script>
  export default{
    data () {
      return {
        title: 'Multi-objective optimization',
      }
    }
  }
</script>
<style scoped>
    footer{
        width:100%;
        height:240px;
        background-color:#0c2b48;
        color:#fff;
        font-size:14px;
    }
    div{
        float:left;
        width:25%;
    }
</style>