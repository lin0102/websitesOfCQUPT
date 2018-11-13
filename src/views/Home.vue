<template>
    <div class="home">
        <div class="popular">
            <div class="pleft">
                <lunbo :imglist="imglist"></lunbo>
                <div class="search">
                    <form action="https://www.baidu.com/baidu" target="_blank" class="sousuo">
                        <div class="searchicon">
                            <img src="../assets/baidu.png" alt="Baidu">
                        </div>
                        <input type="text" name="word" size=30 placeholder="请输入您要搜索的内容" autocomplete="off">
                        <img src="../assets/sousuo.png" alt="sousuo" @click="submitsearch()" class="ssj">
                    </form>
                    <div class="weather">
                        <p>星期{{weather.weekday}}&nbsp;<span>{{weather.type}}</span></p>
                        <p>{{weather.low}}&nbsp;-&nbsp;{{weather.high}}℃</p>
                    </div>
                </div>
                <div class="hotweb">
                    <div class="hotwebs" v-for="(hotweb, index) in hotweblist" :key="index">
                        <a :href="hotweb.url" target="_blank">{{hotweb.name}}</a>
                        <img src="../assets/hoticon.png" alt="hot" class="hoticon" v-if="hotweb.hot">
                    </div>
                </div>
            </div>
            <div class="pright">
                <div class="title">
                    <div class="titledeco"></div>
                    <p>关于我们</p>
                </div>
                <div class="aboutmain">
                    <div class="arrow" @click="moveup()"><img src="../assets/up.png" alt="向上" width="30" height="30"></div>
                    <div class="content" ref="content">
                        <div class="box" style="top:0;" ref="box">
                            <a target="_blank" v-for="(aboutimg, index) in aboutus" :key="index" :href="aboutimg.link">
                                <img :src="aboutimg.url">
                            </a>
                        </div>
                    </div>
                    <div class="arrow" @click="movedown()"><img src="../assets/down.png" alt="向下" width="30" height="30"></div>
                </div>
            </div>
        </div>
        <div class="qcode" :style="{left: screenWidth / 2  + 505+'px'}">
            <div>
                <img src="../assets/zhangyou.png" alt="掌上重邮二维码">
                <p>掌上重邮</p>
            </div>
            <div>
                <img src="../assets/bangshou.png" alt="重邮小帮手二维码">
                <p>重邮小帮手</p>
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
    export default {
        components: {
            lunbo,
            webKind
        },
        data() {
            return {
                imglist: [
                    {
                        "name": "迎新网",
                        "url": "https://hongyan.cqupt.edu.cn/web/img/yingxin2.6ea16ca4.png"
                    }
                ],
                aboutus: [],
                weather: {
                    weekday: "--",
                    low: "--",
                    high: "--",
                    type: "晴"
                },
                // hotweblist: config.hotweb,
                // allweblist: config.allweb,
                hotweblist: [],
                allweblist: [],
                screenWidth: window.innerWidth,
            }
        },
        methods: {
            submitsearch: function() {
                document.querySelector(".sousuo").submit();
            },
            moveup: function() {
                if (parseInt(this.$refs.box.style.top) == 0) {
                    return;
                }
                this.$refs.box.style.top = parseInt(this.$refs.box.style.top) + this.$refs.content.offsetHeight + 'px';
            },
            movedown: function() {
                if (parseInt(this.$refs.box.style.top) <= (this.$refs.content.offsetHeight - this.$refs.box.offsetHeight)) {
                    return;
                }
                this.$refs.box.style.top = parseInt(this.$refs.box.style.top) - this.$refs.content.offsetHeight + 'px';
            }
        },
        beforeCreate(){
            //请求数据来渲染页面
            axios.get("http://hongyan.cqupt.edu.cn/webapi/index?title=banner")
                .then(res => {
                    this.imglist = res.data;
                })
                .catch(err => {
                    console.log(err);
                });
            axios.get("http://hongyan.cqupt.edu.cn/webapi/index?title=hotwebs")
                .then(res => {
                    this.hotweblist = res.data;
                })
                .catch(err => {
                    console.log(err);
                });
            axios.get("http://hongyan.cqupt.edu.cn/webapi/index?title=recommend")
                .then(res => {
                    this.allweblist = res.data;
                })
                .catch(err => {
                    console.log(err);
                });
            axios.get("http://hongyan.cqupt.edu.cn/webapi/index?title=aboutus")
                .then(res => {
                    this.aboutus = res.data;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        mounted() {
            axios.get("https://restapi.amap.com/v3/weather/weatherInfo?key=0e4e53c12afaed2a26fdf2e0ef1956dc&city=500108&extensions=all")
                .then(res => {
                    let weekdays = ["一", "二", "三", "四", "五", "六", "日"];
                    let hour = new Date().getHours();
                    this.weather.weekday = weekdays[res.data.forecasts[0].casts[0].week - 1];
                    this.weather.low = res.data.forecasts[0].casts[0].nighttemp;
                    this.weather.high = res.data.forecasts[0].casts[0].daytemp;
                    this.weather.type = (hour >= 6 && hour < 18) ? res.data.forecasts[0].casts[0].dayweather : res.data.forecasts[0].casts[0].nightweather;
                }); //获取天气
            const that = this;
            window.onresize = function() {
                that.screenWidth = window.innerWidth;
            }
        },
    };
</script>

<style scoped>
    .home {
        position: relative;
    }
    
    .popular {
        width: 992px;
        height: 560px;
        background-color: #f9f8fd;
        position: relative;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
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
        box-shadow: 0 0px 5px rgba(0, 0, 0, 0.144);
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
        box-shadow: 0 0px 5px rgba(0, 0, 0, 0.144);
    }
    
    .weather p {
        margin: 0;
    }
    
    .weather p span {
        color: #577ffb;
    }
    
    .weather p:nth-child(2) {
        color: #577ffb;
    }
    
    .hotweb {
        height: 220px;
        margin-top: 18px;
        display: flex;
        flex-wrap: wrap;
        background-color: white;
        border-radius: 5px;
        box-shadow: 0 0px 5px rgba(0, 0, 0, 0.144);
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
    
    .hotwebs a:link,
    .hotwebs a:visited {
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
        box-shadow: 0 0px 5px rgba(0, 0, 0, 0.144);
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
        overflow-x: visible;
    }
    
    .box {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        position: relative;
        transition-duration: 0.5s;
    }
    
    .box a {
        width: 198px;
        height: 130px;
        margin-bottom: 14px;
        border-radius: 5px;
    }
    
    .box a:nth-child(3n) {
        margin-bottom: 0px;
    }
    
    .box a:hover {
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.144);
    }
    
    .box img {
        width: 100%;
        height: 100%;
    }
    
    .qcode {
        position: fixed;
        top: 86.6px;
        z-index: 10;
        animation-name: Yrotate;
        animation-duration: 8s;
        animation-iteration-count: infinite;
    }
    
    .qcode div {
        background-color: white;
        text-align: center;
        padding: 10px;
        border-radius: 5px;
        white-space: nowrap;
        color: #666666;
        box-shadow: 0 0px 5px rgba(0, 0, 0, 0.144);
    }
    
    .qcode div:last-child {
        margin-top: 15px;
    }
    
    .qcode p {
        margin: 0;
    }
    
    .allweb {
        width: 992px;
        background-color: white;
        position: relative;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        border-radius: 5px;
        box-shadow: 0 0px 5px rgba(0, 0, 0, 0.144);
    }
    @keyframes Yrotate {
        0% {
            transform: rotateY(0);
        }
        50% {
            transform: rotateY(360deg);
        }
        100% {
            transform: rotateY(360deg)
        }
    }
</style>

