export default {
  pages: [
    'pages/index/index',
    'pages/my/my',
    'pages/product/productList',
    'pages/product/productDetail',
    'pages/customerCase/customerCaseList',
    'pages/webview/webview',
    'pages/about/about'
  ],
  tabBar:{
    "selectedColor": "#4886D8",
    list:[
      {
        pagePath:"pages/index/index",
        text:"首页",
    // 未点击时显示的图片
        iconPath:"images/homeGray.png",
    // 点击后显示的图片
        selectedIconPath:"images/home.png"
      },
      {
        pagePath:"pages/product/productList",
        text:"产品中心",
    // 未点击时显示的图片
        iconPath:"images/productCenterGray.png",
    // 点击后显示的图片
        selectedIconPath:"images/productCenter.png"
      },
      {
        pagePath:"pages/customerCase/customerCaseList",
        text:"客户案例",
    // 未点击时显示的图片
        iconPath:"images/clientCaseGray.png",
    // 点击后显示的图片
        selectedIconPath:"images/clientCase.png"
      },
      {
        pagePath:"pages/about/about",
        text:"关于我们",
        iconPath:"images/contactUsGray.png",
        selectedIconPath:"images/contactUs.png"
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
