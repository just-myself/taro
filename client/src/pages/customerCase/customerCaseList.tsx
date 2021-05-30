import React, { Component, useState } from 'react'
import Taro, { Config,Current } from '@tarojs/taro'
import { View, Text,Swiper, SwiperItem,
   Icon,ScrollView,Image   } from '@tarojs/components'
   import './customerCaseList.less'
export default class CustomerCaseList extends Component {
constructor(props){
  super(props)
  this.state={
    data:{
  
    }
  }
}
componentDidMount(){
  const id=Current.router.params.id
  const db = wx.cloud.database()
  const productDetail = db.collection('productDetail')
  console.log(productDetail,'productDetail');
}
  render(){
 

    return (
      <View className='customerCaseList'>
   111
        
        </View>

    )
  }

}
