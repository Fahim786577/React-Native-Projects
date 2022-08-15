import React ,{useState}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import GameScreen from './Screens/GameScreen';
import GuessScreen from './Screens/GuessScreen';
import GameOverScreen from './Screens/GameOverSceen';
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [rounds,setrounds] = useState(0);
  const NewGame = () =>{
    setrounds(0);
    setUserNumber(null);

  };
  const startGameHandler = (userSelection) =>{
    setUserNumber(userSelection);
  };

  const OnGameOver = (turns) =>{
    setrounds(turns);
  };
  let content =  <GameScreen onStartGame={startGameHandler} />;;
  //(userNumber) =>setUserNumber(userNumber)
  if (userNumber && rounds == 0){
    content = <GuessScreen userChoice = {userNumber} OnGameOver = {OnGameOver}/>;
  }else if(rounds>0){
    content = <GameOverScreen chances = {rounds} StartNewGame = {NewGame} guessedNumber = {userNumber}/>;
  }
  return (
    <View style={styles.container}>
      <Header title = "Welcome"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
