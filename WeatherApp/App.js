import React from 'react';
import { StyleSheet } from 'react-native';
import HomeStack from './Stack/Homestack';

export default function App() {
  
  return (  
    <HomeStack/>
  )
     
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
