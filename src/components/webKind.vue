<template>
    <div class="webkind">
        <div class="title">
          <div class="titledeco"></div>
          <p>{{webkinds.kindname}}</p>
        </div>
        <div class="neiwang" v-for="(websites, index) in webkinds.webs" :key="index">
          <div class="title2">{{websites.type}}</div>
          <div class="neiwangs">
            <div v-for="(item, index) in websites.weblist" :key="index" class="neiwanglist">
                <a :href="item.url" target="_blank">{{item.name}}</a>
                <img src="../assets/hoticon.png" alt="hot" class="hoticon" v-if="item.hot">
            </div>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            webkinds: {
                type: Object,
                default: function () {
                    return {
                        kindname: "红岩网校",
                        webs: [
                            {
                                type: "内网",
                                weblist: [
                                    {
                                        name: "关于红岩",
                                        url: "http://hongyan.cqupt.edu.cn/aboutus/",
                                        hot: 1
                                    },
                                ]
                            }
                        ]
                    }
                }
            }
        }
    }
</script>

<style scoped>
.webkind {
  width: 98%;
  padding-top: 1%;
  padding-left: 2%;
  color: #183daf;
}
.title {
  display: flex;
  width: 100px;
  height: 24px;
  align-items: center;
  font-weight: 600;
}
.titledeco {
  width: 5px;
  height: 24px;
  border-radius: 5px;
  background-color: #5785fb;
  margin-right: 10px;
}
.neiwang {
  height: 35%;
  width: 100%;
  margin-top: 2%;
  display: flex;
}
.title2 {
  width: 100px;
  text-align: center;
  font-weight: 600;
}
.neiwangs {
  width: 78%;
  margin-left: 4%;
  display: flex;
  flex-wrap: wrap;
}
.neiwanglist {
  width: calc(100% / 6);
  text-align: center;
  margin-bottom: 5%;
  position: relative;
}
.hoticon {
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(-30%,-45%);
}
.neiwanglist a {
    text-decoration: none;
}
.neiwanglist a:link,.neiwanglist a:visited {
    color: #183daf;
}
.neiwanglist a:hover {
    text-decoration-line: underline;
}
</style>