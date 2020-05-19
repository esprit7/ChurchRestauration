import React from 'react';
import {View ,Button,StyleSheet} from 'react-native';
export default function MonBouton(props){
    return  <View style={styles.button}><Button title={props.title}/></View>
    }
    const styles = StyleSheet.create({
        button:{
          flex:0,
          marginRight:10
        }})