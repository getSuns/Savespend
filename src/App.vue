<template>
  <div id="app">  
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}

</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f5f5f5;
  height: 100%;
}
  /** 整个项目公共css */
  .dn {
      display: none;
  }
  .wrapContent{
    position: relative;
    width: 100%;
    height: 100%;
  }

  *{
    box-sizing: border-box;
    -webkit-overflow-scrolling:touch;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  img,button{
    border:0;
    padding:0;
    margin:0;
  }
  a{
    text-decoration:none;
    outline:none;
  }
  ul,li{
    list-style: none;
  }
  p{margin:0;}
  input::-moz-focus-inner,
  textarea::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  input,textarea {
    border: 0;
    line-height: normal;
    outline:none;
    -webkit-appearance: none;
  }
  body {
    height: 100%;
    width: 100%;
    line-height: normal;
    font-family: "微软雅黑";
    margin: 0 auto;
    color: #3d4145;
  }
  dfn,em{
    font-style: normal
  }
  .barnavpage{
    margin-bottom:2.5rem;
  }
  .tophead7{
    padding-top: 2.7rem;
}
.tophead2{
    padding-top: 2.2rem;
}

//自定义键盘样式
.van-number-keyboard{
    background: rgba(210,213,219,0.90);
    padding: .2rem!important;
}
.van-key{
    border-radius: 8px!important;
    background: #fff!important;
    margin:1%!important;
    height: 2.3rem;
    line-height: 2.3rem;
    width: 31.3333333333%;
    border-bottom: 1px solid;
}
.van-key::after{
  border-width:0;
}
.van-key--gray{
  background:none!important;
  border: none!important;
}
.i-keyback{
  background-image: url("../static/img/Back@2x.png");
  display: inline-block;
  height: 1.8rem;
  width: 1.13rem;
  background-size: 1.13rem;
  background-repeat: no-repeat;
  vertical-align: text-top;
}
</style>

