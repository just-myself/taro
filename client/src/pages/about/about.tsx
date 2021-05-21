import React, { Component } from 'react'
import Taro, { Config } from '@tarojs/taro'
import { View, Map,Form ,Input,Textarea,Button,Text,Swiper,SwiperItem,Image  } from '@tarojs/components'
import address from '../../images/address.png'
import compony from '../../images/compony.png'

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
    const bannerList = [
      'cloud://leidaibo-2guczo71ec52d1ae.6c65-leidaibo-2guczo71ec52d1ae-1303852253/image/aboutUs/3_qcd1-tuya.jpg',
      'cloud://leidaibo-2guczo71ec52d1ae.6c65-leidaibo-2guczo71ec52d1ae-1303852253/image/aboutUs/2_wiwz.jpg',
      'cloud://leidaibo-2guczo71ec52d1ae.6c65-leidaibo-2guczo71ec52d1ae-1303852253/image/aboutUs/5_k66t.jpg',
      'cloud://leidaibo-2guczo71ec52d1ae.6c65-leidaibo-2guczo71ec52d1ae-1303852253/image/aboutUs/4_zoyk-tuya.jpg'


    ]
    return (
      <View className='about'>
              <Swiper
        className='banner'
        indicatorColor='#fff'
        indicatorActiveColor='#333'
        
        circular
        indicatorDots
        autoplay>
          {bannerList.map(item=>{
   return <SwiperItem>
    <Image  src={item} style={{width:'100%'}} mode="widthFix" ></Image>
  </SwiperItem>
          })}
      </Swiper>
        <View className='desc'>
        <View>
            企业简介
          </View>
          <View>
          <View>
          广东栢思特威新能源科技有限公司是基于东莞市富仕节能科技有限公司原有成熟的技术及产品，整合各方的战略资源，规范企业管理等进行重组，主要节能产品是注塑机节能、空压机节能、硫化机节能、智能烘干系统、智能供热系统、变压器节能、智能楼宇节能、绿色照明节能等，先后开发了多款超高节电率的节能产品。


          </View>
          <View>
          公司自主研发的微量子热能节能炉作为目前市场唯一的最新一代低耗高效的清洁环保能源反应装置，能替代传统燃料供热（暖）、供蒸汽锅炉设备，具有低耗、高效、安全、稳定、运行成本低廉，节约能耗达50%，无碳、硫、氮化物等排放。
          </View>
          <View>
          公司从事节能技术开发和产品生产、节能改造工程和施工，并为用户提供能源诊断和运行保障等综合性服务；主要采用产品销售及EMC的商业模式为工业制造业领域客户提供能效优化解决方案和项目实施；公司汇集了一批来自台湾及国内行业技术领先的研发和管理团队以及技术精专的生产安装队伍；在化工、印染、石油、医药、橡胶、硅胶、食品行业等领域积累了丰富的产品研发和项目实施应用经验。
          </View>
          <View>
          公司不断开拓创新，致力为工业制造业领域用户提供社会效益与经济效益为一体的节能减排产品和一体化解决方案，建成国内全方位新型环保清洁能源提供商。
          </View>
          <View>
          为客户提供社会效益与经济效益为一体的节能减排产品和一体化解决方案，建成国内全方位新型环保清洁能源提供商。
          </View>
          </View>
        </View>
        <View className='connection'>
        <View>
            联系我们
          </View>
          <View>
      
              <View>手机：13532459000</View>
              <View>邮箱：3618286888@qq.com</View>
              <View>网址：www.gdbstw.com</View>
              <View>办公地址：东莞市松山湖科技二路中科创新广场A座502室</View>
              <View>生产地址:   东莞市寮步镇凫山村金华二街3号之二</View>

       
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
            <Image src={address} />
            <View  onClick={this.getLocation}>
              <View>广东省东莞市凫山兴华百货南100米</View>
              <View>{'>'}</View>
            </View>
          </View>
          <View className="jumpAddress">
            <Image src={compony} />
            <View >
            广东栢思特威新能源科技有限公司,为客户提供社会效益与经济效益为一体的节能减排产品和一体化解决方案，建成国内全方位新型环保清洁能源提供商。
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
