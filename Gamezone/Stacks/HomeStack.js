import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import Home from '../Screens/Home';
import ReviewDetails from '../Screens/ReviewDetails';
import Header from '../Components/Header';
import React from 'react';
const screens = {
  Home: {
    screen: Home,
    navigationOptions:({navigation}) => {
      return {
        headerTitle : () => <Header navigation = {navigation} title = "Home"/>
      };
      
    },
  },  
  ReviewDetails:{
    screen:ReviewDetails,
    navigationOptions: {
      title : "Review",
    },
  }
}
const defaultStyles = {
  defaultNavigationOptions:{
    headerStyle:{backgroundColor:'#eee'},
  }
}
const HomeStack = createStackNavigator(screens,defaultStyles);
  
export default HomeStack;
