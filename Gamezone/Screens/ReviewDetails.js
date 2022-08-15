import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ReviewDetails({navigation}) {
    return (
        <View style={styles.ReviewContainer}>
            <Text style={styles.TextStyle}>{navigation.getParam('title')}</Text>
            <Text style={styles.TextStyle}>{navigation.getParam('rating')}</Text>
            <Text style={styles.TextStyle}>{navigation.getParam('body')}</Text>        
        </View>
    );
};

const styles = StyleSheet.create({
    ReviewContainer : {
        padding:10,
    },
    TextStyle:{
        fontSize:18,
    }
});