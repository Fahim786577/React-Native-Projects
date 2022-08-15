import React from 'react';
import { StyleSheet, Text, View } from 'react-native'; 
import {MaterialIcons} from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function Header ({navigation,title}){
    const openMenu = () => {
        navigation.openDrawer();
    };

    return (
        <View style={styles.header}>
            <MaterialIcons name = 'menu' size = {28} onPress = {openMenu} style = {styles.icon}/>
            <Text style={styles.TextStyle}>{ title }</Text>
        </View>
    );
    
};

const styles = StyleSheet.create({
    header: {
      flexDirection:'row',
      width:'100%',
      height:'100%',
      alignItems:'center',
      justifyContent:'center'
    },
    TextStyle:{
        fontWeight:'bold',
        fontSize:20,
        color:'#333',
        letterSpacing: 1,
    },
    icon:{
        position :'absolute',
        left :16,
    }

  });
  