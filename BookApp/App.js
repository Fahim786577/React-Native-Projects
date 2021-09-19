import React from 'react';
import { StyleSheet, Text, View ,FlatList} from 'react-native';
import MainTab from './Tabs/MainTab';
import react from 'react';

export default function App() {

  return (
    <MainTab/>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#31304C',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
