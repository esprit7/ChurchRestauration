import React, { Component } from 'react';
import { Button, View, Text,StyleSheet, FlatList} from 'react-native';
import HomeNavigation from '../components/HomeNavigation'
import Header from '../components/Header'
import HomeItem from '../components/HomeItem'
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Contacts extends Component {
   state = {
      telephone: '',
      name: '',
      message: ''
   }
   handleTelephone = (text) => {
      this.setState({ Telephone: text })
   }
   handleName = (text) => {
    this.setState({ Name: text })
 }
   handleMessage = (text) => {
      this.setState({ Message: text })
   }
   login = (Telephone, pass) => {
      alert('Telephone: ' + Telephone + ' Message: ' + pass)
   }
   render() {
      return (
        <View style={styles.container}>
        <View style={styles.header}>
          <Header title="Church Restauration"/>
        </View></View>
        <View style={styles.navigation}>
          <HomeNavigation navigate={this.props.navigation.navigate} items={["Accueil","Enseignement","Ministries"]} position={1}/>
        </View>
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Telephone"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleTelephone}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Message"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleMessage}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.Telephone, this.state.Message)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default Contacts

const styles = StyleSheet.create({
   container: {
      paddingTop: 23,
      backgroundColor:'white',
      flex:1
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
   ,
header:{
  backgroundColor:'black',
  flex:1
},
navigation:{
  backgroundColor:'yellow',
  flex:1
},
content:{
  padding:15,
  flex:4
}
})