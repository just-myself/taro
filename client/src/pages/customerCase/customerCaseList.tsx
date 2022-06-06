import React, { Component, useState } from 'react'
import Taro, { Config,Current } from '@tarojs/taro'
import { View, Text,Swiper, SwiperItem,
   Icon,ScrollView,Image   } from '@tarojs/components'
   import './customerCaseList.less'
import jump from '../../utils/jump'
console.log(jump,'---jump');

export default class CustomerCaseList extends Component {
constructor(props){
  super(props)
  this.state={
      customerCaseList:[]
    
  }
}
componentDidMount(){

  const db = wx.cloud.database()
  const customerCaseList = db.collection('customerCaseList')
  console.log(customerCaseList,'customerCaseList');
  customerCaseList.get().then(res=>{
    console.log(res,'---');
    this.setState({
      customerCaseList:res.data
    })
  }).catch(err=>{
    console.log(err);
    
  })

 

}
handleJumpItem(url){
  console.log('url',url);
  
  // jump({url})

}
  render(){
    const { customerCaseList } = this.state

    return (
      <View className="customerCase">
        <Image src="cloud://company-project-1-7e2ye1ae7ef6e7.636f-company-project-1-7e2ye1ae7ef6e7-1306309279/customerCase/fo4g.jpg" className="banner" mode="widthFix"></Image>

    
      <View className='customerCaseList'>
        {customerCaseList.map(item=>{
          return <View className='customerCaseItem' onClick={this.handleJumpItem.bind(this,item.url)}>
              <Image src={item.thumb} ></Image>
              <View className="itemContent"> 
              <View>{item.title} </View>
              <View>{item.desc} </View>
              </View>
            </View>
        })}
        
        </View>
        </View>
    )
  }

}
