import React ,{useState}from 'react';
import { StyleSheet, Text, View ,Button,TouchableWithoutFeedback,Keyboard,Alert} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import Input from '../components/Input';
import NumberBox from '../components/NumberBox';
const GameScreen = props =>{
    const [enteredValue, SetenteredValue] = useState('');
    const [confirmation,SetConfirmation] = useState(false);
    const [selectedValue,SetselectedValue] = useState('');
    const inputHandler = inputvalue =>{
        SetenteredValue(inputvalue.replace(/[^0-9]/g, ''));
    };
    const Reset = ()=>{
        SetenteredValue('');
        SetConfirmation(false)
    };
    const Confirmed = () =>{
        chosenValue = parseInt(enteredValue);
        if (isNaN(chosenValue) || chosenValue<=0){
            Alert.alert(
                "Invalid Input",
                "Give a value between 1 and 99",
                [
                  {text: "Okay",style:'destructive',onPress: Reset}]
              );
            return;
        }
        SetConfirmation(true);
        SetselectedValue(chosenValue);
        SetenteredValue('');
    };
    let outputValue;
    if(confirmation){
        outputValue = (
        <Card style={styles.outputStyle}>
            <Text >Your selected number</Text>
            <NumberBox>{selectedValue}</NumberBox>
            <Button title = "Start Game" onPress = {() => props.onStartGame(selectedValue)}/>
        </Card>);
    };
    return (
        <TouchableWithoutFeedback onPress = {()=>{
            Keyboard.dismiss();
        }}>
        <View style = {styles.screen}>
            <Text > Start a new Game </Text>
            <Card style={styles.inputContainer}>
                <Text style={{fontSize:15}}> Select a number </Text>
                <Input style={styles.inputStyle} 
             style={{fontSize:20,fontWeight:'700'}}   autoCorrect= {false} 
                blurOnSubmit ={true} 
                keyboardType='number-pad'
                maxLength = {2}
                onChangeText = {inputHandler}
                value = {enteredValue}/>
                <View style = {styles.btncontainer}>
                    <View style = {styles.btn}><Button title = 'Reset' onPress = {Reset} color={Colors.resetColor}/></View>
                    <View style = {styles.btn}><Button title = 'Confirm' onPress = {Confirmed} color={Colors.startColor}/></View>
                </View>
            </Card>
            {outputValue}
        </View>
        </TouchableWithoutFeedback>
    );
};

export default GameScreen;
const styles = StyleSheet.create({
    screen:{justifyContent:'center',alignItems:'center'},
    inputContainer:{
        width:500,
        maxWidth:'80%',
        alignItems:'center',
        marginVertical:20,
},    
    btncontainer:{flexDirection:'row',justifyContent:'space-between',width:'80%',marginVertical:20},
    inputStyle:{width:50,textAlign:'center'},
    btn:{width:80},
    outputStyle:{justifyContent:'center',alignItems:'center',padding:30},
    outputText:{borderWidth:1,
        borderColor:Colors.startColor,
        width:'60%',
        borderRadius:10,
        alignItems:'center',
        padding:10,
        margin:20}
});
