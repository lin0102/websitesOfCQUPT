<template>
  <div class="home">
    <div class="popular">
      <div class="pleft">
        <lunbo :imglist="imglist"></lunbo>
        <div class="search">
          <form action="http://www.baidu.com/baidu" target="_blank" class="sousuo"> 
              <div class="searchicon">
                <img src="../assets/baidu.png" alt="Baidu">
                <img src="../assets/xiala.png" alt="xiala">
              </div>
              <input type="text" name="word" size=30 placeholder="请输入您要搜索的内容" autocomplete="off">
              <img src="../assets/sousuo.png" alt="sousuo" @click="submitsearch()" class="ssj">
          </form>
          <div class="weather">
            <p>星期{{weather.weekday[weather.weekday.length - 1]}}&nbsp;<span>{{weather.type}}</span></p>
            <p>{{weather.low}}&nbsp;-&nbsp;{{weather.high}}℃</p>
          </div>
        </div>
        <div class="hotweb">
          <div class="hotwebs" v-for="(hotweb, index) in hotweblist" :key="index">
            <a :href="hotweb.url" target="_blank">{{hotweb.name}}</a>
            <img src="../assets/hoticon.png" alt="hot" class="hoticon" v-if="index < 2">
          </div>
        </div>
      </div>
      <div class="pright">
        <div class="title">
          <div class="titledeco"></div>
          <p>关于我们</p>
        </div>
        <div class="aboutmain">
          <div class="arrow"><img src="../assets/up.png" alt="向上" width="30" height="30"></div>
          <div class="content" >
            <div class="box"  style="top:0;">
              <img src="../assets/zhaoxian.png" alt="">
              <img src="../assets/yingxin.png" alt="">
              <img src="../assets/bangmang.png" alt="">
            </div>
          </div>
          <div class="arrow"><img src="../assets/down.png" alt="向下" width="30" height="30"></div>
        </div>
      </div>
    </div>
    <div class="allweb">
      <web-kind v-for="(allweb, index) in allweblist" :key="index" :webkinds="allweb"></web-kind>     
    </div>
  </div>
</template>

<script>
import lunbo from "../components/lunbo"
import webKind from "../components/webKind"
import axios from "axios"
import hotweblist from "../assets/hotweb.json"
import allweblist from "../assets/allweb.json"
import func from './vue-temp/vue-editor-bridge';
export default {
  components: {
    lunbo,
    webKind
  },
  data () {
    return {
      imglist: [
        {
          imgsrc: require("../assets/lunbo1.png")
        },
        {
          imgsrc: require("../assets/lunbo2.png")
        },
        {
          imgsrc: require("../assets/lunbo3.png")
        }
      ],
      weather: {
        weekday: "--",
        low: "--",
        high: "--",
        type: "晴"
      },
      hotweblist: hotweblist,
      allweblist: allweblist
    }
    },
    methods : {
      submitsearch: function() {
        document.querySelector(".sousuo").submit();
      },
      // moveup: function() {
      //   this.$refs.box.style.top = parseInt(this.$refs.box.style.top) + this.$refs.content.offsetHeight + 'px';
      // },
      // movedown: function () {
      //   this.$refs.box.style.top = parseInt(this.$refs.box.style.top) - this.$refs.content.offsetHeight + 'px';
      // }
    },
    mounted() {
      axios.get("http://wthrcdn.etouch.cn/weather_mini?city=重庆")
        .then(res => {
            this.weather.weekday = res.data.data.forecast[0].date;
            this.weather.low = res.data.data.forecast[0].low.replace(/^[\u4e00-\u9fa5]+\s/, "").replace("℃","");
            this.weather.high = res.data.data.forecast[0].high.replace(/^[\u4e00-\u9fa5]+\s/, "").replace("℃","");
            this.weather.type = res.data.data.forecast[0].type;
        });
    }
};
</script>
<style scoped>
.popular {
  width: 992px;
  height: 560px;
  background-color: #f9f8fd;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.pleft {
  width: 736px;
  height: 100%;
}
.search {
  height: 50px;
  margin-top: 18px;
  display: flex;
  justify-content: space-between;
}
.searchicon {
  display: flex;
  align-items: center;
}
.searchicon img:nth-child(2) {
  transform: translate(0, 50%);
  margin-left: 10px;
}
.sousuo {
  height: 100%;
  width: 80.5%;
  display: flex;
  align-items: center;
  padding-left: 2%;
  padding-right: 2%;
  justify-content: space-between;
  background-color: white;
  border-radius: 5px;
}
.sousuo input {
  height: 80%;
  background-color: white;
  border: none;
  padding-left: 2%;
  width: 70%;
  font-size: 1.02em;
}
.ssj {
  cursor: pointer;
}
.weather {
  width: 13.5%;
  height: 40px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 5px;
}
.weather p{
  margin: 0;
}
.weather p span{
  color: #577ffb;
}
.weather p:nth-child(2){
  color: #577ffb;
}
.hotweb {
  height: 220px;
  margin-top: 18px;
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  border-radius: 5px;
}
.hotwebs {
  width: 20%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #183daf;
  position: relative;
}
.hotwebs a {
  text-decoration: none;
}
.hotwebs a:link,.hotwebs a:visited {
    color: #183daf;
}
.hotwebs a:hover {
    text-decoration-line: underline;
}
.hoticon {
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(-90%, 60%);
}
.pright {
  width: 211px;
  height: 550px;
  background-color: white;
  border-radius: 5px;
  padding-left: 18px;
  padding-top: 10px;
  padding-right: 5px;
}
.aboutmain {
  margin-top: 10px;
  height: 510px;
  width: 198px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.title {
  display: flex;
  width: 100px;
  height: 24px;
  align-items: center;
  font-weight: 600;
  color: #183daf;
}
.titledeco {
  width: 5px;
  height: 24px;
  border-radius: 5px;
  background-color: #5785fb;
  margin-right: 10px;
}
.arrow {
  height: 5%;
  width: 100%;
  background-color: #d4dfff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.arrow:hover {
  background-color: #6892ff;
}
.content {
  height: 82%;
  width: 100%;
  overflow-y: hidden;
}
.box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  transition-duration: 0.5s;
}
.box img{
  margin-bottom: 14px;
  border-radius: 5px;
}
.box img:nth-child(3n) {
  margin-bottom: 0;
}
.allweb {
  width: 992px;
  background-color: white;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  margin-top: 20px;
  border-radius: 5px;
}
</style>

