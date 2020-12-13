<template>
  <div id="app">
    <div id="header">
      <Mainheader/>
    </div>
    <router-view />
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
 
export default {
  name: 'App',
  components: {
    "Mainheader": MainHeader,
  }
}

</script>

<style>
* {
  margin:0;
  padding:0;
  font-family: "SpoqaHanSans", Helvetica, Arial, sans-serif;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: inherit;
  }
  img {
    max-width: 100%;
  }
  button,
  input {
    outline: 0;
    border: 0;
    background: none;
    font-family: inherit;
    padding: 0;
  }
  html,
  body {
    width: 100%;
    height: 100%;
    font-family: 'Noto Sans KR', sans-serif;
    color: #111111;
    background-color: #fff;
    /* font-family:"Fugaz One", cursive; */
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  button{
    cursor:pointer;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  .container{
    margin:0 auto;
    width:1140px;
  }

@media screen and (max-width: 768px) {
  .bg{
    background-color:#f4f5f7;
  }
  .container{
    width:auto;
    margin:0;
  }
}

</style>
