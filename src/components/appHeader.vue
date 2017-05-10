<template>
    <header id="header">
       <nav>
       <span class="nav-title">{{title}}</span>
         <ul class="navBtn">
          <li v-for="item in navItems">
            <a href="">{{item.name}}</a>
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
            { name: 'result'},
            { name: 'optimize'}
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
     padding:0rem 1rem;
   }
  .navBtn{
    display: inline-block;
   }
  .navBtn li{
    display: inline-block;
   }
</style>
