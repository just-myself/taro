import React, { Component } from 'react'
import Taro, { Config } from '@tarojs/taro'

import './app.less'

class App extends Component {

  componentDidMount () {
    console.log(process.env.TARO_ENV,'process.env.TARO_ENV');
    
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init()
    }

  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
