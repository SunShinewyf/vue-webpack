<template>
    <footer id="footer">
       <div class="tips">
         <p>致力于为出游的小伙伴们，提供物超所值的旅游线路，令你享受旅途每刻</p>
       </div>
       <div class="about">
          <ul>关于我们</ul>
          <a><li>企业资质</li></a>
          <a><li>主题旅游</li></a>
          <a><li>网站地图</li></a>
       </div>
       <div class="terms">
       <ul>授权条款</ul>
          <a><li>用户协议</li></a>
          <a><li>隐私条款</li></a>
          <a><li>帮助中心</li></a>
       </div>
       <div class="follow">
       <ul>关注我们</ul>
          <a><li>隐私条款</li></a>
          <a><li>帮助中心</li></a>   
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
    p{
        padding:40px;
    }
    div{
        float:left;
        width:25%;
        margin-top:30px;
    }
    ul{
        font-size:16px;
        margin-left:-40px;
        font-weight:bold;
    }
    li{
        list-style:none;
        margin-top:20px;
    }
</style>