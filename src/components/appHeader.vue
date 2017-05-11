<template>
    <header id="header">
       <img class="logo" src="../assets/logo.jpg">
       <ul class="headerNav">
          <li v-for="item in navItems">
            <a v-bind:href="item.href">
              {{item.name}}
            </a>
          </li>
       </ul>
       <input class="searchInput" type="text" placeholder="搜索"/>
       <div class="navHref"><a><span>登陆</span></a>&nbsp|&nbsp<a><span>注册</span></a></div>
    </header>
</template>

<script>
  export default{
    data () {
      return {
        title: 'Multi-objective optimization',
        navItems: [
            { name: '首页',href:'#/home'},
            { name: '专题',href:'#/special'},
            { name: '推荐',href:'#/recommend'},
            { name: '关于',href:'#/about'}
        ]
      }
    }
  }
</script>
<style scoped>
    header{
      height:55px;
      background-color: #375b7b;
    }
    .logo{
       height:2.4rem;
       width:2.4rem;
       float:left;
       padding:1rem;
    }
    .headerNav{
      list-style: none;
      display: inline-block;
    }
    .headerNav a{
      text-decoration: none;
      font-size:1.1rem;
      color:#FFF;
      font-weight: bold;
    }
    .headerNav li{
      display: inline-block;
      padding-left: 2rem;
    }
    .searchInput{
      height: 1.9rem;
      width: 10rem;
      border:1px solid #FFF;
      border-radius: 1rem;
      padding-left: 10px;
      margin-left:1rem;
      margin-bottom: -10px;
      background-color: transparent;
      color:#FFF;
      background: url(../assets/search.png) no-repeat 140px 8px;
      background-size: 20px 20px;;
    }
    ::-webkit-input-placeholder { /* WebKit browsers */
        color: #FFF;
    }
    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color: #FFF;
    }
    ::-moz-placeholder { /* Mozilla Firefox 19+ */
        color: #FFF;
    }
    :-ms-input-placeholder { /* Internet Explorer 10+ */
        color: #FFF;
    }
    .navHref{
      display: inline-block;
      font-size:1.0rem;
      margin-left:0.9rem;
      color:#FFF;
    }
    .navHref a{
      color:#FFF;
    }
</style>
