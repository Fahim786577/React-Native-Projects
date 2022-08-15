import React ,{useState,useRef} from 'react';
import { StyleSheet, Text, View,Button} from 'react-native';

const GameOverScreen = props =>{
    return (
        <View style={styles.screen}>
            <Text>Game Over.....</Text>
            <Text>It took {props.chances} turns</Text>
            <Text>The Number is {props.chances} turns</Text>
            <Button title="New Game" onPress = {props.StartNewGame}/>
        </View>
        );
};

export default GameOverScreen;
const styles = StyleSheet.create({
    screen:{justifyContent:'center',alignItems:'center'}
});
  