import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Library from '../Screens/Library';
import Details from '../Screens/Details';
const Stack = createStackNavigator();

function HomeStack() {
  return (
    
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
      headerStyle: {
        backgroundColor: '#31304C',
        shadowColor:'transparent',
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
      <Stack.Screen name="Library" component={Library}/>
      <Stack.Screen name="Details" component={Details}/>
  </Stack.Navigator>
    
  );
}

export default HomeStack;
