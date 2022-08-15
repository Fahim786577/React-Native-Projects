import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';
const Header = props => {
    return (
        <View style={styles.greet}>
          <Text style={styles.textStyle}>{props.title}</Text>
      </View>

    ); 
};

export default Header;
const styles = StyleSheet.create({
    greet:{
        backgroundColor: Colors.headerColor,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        height:90,
      },
      textStyle:{fontSize:20}

});