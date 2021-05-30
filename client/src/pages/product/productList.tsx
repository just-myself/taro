import React, { Component, useState } from 'react'
import Taro, { Config } from '@tarojs/taro'
import { View, Text,Swiper, SwiperItem,
   Icon,ScrollView,Image   } from '@tarojs/components'
   import './productList.less'
export default class ProductList extends Component {
constructor(props){
  super(props)
  this.state={
    productList:[]
  }
}
componentDidMount(){

  const db = wx.cloud.database()
  const productList = db.collection('productList')
  productList.get().then(res=>{
    console.log(res,'---');
    this.setState({
      productList:res.data
    })
  })
console.log(2,'productList');


}
handleJumpToDetail(id){
  Taro.navigateTo({
    url:'/pages/product/productDetail?id='+id
  })
}
  render(){
  
    console.log(this,'this');

    const { productList } = this.state
    return (
      <View className='productList'>
          {productList.map(item=>{
            if(item.id){
              return   <View className="productItem" onClick={this.handleJumpToDetail.bind(this,item.id)}>
              <Image src={item.thumb} className="productThumb"></Image>
              <View className="productTitle"> {item.title}</View>
              <View className="productDesc"> {item.desc}</View>
            </View>
            }

          })}
        
        </View>
    )
  }

}
