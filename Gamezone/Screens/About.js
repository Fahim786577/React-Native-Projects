import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function About() {
    return (
        <View style={styles.ReviewContainer}>
            <Text>About us</Text>
                  
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