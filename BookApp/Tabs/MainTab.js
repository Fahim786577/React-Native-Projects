import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons,FontAwesome5,FontAwesome,MaterialIcons} from '@expo/vector-icons';
import HomeStack from './HomeStack';
import Downloads from '../Screens/Downloads';
import Me from '../Screens/Me';
import Explore from '../Screens/Explore';

const Tab = createBottomTabNavigator();
const MainTab = () => {
    
    return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Library') {//Library
            color = focused? 'black':'white'
            iconName = <MaterialCommunityIcons name="bookshelf" size={24} color={color} />
          }else if (route.name === 'Bookshelf') {//Bookshelf
            color = focused? 'black':'white'  
            iconName = <FontAwesome5 name="book-open" size={24} color={color} />
          }else if (route.name === 'Explore') {//Explore
            color = focused? 'black':'white'  
            iconName = <MaterialIcons name="explore" size={24} color = {color} />
          }else if (route.name === 'Me') {//user
            color = focused? 'black':'white'  
            iconName = <FontAwesome name="user" size={24} color={color} />
          }

          // You can return any component that you like here!
          return iconName;
        },
      })}
      tabBarOptions = {{  
        activeTintColor: 'grey',
        inactiveTintColor: 'white',
        labelStyle:{fontSize:14},
          style:{
              backgroundColor:'#4F4D4D',
              shadowColor:'transparent',
              elevation: 0,
              shadowOpacity: 0,
              borderTopWidth:0
              
          }
      }}>
        <Tab.Screen name="Library" component={HomeStack} />
        <Tab.Screen name="Bookshelf" component={Downloads} />   
        <Tab.Screen name="Explore" component={Explore} />     
        <Tab.Screen name="Me" component={Me} />
      </Tab.Navigator>
    </NavigationContainer>
    );
};

export default MainTab;
  
