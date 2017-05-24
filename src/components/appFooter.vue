<template>
    <footer id="footer">
       <div class="tips">
         <p>致力于为出游的小伙伴们，提供物超所值的旅游线路，令你享受旅途每刻</p>
       </div>
       <ul class="about">
       <p class="title">关于我们</p>
          <a href=""><li>企业资质</li></a>
          <a href=""><li>主题旅游</li></a>
          <a href=""><li>网站地图</li></a>
       </ul>
       <ul class="terms">
       <p class="title">授权条款</p>
          <a href=""><li>用户协议</li></a>
          <a href=""><li>隐私条款</li></a>
          <a href=""><li>帮助中心</li></a>
       </ul>
       <ul class="follow">
      <p class="title">关注我们</p>
          <a href=""><li>微信</li></a>
          <a href=""><li>微博</li></a> 
       </ul>
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
    p{
        padding:40px;
    }
    .tips{
        width:20%;
        float:left;
    }
    ul{
        width:22%;
        float:left;
    }
    ul p{
        font-size:18px;
        font-weight:bold;
        margin-top:-20px;
        margin-bottom:-40px;
    }
    ul a{
         text-decoration:none;
         color:#fff;
    }
    li{
        list-style:none;
        margin-top:20px;
        text-align:center;
    }
</style>