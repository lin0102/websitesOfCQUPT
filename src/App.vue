<template>
  <div id="app">
    <div class="nav">
      <div class="navmain">
        <img src="../src/assets/logo.png" alt="logo" class="logo">
        <!-- <router-link 
            v-for="(link, index) in linkList"
            :key="index"
            :to="link.path"
            class="linkbutton"
            >{{link.text}}</router-link> -->
      </div>
      <a class="backold" :style="{left: screenWidth / 2 + 580 + 'px'}" href="https://hongyan.cqupt.edu.cn/web/"><p>回到旧版</p></a>
    </div>
    <!-- <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition> -->
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
export default {
  components: {
    Home
  },
  data () {
    return {
      linkList: [
        // {
        //    path: "/",
        //    text: "推荐"
        // },
        // {
        //   path: "/page1",
        //   text: "权威推荐"
        // },
        // {
        //    path: "/page2",
        //    text: "权威推荐"
        // },
        // {
        //    path: "/page3",
        //    text: "权威推荐"
        // },
        // {
        //    path: "/page4",
        //    text: "权威推荐"
        // }
      ],
      screenWidth: window.innerWidth,
    }
  },
  mounted () {
    const that = this
    window.onresize = function temp() {
      that.screenWidth = window.innerWidth
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.nav {
  background-color: #5785fb;
  display: flex;
  justify-content: center;
  position: relative;
  padding-top: 10px;
  width: 100%;
  padding-bottom: 2.4px;
}
.navmain {
  display: flex;
  justify-content: flex-start;
  width: 992px;
}
.backold {
  color: white;
  flex-shrink: 0;
  position: absolute;
  white-space: nowrap;
  text-decoration: none;
}
.setpage:link, .setpage:visited {
  color: white;
}
/* .linkbutton {
  color: white;
  background-color: #5785fb;
  padding-top: 13px;
  padding-bottom: 13px;
  padding-left: 30px;
  padding-right: 30px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-size: 20px;
  text-decoration: none;
  flex-shrink: 0;
  margin-left: 40px;
}
.linkbutton.router-link-exact-active {
  background-color: white;
  color: #3875da;
} */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
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
