<template>
  <div id="app">
    <vheader></vheader>
    <home></home>
    <footer>
      <p>本网站由红岩网校工作站负责开发，管理，不经红岩网校委员会书面同意，不得进行转载</p>
      <p>地址：重庆市南岸区崇文路2号（重庆邮电大学内） 400065 E-mail :redrock@cqupt.edu.cn (023-62461084)</p>
      <img src="../src/assets/bg-xk.png" alt="信科楼背景" class="bgxk">
    </footer>
  </div>
</template>
<script>
import Home from "./views/Home"
import Vheader from "./components/Vheader"
export default {
  components: {
    Home,
    Vheader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
  position: relative;
  min-width: 1080px;
  max-width: 1518px;
  overflow-x: hidden;
}
footer {
  background-color: #5785fb;
  text-align: center;
  line-height: 7px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 12px;
  color: white;
  font-weight: 600;
  width: 100%;
  margin-top: 52px;
  position: relative;
}
.bgxk {
  position: absolute;
  right: 0;
  bottom: 80px;
  z-index: -1;
}
</style>
