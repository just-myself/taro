export default {
  pages: [
    'pages/index/index',
    'pages/my/my',
    'pages/about/about'
  ],
  tabBar:{
    list:[
      {
        pagePath:"pages/index/index",
        text:"首页",
    // 未点击时显示的图片
        iconPath:"images/home.jpg",
    // 点击后显示的图片
        selectedIconPath:"images/home.jpg"
      },
      {
        pagePath:"pages/about/about",
        text:"关于我们",
        iconPath:"images/about.jpg",
        selectedIconPath:"images/about.jpg"
      },

    ]
  },

  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  cloud: true,
  "permission": {
    "scope.userLocation": {
      "desc": "你的位置信息将用于小程序位置接口的效果展示" // 高速公路行驶持续后台定位
    }
  }
}