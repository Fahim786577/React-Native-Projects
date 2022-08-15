import React ,{useState,useRef,useEffect} from 'react';
import { StyleSheet, Text, View,Button ,Alert} from 'react-native';
import Colors from '../constants/Colors';
import Card from '../components/Card';
import NumberBox from '../components/NumberBox';

const GenRandomNum = (min,max,exclude) =>{
    min = Math.ceil(min);
    max = Math.floor(max);
    const randNum = Math.floor(Math.random()*(max-min)) + min;
    if (randNum == exclude){
        return GenRandomNum(min,max,exclude);
    } else{
        return randNum;
    }
};
const GuessScreen = props =>{
    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    const [guessNum,setGuessNum] = useState(GenRandomNum(1,100,props.userChoice));
    const [rounds,setrounds] = useState(0);
    const {userChoice,OnGameOver} = props;
    useEffect(()=>{
        if(guessNum === userChoice){
            OnGameOver(rounds);
        }
    },[userChoice,guessNum,OnGameOver]); 
    const nextGuess = direction =>{
        if ((direction === 'lower' && guessNum < props.userChoice) || 
        (direction === 'greater' && guessNum > props.userChoice)){
            Alert.alert(
                "Wait a minute",
                "You sure it's "+ direction+" ?",
                [
                  {text: "Sorry",style:'cancel'}]
              );
            return;
        }
        if (direction === 'lower'){
            currentHigh.current = guessNum;         
        }else{
            currentLow.current = guessNum;
        }
      const NextGuess = GenRandomNum(currentLow.current,currentHigh.current,guessNum); 
      setGuessNum(NextGuess);  
      setrounds(rounds+1);
    };
    
    return(
        <Card style={styles.outputStyle}>
            <Text style={{fontSize:18}}>Opponent's Guess</Text>
            <NumberBox>{guessNum}</NumberBox>
            <View style = {styles.buttonContainer}>
                <Button title="Lower" onPress={nextGuess.bind(this,'lower')}/>
                <Button title="Greater" onPress={nextGuess.bind(this,'greater')}/>
            </View>
        </Card>    
    );
};

export default GuessScreen;
const styles = StyleSheet.create({
    outputStyle:{width:'60%',justifyContent:'space-evenly',alignItems:'center',padding:30,marginTop:20},
    buttonContainer:{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'90%',marginVertical:20}
    
});