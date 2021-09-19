import React from 'react';
import { StyleSheet,View,Image,Text,TouchableWithoutFeedback} from 'react-native';
const Card = ({Someleft,SomeRight,Ontouch}) =>{
    const left = Someleft.map((item) =>(
        <View key = {Math.random().toString()} style = {{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
            <TouchableWithoutFeedback onPress = {()=>Ontouch(item)}>
                <Image source = {item.path}  style = {styles.ImageStyle}/> 
            </TouchableWithoutFeedback>    
                <View style={{width:'80%',maxWidth:90,paddingLeft:5}}>
                    <Text style={styles.TextStyle} numberOfLines = {2}>{item.title}</Text>      
                </View>
            
        </View>
    ));

    const right = SomeRight.map((item) =>(
        <View key = {Math.random().toString()} style = {{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
            <TouchableWithoutFeedback onPress = {()=>Ontouch(item)}>
                <Image source = {item.path}  style = {styles.ImageStyle}/> 
            </TouchableWithoutFeedback>
            <View style={{width:'80%',maxWidth:80,paddingLeft:5}}>
                <Text style={styles.TextStyle} numberOfLines = {2}>{item.title}</Text>      
            </View>
        </View>
    ));

    return (
    <View style={styles.card}>
        <View style = {{marginLeft:80}}>{left}</View>
        <View>{right}</View>
    </View>
    
    );// 
};
export default Card;

const styles = StyleSheet.create({
    card: {
      flexDirection:'row',
      marginTop:20,
      marginLeft:10,
      backgroundColor:'#474646',
      width:375,height:475,
      justifyContent:'space-evenly',
      alignContent:'space-between',
    },
    ImageStyle : {
        width:50,
        height:80,
        marginTop:30,
        marginLeft:150
    },
    TextStyle:{
        color:"#fff",
        fontSize:12,
        fontWeight:'bold'
      }
  });
  
