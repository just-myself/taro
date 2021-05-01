import React, { Component } from 'react'
import Taro, { Config } from '@tarojs/taro'
import { View, Map,Form ,Input,Textarea,Button,Text  } from '@tarojs/components'


import './about.less'



export default class About extends Component {

  componentWillMount () { }

  componentDidMount () {


   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  getLocation=()=>{
    wx.getLocation({
      type: 'wgs84', 
      success: function (res) {
        wx.openLocation({//​使用微信内置地图查看位置。
          latitude:23.01996,
          longitude:113.863022,
          name: "东莞富仕节能科技有限公司",
          address: '东莞富仕节能科技有限公司'
        })
      }
    })
  }
  formSubmit = e => {
    console.log(e)
  }

  formReset = e => {
    console.log(e)
  }


  render () {
    const tempMarktes =[{
      latitude:23.01996,
      longitude:113.863022,
    callout:{//不适用自定义气泡的东西，在这里面写样式和内容
      content:"东莞富仕节能科技有限公司",
      textAlign:"center",
      color:"#000",
      borderWidth:0,
      // bgColor:'rgba(0,0,0,0.2)',//背景颜色，可使用rgba
      anchorY:10,
      fontSize:12,
      display:"ALWAYS",
    }, 
    
    // width: 40,//icon大小
    // height: 50,

    }]
    return (
      <View className='about'>
        <image className='addrImg' src='cloud://leidaibo-2guczo71ec52d1ae.6c65-leidaibo-2guczo71ec52d1ae-1303852253/image/banner.jpg'></image>
        <View className='desc'>
        <View>
            企业简介
          </View>
          <View>
          <View>
            某某有限公司成立于19993年，是开发和生产什么
            什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么
            什么什么什么什么什么什么什么
            什么什么什么,建立了完整的体系
          </View>
          <View>
            研发优质什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么
            什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么
            什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么
            什么什么什么什么什么什么什么什么什么
            至今已销售。。。
          </View>
          <View>
          以顾客为中心，全心全意为客户服务是公司的经营宗旨，优质产品，一流服务，顾客优先，永续经营是公司的品质政策。公司以优良品质，合理价格，高效服务满足了广大海内外客户的需求。
          </View>
          </View>
        </View>
        <View className='connection'>
        <View>
            联系我们
          </View>
          <View>
      
              <View>手机：14334234234</View>
              <View>邮箱：cabdy@xiaomei.comcabdy@xiaomei.com</View>
              <View>网址：www.xiaogmei.com</View>
       

       
          </View>
        </View>
        <View className='companyAddress'>
        <View>
            - 公司地址 -
          </View>
          <View>
            <Map
            style={{width:'100%',height:'240px'}}
            latitude={23.01996}
            longitude={113.863022}
            markers={tempMarktes}
            scale={16}
            show-location
          /> 
          <View className="jumpAddress">
            <View>图标</View>
            <View  onClick={this.getLocation}>
              <View>广东省东莞市凫山兴华百货南100米</View>
              <View>{'>'}</View>
            </View>
          </View>
       

       
          </View>
        </View>
        <View className="formStyle">
        <Form onSubmit={this.formSubmit} onReset={this.formReset} >
        <View className='example-body'>
          <View className="formTitle"><Text>{'*'}</Text>留言主题：</View>
          <Input  name='switch1' className='form-switch'  placeholder='请输入留言主题' />
          <View className="formTitle"><Text>*</Text>您的姓名：</View>
          <Input  name='switch2' className='form-switch'  placeholder='请输入联系人姓名' />
          <View className="formTitle"><Text>*</Text>联系电话：</View>
          <Input  name='switch3' className='form-switch'  placeholder='请输入联系人电话' />
          <View className="formTitle"><Text>*</Text>其他备注：</View>
          <Textarea  name='switch4' style='background:#fff;width:100%;min-height:80px;padding:0 30rpx;' autoHeight placeholder='请输入您的备注' />
        </View>
        <Button form-type='submit' className='btn-max-w' plain type='primary'>马上提交</Button>
      </Form>

        </View>

      </View>
    )
  }
}
