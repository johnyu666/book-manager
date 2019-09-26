<template>
  <div id="app">
    <h1>第六版：综合使用Vue-cli|VueX|VueRouter</h1>
    <hr>
    <div id="nav">
      <router-link to="/">图书管理器</router-link> |
      <router-link to="/summary">说明文档</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
  body{
    background-color: lightgray;
  }
  #app{
    width: 1000px;
    background-color: #fff;
    padding: 30px;
    margin: 0px auto;
    font-size: 1.3em;
  }
  #app button{
    padding: 10px 20px;
    font-size: 1em;
  }
  #app input{
    font-size: 1.2em;
  }
</style>
