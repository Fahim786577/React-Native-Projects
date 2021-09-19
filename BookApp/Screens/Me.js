import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,FlatList,Button} from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export default function Me(){
  const options = [
    {title:'Favourites',icon :'favorite-outline'},
    {title:'Rate us',icon :'star-rate'},
    {title:'Share',icon :'share'},
    {title:'Help Center',icon :'help-outline'},
    {title:'About us',icon :'info-outline'}
  ]

    return (
    <View style={styles.recommend}>
          <View style = {{marginTop:40,marginLeft:10}}>
            <Text style={{color:'#fff',fontSize:25,fontWeight:'bold'}}> More </Text>
        </View>
        <View style = {styles.card}>
            <FlatList
                style = {{width:'100%'}}
                data = {options}
                showsVerticalScrollIndicator = {false}
                renderItem = {(Itemdata) =>{
                    return (
                        <TouchableOpacity activeOpacity = {0.8}>
                            <View style = {{
                                  borderBottomWidth:1,
                                  borderBottomColor:'grey',
                                  padding:10,
                                  paddingBottom:20,
                                  flexDirection:'row',
                                  justifyContent:'space-between',
                                  width:'100%'}}>
                                <MaterialIcons name = {Itemdata.item.icon} size={26} color="white"/>
                                <View style = {{marginLeft:30,justifyContent:'flex-start',alignItems:'flex-start',width:'90%'}}>
                                  <Text style = {{color:'#fff',fontSize:22}}>{Itemdata.item.title}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    );
                }}
                keyExtractor = {(item,index) =>{
                    return Math.random().toString()
                }}
            />
        </View>
        
          <TouchableOpacity activeOpacity = {0.4} style = {styles.ButtonStyle}>
            <FontAwesome5 name="crown" size={20} color="#FFD700" />
            <Text style = {{color:'#fff',fontSize:20,paddingLeft:60}} >Go Premium</Text>
          </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
    recommend:{
      flex: 1,
      backgroundColor: '#4F4D4D',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    card: {
      marginTop:20,
      marginLeft:10,
      backgroundColor:'#474646',
      width:375,height:300,
      justifyContent:'space-evenly',
      alignContent:'space-between',
    },
    ButtonStyle: {
      flexDirection:'row',
      backgroundColor:'#5C5CFF',
      padding:15,
      width:290,
      marginLeft:50, 
      marginTop:50,
      borderRadius:30,
    }
  });
  