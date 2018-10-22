# 重邮网址大全

[线上地址](https://hongyan.cqupt.edu.cn/websites/)

```
安装依赖包————npm install
跑起服务器————npm run serve
打包————npm run build
```


## 网址修改说明
```
网址分为两部分，全部写在config.js中，一部分热门板块，放在hotweb中，另一部分是所有网址，放在allweb中
```

### 20个热门网站
```
hotweb: [
    {
        "name": "红岩网校",
        "url": "http://hongyan.cqupt.edu.cn/"
    }, 
    ···
]
一个像这样的对象数组，添加时在数组里写入新对象如示例所示，修改name和url属性即可
（注意数量，不要超过20，也尽量不要少，最好20整）
```

### 所有网站
```
allweb: [
    {
        "kindname": "学校网站",
        "webs": [
            {
                "type": "内网",
                "weblist": [
                    {
                        "name": "校务信息网",
                        "url": "http://oa.cqupt.edu.cn/"
                    },
                    ···
                ]
            }
            ···
        ]
    },
    ···
]
也是对象数组，每个对象代表所有网站模块的一个具体类别（一级目录，例如学校网站、红岩网校）
类别名称写在此对象的kindname属性中

webs对象数组是此类别下的详细网站分类（二级目录，例如内网、外网），
类别名称写在此对象的type属性中

weblist是此类别下的网站列表


要添加一级目录，在allweb数组中按示例格式加入新对象
要在一级目录下添加二级目录，在相应一级目录下webs数组中按示例格式加入新对象
要在二级目录下添加新网址，在相应二级目录下weblist数组中按格式加入新对象

```
