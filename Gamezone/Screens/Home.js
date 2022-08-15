import React ,{useState} from 'react';
import { StyleSheet, Text, View ,FlatList,TouchableOpacity} from 'react-native';
import Card from '../Components/Card';

export default function Home({navigation}) {
    const [reviews,setreviews] = useState([
        {title:'Zelda,Breath of Fire',rating: 5 ,body:'lorem ipsum',key:'1'},
        {title:'Gotta Catch em all(again)',rating: 4 ,body:'lorem ipsum',key:'2'},
        {title:'Not so "Final" Fantasy',rating: 3 ,body:'lorem ipsum',key:'3'}
    ]);
    const renderData = ({item}) =>(
        <TouchableOpacity activeOpacity={0.8} onPress = {() => navigation.navigate('ReviewDetails',item)}>
            <Card style={styles.cardStyle}>
                <View style={styles.cardStyle}>
                    <Text>{item.title}</Text>
                </View>
            </Card>
        </TouchableOpacity>
    )
    return (
        <View>
            <FlatList
                    data = {reviews}
                    renderItem = {renderData}
                    keyExtractor = {(item) => {item.key}}
                />
        </View>
    );
                
};

const styles = StyleSheet.create({
    cardStyle : {
        marginVertical:5
    }
});