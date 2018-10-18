
/* 配置文件，包含热门网站网址（热门板块），各类型网站（所有网站板块），改变时照原格式写入相关信息即可*/

const config = {
    // 热门板块，20个热门网站，尽量不要改变数量
    hotweb: [
        {
            "name": "红岩网校",
            "url": "http://202.202.43.125/"
        },
        {
            "name": "掌上重邮",
            "url": "http://hongyan.cqupt.edu.cn/app/"
        },
        {
            "name": "2018迎新网",
            "url": "http://wx.yyeke.com/nodejs/welcome2018/"
        },
        {
            "name": "邮资源",
            "url": "http://software.sre.redrock.team/"
        },
        {
            "name": "关于红岩",
            "url": "http://202.202.43.125/aboutus"
        },
        {
            "name": "重庆邮电大学",
            "url": "http://www.cqupt.edu.cn/cqupt/index.shtml"
        },
        {
            "name": "图书馆",
            "url": "http://tsg.cqupt.edu.cn/ShangYeYd_Library/Index.html"
        },
        {
            "name": "学工在线",
            "url": "http://222.177.140.105/index.shtml"
        },
        {
            "name": "素质教育网络",
            "url": "http://bxf.cqupt.edu.cn/Bscore/"
        },
        {
            "name": "集中收费平台",
            "url": "http://jzsf.cqupt.edu.cn/jzsf3/"
        },
        {
            "name": "选课系统1",
            "url": "http://xk1.cqupt.edu.cn/"
        },
        {
            "name": "选课系统2",
            "url": "http://xk2.cqupt.edu.cn/"
        },
        {
            "name": "选课系统3",
            "url": "http://xk4.cqupt.edu.cn/"
        },
        {
            "name": "学生邮箱",
            "url": "https://mail.cqupt.edu.cn/"
        },
        {
            "name": "教师邮箱",
            "url": "https://mail.cqupt.edu.cn/"
        },
        {
            "name": "教务在线",
            "url": "http://jwzx.cqupt.edu.cn/"
        },
        {
            "name": "教室申请",
            "url": "http://jwzx.cqupt.edu.cn/login.php?return=/jssq/index.php"
        },
        {
            "name": "课表查询",
            "url": "http://jwzx.cqupt.edu.cn/kebiao/index.php"
        },
        {
            "name": "考试查询",
            "url": "http://jwzx.cqupt.edu.cn/ksap/index.php"
        },
        {
            "name": "校历",
            "url": "http://jwzx.cqupt.edu.cn/infoNavi.php?dId=000310"
        }
    ],

    //所有网站板块，默认一个模块下只有内网外网两种分类，如需增加，在webs数组按原格式增加对象即可
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
                        {
                            "name": "教务在线",
                            "url": "http://jwzx.cqupt.edu.cn/"
                        },
                        {
                            "name": "心理辅导中心",
                            "url": "http://xsc.cqupt.edu.cn/mind/"
                        },
                        {
                            "name": "教材网",
                            "url": "http://jwzx.cqupt.edu.cn/jc/"
                        },
                        {
                            "name": "网络认证系统",
                            "url": "http://202.202.32.122/login.php"
                        },
                        {
                            "name": "研究生教务系",
                            "url": "http://172.22.61.199/"
                        },
                        {
                            "name": "勤工助学中心",
                            "url": "http://qgzx.cqupt.edu.cn/"
                        },
                        {
                            "name": "选课系统1",
                            "url": "http://xk1.cqupt.edu.cn/"
                        },
                        {
                            "name": "选课系统2",
                            "url": "http://xk2.cqupt.edu.cn/"
                        },
                        {
                            "name": "选课系统3",
                            "url": "http://xk4.cqupt.edu.cn/"
                        },
                        {
                            "name": "学工在线",
                            "url": "http://222.177.140.105/index.shtml"
                        },
                        {
                            "name": "素质教育网络",
                            "url": "http://bxf.cqupt.edu.cn/Bscore/"
                        },
                        {
                            "name": "网上党校",
                            "url": "http://222.177.140.105/default.jsp"
                        }
                    ]
                },
                {
                    "type": "外网",
                    "weblist": [
                        {
                            "name": "重庆邮电大学",
                            "url": "http://www.cqupt.edu.cn/cqupt/index.shtml"
                        },
                        {
                            "name": "红岩网校",
                            "url": "http://202.202.43.125/"
                        },
                        {
                            "name": "教师/学生邮箱",
                            "url": "https://mail.cqupt.edu.cn/"
                        },
                        {
                            "name": "就业指导中心",
                            "url": "http://job.cqupt.edu.cn/portal/home.html"
                        },
                        {
                            "name": "重邮信科",
                            "url": "http://www.cqcyit.com/"
                        },
                        {
                            "name": "宽带计费系统",
                            "url": "http://cq.189.cn/college/newschool/index.htm"
                        },
                        {
                            "name": "采购中心",
                            "url": "http://zwyd.cqupt.edu.cn/sfw_cms/e?page=cms.index"
                        },
                        {
                            "name": "集中收费平台",
                            "url": "http://jzsf.cqupt.edu.cn/jzsf3/"
                        }
                    ]
                }
            ]
        },
        {
            "kindname": "红岩网校",
            "webs": [
                {
                    "type": "内网",
                    "weblist": [
                        {
                            "name": "邮资源",
                            "url": "http://software.sre.redrock.team/"
                        }
                    ]
                },
                {
                    "type": "外网",
                    "weblist": [
                        {
                            "name": "关于红岩",
                            "url": "http://202.202.43.125/aboutus"
                        },
                        {
                            "name": "校领导接待室",
                            "url": "http://hongyan.cqupt.edu.cn/aboutus/"
                        },
                        {
                            "name": "重邮通行证",
                            "url": "http://hongyan.cqupt.edu.cn/user/user.php"
                        },
                        {
                            "name": "2018迎新网",
                            "url": "http://wx.yyeke.com/nodejs/welcome2018/"
                        },
                        {
                            "name": "掌上重邮",
                            "url": "http://hongyan.cqupt.edu.cn/app/"
                        }
                    ]
                }
            ]
        },
        {
            "kindname": "部门机构",
            "webs": [
                {
                    "type": "内网",
                    "weblist": [
                        {
                            "name": "团委",
                            "url": "http://202.202.43.42/gqt/"
                        },
                        {
                            "name": "学生工作部",
                            "url": "http://xsc.cqupt.edu.cn/"
                        },
                        {
                            "name": "财务处",
                            "url": "https://ids.cqupt.edu.cn/authserver/login?service=http%3A%2F%2Fpost.cqupt.edu.cn%2F"
                        }
                    ]
                },
                {
                    "type": "外网",
                    "weblist": [
                        {
                            "name": "党委办公室",
                            "url": "http://office.cqupt.edu.cn/"
                        },
                        {
                            "name": "组织部",
                            "url": "http://dwzzb.cqupt.edu.cn/"
                        },
                        {
                            "name": "宣传部",
                            "url": "http://xcb.cqupt.edu.cn/"
                        },
                        {
                            "name": "保卫处/武装部",
                            "url": "http://bwc.cqupt.edu.cn/"
                        },
                        {
                            "name": "招生就业处",
                            "url": "http://zjc.cqupt.edu.cn/"
                        },
                        {
                            "name": "工会",
                            "url": "http://gh.cqupt.edu.cn/"
                        },
                        {
                            "name": "人事处",
                            "url": "http://rsc.cqupt.edu.cn/"
                        },
                        {
                            "name": "教务处",
                            "url": "http://jwc.cqupt.edu.cn/"
                        },
                        {
                            "name": "研究生部",
                            "url": "http://gs.cqupt.edu.cn/"
                        },
                        {
                            "name": "社会学科处",
                            "url": "http://skc.cqupt.edu.cn/"
                        },
                        {
                            "name": "基建后勤处",
                            "url": "http://jjc.cqupt.edu.cn/"
                        },
                        {
                            "name": "国际处",
                            "url": "http://gjc.cqupt.edu.cn/"
                        },
                        {
                            "name": "离退休管理处",
                            "url": "http://ltxc.cqupt.edu.cn/"
                        },
                        {
                            "name": "图书馆",
                            "url": "http://tsg.cqupt.edu.cn/ShangYeYd_Library/Index.html"
                        },
                        {
                            "name": "纪委",
                            "url": "http://jiwei.cqupt.edu.cn/"
                        },
                        {
                            "name": "网管中心",
                            "url": "http://xxb.cqupt.edu.cn/"
                        },
                        {
                            "name": "期刊社",
                            "url": "http://journal.cqupt.edu.cn/"
                        }
                    ]
                }
            ]
        },
        {
            "kindname": "学院风采",
            "webs": [
                {
                    "type": "",
                    "weblist": [
                        {
                            "name": "通信学院",
                            "url": "http://scie.cqupt.edu.cn/"
                        },
                        {
                            "name": "计算机学院",
                            "url": "http://cs.cqupt.edu.cn/"
                        },
                        {
                            "name": "自动化学院",
                            "url": "http://ac.cqupt.edu.cn/"
                        },
                        {
                            "name": "光电工程/重庆国际半导体学院",
                            "url": "http://ee.cqupt.edu.cn/"
                        },
                        {
                            "name": "经济管理/现代邮政学院",
                            "url": "http://jgxy.cqupt.edu.cn/"
                        },
                        {
                            "name": "生物信息学院",
                            "url": "http://swxy.cqupt.edu.cn/"
                        },
                        {
                            "name": "安法学院",
                            "url": "http://sl.cqupt.edu.cn/index.htm"
                        },
                        {
                            "name": "数理学院",
                            "url": "http://lxy.cqupt.edu.cn/"
                        },
                        {
                            "name": "传媒艺术学院",
                            "url": "http://cmys.cqupt.edu.cn/"
                        },
                        {
                            "name": "体育学院",
                            "url": "http://tyxy.cqupt.edu.cn/"
                        },
                        {
                            "name": "软件学院",
                            "url": "http://software.cqupt.edu.cn/"
                        },
                        {
                            "name": "移通学院",
                            "url": "http://www.cqyti.com/"
                        }
                    ]
                }
            ]
        }
    ]
};