<template>
  <div>
    <!-- 引入导航栏 -->
    <div class="container-nav">
      <Nav/>
    </div>
    <div class="container-content">
      <nuxt/>
    </div>
    <!-- 引入版权信息 -->
    <div class="container-foot">
    <Foot/>
    </div>
  </div>
</template>

<script>
import Nav from '~/components/Nav.vue'
import Foot from '~/components/Foot.vue'

export default {
  components: {
    Nav,
    Foot
  }
}
</script>

<style>
html {
  /* height: 100%; */
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
/* body{
  height: 100%;
} */

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.container-content{
  height: 100%;
}
</style>

