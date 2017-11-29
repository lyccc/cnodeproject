<template>
	<div class="header">
    <div class="logo-box">
        <img class="logo-1" src="../assets/logo-1.svg"/>
        <!-- <div class="search"><input type="text"></div> -->
    </div>
    <nav class="nav">
       <router-link :to="{path: '/'}">首页</router-link>
      <a href="https://cnodejs.org/getstart" target="_blank">新手入门</a>
      <a href="https://cnodejs.org/api" target="_blank">API</a>
      <a href="https://cnodejs.org/about" target="_blank">关于</a>
      <a href="####">注册</a>
      <router-link :to="{name: 'Login'}">登录</router-link>
    </nav>  
	</div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'about',
      activeIndex: '1'
    }
  }
}
</script>

<style scoped>
.header{
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
	background: #444;
  /* height: 50px; */
}	
.logo-box{
  display: flex;
  align-items: center;
  width: 120px;
  height: 28px;
}
.search{
  margin-left: 20px;
  margin-top: 10px;
}
.search input{
    border-radius: 5px;
    background-color: #888;
    text-indent: 8px;
}
.search input:hover{
    background-color: white;
    transition: background-color .5s;
}

.nav{
  line-height: 50px;
}
.nav a{
  margin: 0 10px;
  font-size: 14px;
}
.nav a:hover{
  color: #fff;
}
</style>