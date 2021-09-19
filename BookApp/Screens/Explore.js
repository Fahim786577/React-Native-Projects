import React from 'react';
import { StyleSheet, Text, View ,FlatList,TouchableOpacity} from 'react-native';
import { GenreList } from '../data/books';

export default function Explore(){
    //const list  = ['Adventure','Action']
    return (
    <View style={styles.recommend}>
        <View style = {{marginTop:40,marginLeft:10}}>
            <Text style={{color:'#fff',fontSize:25,fontWeight:'bold'}}>Genres</Text>
        </View>

        <FlatList
            style = {{width:'100%'}}
            data = {GenreList}
            showsVerticalScrollIndicator = {false}
            renderItem = {(Itemdata) =>{
                return (
                    <TouchableOpacity activeOpacity = {0.8}>
                        <View style = {{padding:15,borderBottomColor:'grey',borderBottomWidth:1}}>
                            <Text style = {{color:'#fff',fontSize:14}}>{Itemdata.item}</Text>
                        </View>
                    </TouchableOpacity>
                );
            }}
            keyExtractor = {(index) =>{
                return index.toString()
            }}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    recommend:{
      flex: 1,
      backgroundColor: '#4F4D4D',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    }
  });
  