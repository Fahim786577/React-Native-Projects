import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

const NumberBox = props =>{
    return(
        <View style={styles.outputText}>
                <Text style={{fontSize:20,color:Colors.resetColor}}>{props.children}</Text>
        </View>
    );
};

export default NumberBox;
const styles = StyleSheet.create({
    outputText:{borderWidth:1,
        borderColor:Colors.startColor,
        width:'60%',
        borderRadius:10,
        alignItems:'center',
        padding:10,
        margin:20}
    
});