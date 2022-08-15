import { createStackNavigator } from 'react-navigation-stack';
import About from '../Screens/About';
import Header from '../Components/Header';
import React from 'react';
const screens = {
  About: {
    screen: About,
    navigationOptions:({navigation}) => {
        return {
          headerTitle : () => <Header navigation = {navigation} title = "About Us"/>
        };
        
      }
  },
}
const defaultStyles = {
  defaultNavigationOptions:{
    headerStyle:{backgroundColor:'#eee'},
  }
}
const AboutStack = createStackNavigator(screens,defaultStyles);
  
export default AboutStack;