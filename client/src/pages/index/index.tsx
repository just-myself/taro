import React, { Component } from 'react'
import Taro, { Config } from '@tarojs/taro'
import { View, Text,Swiper, SwiperItem,
   Icon,ScrollView  } from '@tarojs/components'


import './index.less'

// import Login from '../../components/login/index'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () {


   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
           <Swiper
        className='test-h'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        
        circular
        indicatorDots
        autoplay>
        <SwiperItem>
          <image src='cloud://leidaibo-2guczo71ec52d1ae.6c65-leidaibo-2guczo71ec52d1ae-1303852253/image/banner.jpg' style={{backgroundSize:'100%'}}></image>
          <View className='demo-text-1'>1</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-2'>2</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-3'>3</View>
        </SwiperItem>
      </Swiper>
       <View className='mainTabList'>
         <View>
         <Icon size='30' type='info' />
           产品中心

         </View>
         <View>
         <Icon size='30' type='info' />产品视频</View>
         <View>   <Icon size='30' type='info' />产品行业案例</View>
         <View>   <Icon size='30' type='info' />联系我们</View>
       </View>
      <View className='mainType'>
        <View></View>
        <View></View>
        <View></View>
        <View></View>
      </View>
      <View className='productShowContent'>
      <View className='productShowTitle' >产品展示</View>
      <View className='productShowList'>
        <View></View>
        <View></View>
        <View></View>
        <View></View>
      </View>
      </View>

      <View className='honor'>
      <View className='honorTitle' >- 荣誉资质 -</View>
      <ScrollView
      className='scrollview'
      scrollX
      scrollWithAnimation	
	    enableFlex	
    >
      {[1,2,3,4,5,6,7,8].map(item=>{
        return  <image src='cloud://leidaibo-2guczo71ec52d1ae.6c65-leidaibo-2guczo71ec52d1ae-1303852253/image/banner.jpg' style={{display: 'inline-block'}}></image>
      })}
     
	</ScrollView>

      </View>

      <View className='partner'>
      <View className='partnerTitle' >- 合作伙伴 -</View>
      <Swiper
        className='test-h'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        
        circular
        indicatorDots
        autoplay>
        <SwiperItem>
          <image src='cloud://leidaibo-2guczo71ec52d1ae.6c65-leidaibo-2guczo71ec52d1ae-1303852253/image/banner.jpg' style={{backgroundSize:'100%'}}></image>
          <View className='demo-text-1'>1</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-2'>2</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-3'>3</View>
        </SwiperItem>
      </Swiper>

      </View>

<View>

</View>



      </View>
    )
  }
}
