import React, { Component, useState } from 'react'
import Taro, { Config,Current } from '@tarojs/taro'
import { View, Text,Swiper, SwiperItem,
   Icon,ScrollView,Image   } from '@tarojs/components'
   import './productDetail.less'
export default class ProductDetail extends Component {
constructor(props){
  super(props)
  this.state={
    data:{
      banner:[],
      desc:'',
      content:'',
      title:''
    }
  }
}
componentDidMount(){
  const id=Current.router.params.id
  const db = wx.cloud.database()
  const productDetail = db.collection('productDetail')
  console.log(productDetail,'productDetail');
  
  // console.log(productDetail.where({
  //   _id:'b00064a760b33c251c68a7d371665203'
  //     }),'=====');
  
      productDetail.where({
          _id:id
            }).get().then(res=>{
    console.log(res,'---');
    this.setState({
      data:res.data[0]
    })
  })
  console.log('test');
  // try {
  //   productDetail.add({
  //     data:{
  //   banner:['cloud://leidaibo-2guczo71ec52d1ae.6c65-leidaibo-2guczo71ec52d1ae-1303852253/image/productDetail/m47w.jpg'],
  //   title:'电磁加热导热油炉',
  //   desc:'高速智能油温机是一种以电磁为加热源、导热油为热载体的新型导热油锅炉。高速智能油温机利用循环油泵强制液相循环，将热能输送给用热设备后，返回重新加热，实现热量连续传递，使被加热物温度升高，达到加热工艺要求。高速智能油温机使用电热管和电磁双重加热系统，充分利用两种加热方式的优势，并在整体结构、控制系统集成方面经过科学严谨创新和实验验证，在使用寿命、安全性、加热效率、热利用率等方面均显著优势。',
  //   content:`
  //   <div> <image style="width:100%;" src="cloud://leidaibo-2guczo71ec52d1ae.6c65-leidaibo-2guczo71ec52d1ae-1303852253/image/productDetail/120.png" ></image> 

  //   <p>高速智能油温机是一种以电磁为加热源、导热油为热载体的新型导热油锅炉。本公司电磁加热节能产品是市场上普通电热管与电磁加热基础上进行升级产品。</p>
  //   <p>最大的优点：安全、高效率、运行费用低、无需专业人员上门安装、热量更均匀、无噪音污染、省时省力等特点。 </p>

  //   </div>
  //   `,
  //   },
  //   success: function (res) {
  //     // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
  //     console.log('--------------',res)
  //   },
  //   fail:err=>{
  //     console.log(err);
      
  //   }
  //   })
  // } catch (error) {
  //   console.log(error,'---2222');
    
  // }



}
  render(){
    console.log(this,'this');
    const { data } = this.state
    return (
      <View className='productDetail'>
        <Swiper className='bannerStyle'>
          {
            data.banner&&data.banner.map(item=>(

           
            <SwiperItem style={{display:'flex',alignItems:'center'}}>

              <Image src={item} style={{height:'100%'}}></Image>
            </SwiperItem>
             )
            )
          }
      
        </Swiper>
        <View className='titleStyle'>{data.title}</View>
        <View className="descStyle">
          <View>产品描述</View>
          <View> {data.desc} </View>
          </View>
          <View className='contentStyle'>
            <View> 产品详情</View>
            <View dangerouslySetInnerHTML={{ __html:data.content  }}></View>

          </View>
        
        </View>

    )
  }

}
