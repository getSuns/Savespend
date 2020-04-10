const Mock = require("mockjs");
let dataList = Mock.mock({
    "data|10": [ //生成20条数据 数组
        {
            "shopId|+1": 1,//商品id
            "shopName": "@cname",//生成商品名
            "addressText": "@ctitle(10)", //商品地址
            "shopDistance|1-1000":222,//商品距离
            "shopImg": "@Image('100x40','#FDD100', '#ffffff','菜品')",//商品图片
            "shopStar|1-5": "★", //随机生成1-5个星星
            "tagId|1-2":2, //随机生成商品标签 1 新店开业 2回头客多
            "salesCount|1-2000":222,//月销售数量
            "isCollect|1":true,
            "discountActivitie|0-2": [ //每个商品中再随机生成2个优惠
                {
                    "tagId|1-2":2, //随机生成商品优惠标签 1优惠 2领券
                    "activitieMsg": "@ctitle(10)", //优惠信息
                }
            ],
            "shopScore|0-5": 1,//商品评分
            "starClass":['']
        }
    ]
});
let datatest2 = Mock.mock({
    "data|100": [ //生成100条数据 数组
        {
            "shopId|+1": 1,//生成商品id，自增1
            "shopMsg": "@ctitle(10)", //生成商品信息，长度为10个汉字
            "shopName": "@cname",//生成商品名 ， 都是中国人的名字
            "shopTel": /^1(5|3|7|8)[0-9]{9}$/,//生成随机电话号
            "shopAddress": "@county(true)", //随机生成地址
            "shopStar|1-5": "★", //随机生成1-5个星星
            "salesVolume|30-1000": 30, //随机生成商品价格 在30-1000之间
            "shopLogo": "@Image('100x40','#c33', '#ffffff','小北鼻')", //生成随机图片，大小/背景色/字体颜色/文字信息
            "state|1":true,//随机生成布尔值true的概率为1/2
            "food|7": [ //每个商品中再随机生成七个food
                {
                    "foodName": "@cname", //food的名字
                    "foodPic": "@Image('100x40','#c33', '#ffffff','小可爱')",//生成随机图片，大小/背景色/字体颜色/文字信息
                    "foodPrice|1-100": 20,//生成1-100的随机数
                    "aname|14": [
                        { 
                            "aname": "@cname", 
                            "aprice|30-60": 20 
                        }
                    ]
                }
            ]
        }
    ]
})
Mock.mock(/goods\/goodAll/, 'post', (params) => { //三个参数。第一个路径，第二个请求方式post/get，第三个回调，返回值
  var info = JSON.parse(params.body)
  var [index, size, total] = [info.pageIndex, info.pageSize, dataList['data'].length]

  var len = total / size

  var totalPages = len - parseInt(len) > 0 ? parseInt(len) + 1 : len

  var newDataList = dataList['data'].slice(index * size, (index + 1) * size)

  return {

    'code': '0',

    'message': 'success',

    'data': {

      'pageIndex': index,

      'pageSize': size,

      'data': newDataList,

      'total': total,

      'totalPages': totalPages

    }

  }
})
Mock.mock(/goods\/datatest2/, 'post', () => { //三个参数。第一个路径，第二个请求方式post/get，第三个回调，返回值
    return datatest2
})