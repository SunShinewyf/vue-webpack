<template>
    <header id="header">
       <nav>
       <span class="nav-title">{{title}}</span>
         <ul class="navBtn">
          <li v-for="item in navItems">
            <a v-bind:href="item.href">{{item.name}}</a>
          </li>
         </ul>
       </nav>
    </header>
</template>

<script>
  export default{
    data () {
      return {
        title: 'Multi-objective optimization',
        navItems: [
            { name: 'result',href:'#/result'},
            { name: 'optimize',href:'#/optimize'}
        ]
      }
    }
  }
</script>
<style scoped>
   header{
     height:50px;
     background:#e6e6e6;
   }
   .nav-title{
     font-weight: bold;
     color: inherit;
     line-height: 1;
     float: left;
     padding: 1rem;
   }
  .navBtn{
    display: inline-block;
    margin-left:-3rem;
   }
  .navBtn li{
    display: inline-block;
    padding-left: 20px;
   }
   .navBtn li a{
      text-decoration: none;
   }
</style>
