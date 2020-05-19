import React, { Component } from 'react';
import { Button, View, Text,StyleSheet, TouchableOpacity } from 'react-native';


class HomeNavigation extends Component {
   handleClick= (i)=>{
    if(i.position==0)
    this.props.navigate('Home')
    else if(i.position==1)
    this.props.navigate('Events')
    else
    this.props.navigate('Ministries')
  } 
 

  render() {
    
    return <View style={styles.container}>
      {this.props.items.map((v,i)=><TouchableOpacity onPress={(e)=>{e.position=i;this.handleClick(e)}} style={{...styles.item,backgroundColor:i===this.props.position?'rgb(0,200,0)':'rgb(220,220,220)'}}
      ><Text  style={{color:i===this.props.position?'white':'black'}}>{v}</Text></TouchableOpacity>)}
    </View>
  }
}
const styles= {
container:{
backgroundColor:'white',
flex:1,
flexDirection:'row',
justifyContent:'space-evenly',
alignItems:'center'
},
item:{
    backgroundColor:'rgb(220,220,220)',
    padding:10,
    borderRadius:16
}

}
export default HomeNavigation;