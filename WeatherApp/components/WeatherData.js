import React ,{useState,useEffect}from 'react';
import { ActivityIndicator,StyleSheet, Text, View ,Image} from 'react-native';
import * as Location from 'expo-location';
import ForecastDetails from './ForecastDetails';

//const APIKEY = 'cc4448d18673eec19b61be77f9a255f6';
const API_KEY = 'aedd18b65cdecda2bc00290577ebcc8f';
const OneCall = 'https://api.openweathermap.org/data/2.5/onecall?'

export default function WeatherData (){
  const [errormessage,Seterrormessage] = useState(null);
  const [Locations,setLocations] = useState({});
  const [currentWeather, setCurrentWeather] = useState(null);
  const [unitsSystem, setUnitsSystem] = useState('metric');
  const [timeout, settimeout] = useState(0);  
  useEffect(()=>{
    load()
  },[unitsSystem]);

  async function load (){
    try{
      let { status } = await Location.requestForegroundPermissionsAsync()

            if (status !== 'granted') {
                Seterrormessage('Access to location is needed to run the app')
                return
            }
             
            const location = await Location.getLastKnownPositionAsync({accuracy: 6,});
            const { latitude, longitude } = location.coords
            const forecastURL = `${OneCall}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&exclude=minutely,alerts&appid=${API_KEY}`
            
            const forecastResponse = await fetch(forecastURL)
            const forecastResult = await forecastResponse.json()
            //console.log(forecastResult)
            setLocations(location.coords)

            if (forecastResponse.ok) {
              setCurrentWeather(forecastResult)
          } else {
            Seterrormessage(forecastResponse.message)
          }
            
            
    }catch(error){
      Seterrormessage(error.message);
      console.log(error.message)
    }
    
  };

  //let indicator = <ActivityIndicator size="large" color="#0000ff" />
  
  if (currentWeather){
      return (
        <View style={styles.container}>
          <ForecastDetails  currentWeather = {currentWeather} currentLocation = {Locations}/>
        </View>
      )
  }else{
      setTimeout(() => {
        settimeout(1)
      }, 20000)
      if (timeout <1){
        return (
          <View style={styles.container}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )
      }else{
        return (
          <View style={styles.container}>
            <Image style= {{width:100,height:110}} source = {require('../assets/no-connection.png')}/>
            <Text>Sorry no connection....</Text>
          </View>
        )
      }
      
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  