import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../views/pages/Home'
import Events from '../views/pages/Events'
import Ministries from '../views/pages/Ministries'
import Book from '../views/pages/Book'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {DrawerContentScrollView,DrawerItemList,DrawerItem} from '@react-navigation/drawer';
import Adoration from '../views/pages/Adoration'
import Testimony from '../views/pages/Testimony'
import About from '../views/pages/About'

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Churc"/>
    </DrawerContentScrollView>
  );
}
const Drawer = createDrawerNavigator();

const StackNavigator = createStackNavigator()
const StackNavigation = ()=><StackNavigator.Navigator>
<StackNavigator.Screen name="Home" component={Home}/>
<StackNavigator.Screen name="Events" component={Events}/>
<StackNavigator.Screen name="Ministries" component={Ministries}/>
<StackNavigator.Screen name="Book" component={Book}/>
<StackNavigator.Screen name="Adoration" component={Adoration}/>
<StackNavigator.Screen name="Testimony" component={Testimony}/>
{/* <StackNavigator.Screen name="About" component={About}/> */}
{/* <StackNavigator.Screen name="Contact" component={Contact}/> */}
</StackNavigator.Navigator>
function MyDrawer() {
    return (
      
      <Drawer.Navigator >
        <Drawer.Screen name="Home" component={StackNavigation} />
        <Drawer.Screen name="Events" component={Events} />
        <Drawer.Screen name="Ministries" component={Ministries} />
        <Drawer.Screen name="Book" component={Book} />
        <Drawer.Screen name="Adoration" component={Adoration} />
        <Drawer.Screen name="Testimony" component={Testimony} />
        {/* <Drawer.Screen name="About" component={About} /> */}
        {/* <Drawer.Screen name="Contact" component={Contact} /> */}
        
      </Drawer.Navigator>
    );
  }
const Navigation = ()=><NavigationContainer>
    <MyDrawer/>
</NavigationContainer>
export default  Navigation