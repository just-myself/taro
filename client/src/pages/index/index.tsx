import React, { Component, useState } from 'react'
import Taro, { Config } from '@tarojs/taro'
import { View, Text,Swiper, SwiperItem,
   Icon,ScrollView,Image   } from '@tarojs/components'


import './index.less'
import productCenter from '../../images/productCenter.png'
import contactUs from '../../images/contactUs.png'
import clientCase from '../../images/clientCase.png'
import Information from '../../images/Information.png'


// import Login from '../../components/login/index'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () {


   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
   handleJumpTo(type,e){
     switch (type) {
       case 'productList':
         
        Taro.navigateTo({
          url:'/pages/product/productList'
        })
         break;
         case 'contactUs':
          Taro.navigateTo({
            url: '/pages/about/about'
          }).catch((error) => {
            console.log(error)
            /* 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面 */
            wx.switchTab({url: '/pages/about/about'})
          })
    
           break;
         case 'customerCase':
          Taro.navigateTo({
            url:'/pages/customerCase/customerCaseList'
          })
           break;
       default:
         break;
     }
   }
   handleJumpToDetail(id){
    Taro.navigateTo({
      url:'/pages/product/productDetail?id='+id
    })
  }
  // wx5ac0b7dfd9d6a8e2
  render () {
    const bannerList:string[] = [
      `cloud://company-project-1-7e2ye1ae7ef6e7.636f-company-project-1-7e2ye1ae7ef6e7-1306309279/u7c1-tuya.jpg`,
      'cloud://company-project-1-7e2ye1ae7ef6e7.636f-company-project-1-7e2ye1ae7ef6e7-1306309279/etie-tuya.jpg',
      'cloud://company-project-1-7e2ye1ae7ef6e7.636f-company-project-1-7e2ye1ae7ef6e7-1306309279/etie_8wau-tuya.jpg',
      'cloud://company-project-1-7e2ye1ae7ef6e7.636f-company-project-1-7e2ye1ae7ef6e7-1306309279/86fg-tuya.jpg'
    ]
    const classifyList:{name:string,img:string,id:string}[] = [
      {
        name:'真空硫化机节能改造',
        img:'cloud://company-project-1-7e2ye1ae7ef6e7.636f-company-project-1-7e2ye1ae7ef6e7-1306309279/classify/5_0adu-tuya.jpg',
        id:'79550af260b381241bcdf23f377c6879'
      },

      {
        name:'电网智能优化系统',
        img:'cloud://company-project-1-7e2ye1ae7ef6e7.636f-company-project-1-7e2ye1ae7ef6e7-1306309279/classify/dw.jpg',
        id:'b00064a760b3810b1c7d3cf06a633582'
      },
      {
        name:'异步伺服节能控制系统',
        img:'cloud://company-project-1-7e2ye1ae7ef6e7.636f-company-project-1-7e2ye1ae7ef6e7-1306309279/classify/11-tuya.jpg',
        id:'79550af260b3813c1bcdfb1f31bc9a8a'
      },
      {
        name:'电磁加热导热油炉',
        img:'cloud://company-project-1-7e2ye1ae7ef6e7.636f-company-project-1-7e2ye1ae7ef6e7-1306309279/classify/ue76-tuya.png',
        id:'28ee4e3e60b386f31e541dec0d719843'
     
      },
      
      
    ]

    const partnerList=[
      {
        children:[
          'cloud://company-project-1-7e2ye1ae7ef6e7.636f-company-project-1-7e2ye1ae7ef6e7-1306309279/partner/8c22-tuya.png',
          'cloud://company-project-1-7e2ye1ae7ef6e7.636f-company-project-1-7e2ye1ae7ef6e7-1306309279/partner/1j3o-tuya.png',
          'cloud://company-project-1-7e2ye1ae7ef6e7.636f-company-project-1-7e2ye1ae7ef6e7-1306309279/partner/0fxb-tuya.png',
          'cloud://company-project-1-7e2ye1ae7ef6e7.636f-company-project-1-7e2ye1ae7ef6e7-1306309279/partner/z3nd-tuya.png',
          'cloud://company-project-1-7e2ye1ae7ef6e7.636f-company-project-1-7e2ye1ae7ef6e7-1306309279/partner/vcjy-tuya.png',
          'cloud://company-project-1-7e2ye1ae7ef6e7.636f-company-project-1-7e2ye1ae7ef6e7-1306309279/partner/t862-tuya.png',
       
        ]
      },
      {
        children:[
          'cloud://company-project-1-7e2ye1ae7ef6e7.636f-company-project-1-7e2ye1ae7ef6e7-1306309279/partner/qfg3-tuya.png',
          'cloud://company-project-1-7e2ye1ae7ef6e7.636f-company-project-1-7e2ye1ae7ef6e7-1306309279/partner/pca3-tuya.png',
          'cloud://company-project-1-7e2ye1ae7ef6e7.636f-company-project-1-7e2ye1ae7ef6e7-1306309279/partner/82h1-tuya.png',
          'cloud://company-project-1-7e2ye1ae7ef6e7.636f-company-project-1-7e2ye1ae7ef6e7-1306309279/partner/22-tuya.png',
          'cloud://company-project-1-7e2ye1ae7ef6e7.636f-company-project-1-7e2ye1ae7ef6e7-1306309279/partner/11-tuya.jpg',
          'cloud://company-project-1-7e2ye1ae7ef6e7.636f-company-project-1-7e2ye1ae7ef6e7-1306309279/partner/8gps-tuya.png',
        ]
      }
    ]
    const honorList = [
      'cloud://company-project-1-7e2ye1ae7ef6e7.636f-company-project-1-7e2ye1ae7ef6e7-1306309279/productDetail/zheng1.jpg',
      'cloud://company-project-1-7e2ye1ae7ef6e7.636f-company-project-1-7e2ye1ae7ef6e7-1306309279/productDetail/zheng2.jpg',
      'cloud://company-project-1-7e2ye1ae7ef6e7.636f-company-project-1-7e2ye1ae7ef6e7-1306309279/productDetail/zheng3.jpg',
      'cloud://company-project-1-7e2ye1ae7ef6e7.636f-company-project-1-7e2ye1ae7ef6e7-1306309279/productDetail/zheng4.jpg',
      'cloud://company-project-1-7e2ye1ae7ef6e7.636f-company-project-1-7e2ye1ae7ef6e7-1306309279/productDetail/zheng5.jpg',
      'cloud://company-project-1-7e2ye1ae7ef6e7.636f-company-project-1-7e2ye1ae7ef6e7-1306309279/productDetail/zheng6.jpg',
      'cloud://company-project-1-7e2ye1ae7ef6e7.636f-company-project-1-7e2ye1ae7ef6e7-1306309279/productDetail/zheng7.jpg',
      'cloud://company-project-1-7e2ye1ae7ef6e7.636f-company-project-1-7e2ye1ae7ef6e7-1306309279/productDetail/zheng8.jpg',
      'cloud://company-project-1-7e2ye1ae7ef6e7.636f-company-project-1-7e2ye1ae7ef6e7-1306309279/productDetail/zheng9.jpg',
      'cloud://company-project-1-7e2ye1ae7ef6e7.636f-company-project-1-7e2ye1ae7ef6e7-1306309279/productDetail/zheng10.jpg',
      'cloud://company-project-1-7e2ye1ae7ef6e7.636f-company-project-1-7e2ye1ae7ef6e7-1306309279/productDetail/zheng11.jpg',
      'cloud://company-project-1-7e2ye1ae7ef6e7.636f-company-project-1-7e2ye1ae7ef6e7-1306309279/productDetail/zheng12.jpg',
      'cloud://company-project-1-7e2ye1ae7ef6e7.636f-company-project-1-7e2ye1ae7ef6e7-1306309279/productDetail/zheng13.jpg',
    ]


    const enterpriseAdvantageImg  = 'cloud://company-project-1-7e2ye1ae7ef6e7.636f-company-project-1-7e2ye1ae7ef6e7-1306309279/youshi.png'


    return (
      <View className='index'>
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
       {/* <View className='mainTabList'>
         <View onClick={this.handleJumpTo.bind(this,'productList')}>
         <Image src={productCenter} style={{width:30,height:30}} />
           产品中心
         </View>
    
         <View onClick={this.handleJumpTo.bind(this,'customerCase')}>
         <Image src={clientCase} style={{width:30,height:30}} />
         客户案例
         </View>
         <View onClick={this.handleJumpTo.bind(this,'')}>
         <Image src={Information} style={{width:30,height:30}} />
         新闻资讯
         </View>
         <View onClick={this.handleJumpTo.bind(this,'contactUs')}>
         <Image src={contactUs} style={{width:30,height:30}} />
         联系我们
         </View>
      
       </View> */}
      <View className='mainType'>
        {classifyList.map(item=>{
 return <View onClick={this.handleJumpToDetail.bind(this,item.id)}>
   <View>{item.name}</View>
    <Image src={item.img} />
 </View>
        })}
       
  
      </View>
      <View className='enterpriseAdvantage'>
      <View className='enterpriseAdvantageTitle' >- 企业优势 -</View>
        <Image src={enterpriseAdvantageImg} mode="widthFix"></Image>
      </View>

      <View className='honor'>
      <View className='honorTitle' >- 荣誉资质 -</View>
      <ScrollView
      className='scrollview'
      scrollX
      scrollWithAnimation	
	    enableFlex	
    >
      {honorList.map((item)=>{item
        return  <Image src={item} style={{display: 'inline-block'}} mode="heightFix"></Image>
      })}
     
	</ScrollView>

      </View>

      <View className='partner'>
      <View className='partnerTitle' >- 合作伙伴 -</View>
      <Swiper
        className='partnerSwiper'
        circular
        indicatorDots={false}
        autoplay>
            {
              partnerList.map(item=>{
  return <SwiperItem>
               <View>
               
             {item.children.map(val=> <Image src={val}></Image>)}  
               
          </View>
        </SwiperItem>
              })
            }
 
      </Swiper>

      </View>

<View>

</View>



      </View>
    )
  }
}
