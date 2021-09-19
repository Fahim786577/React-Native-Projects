import React from 'react';
import { StyleSheet, Text, View,Image,FlatList,TouchableWithoutFeedback} from 'react-native';
import { Booklist1,Booklist2 ,Genresrow1,Genresrow2,NewReleases,CardImages,BestUnknown} from '../data/books';
import { Feather } from '@expo/vector-icons';
import Card from './Card';
export default function Library({navigation}){
  const [reviews,setreviews]= React.useState(Booklist1);
  const [reviews2,setreviews2]= React.useState(Booklist2);
  /* **********************Render Functions ****************************/

  function onTouch (item){
    navigation.navigate('Details',item)
    //console.log(item)
  }
  const renderData = ({item}) =>{
    return (

      <View key = {item.id}>
        <TouchableWithoutFeedback onPress = {onTouch.bind(this,item)}>        
          <Image source = {item.path} style={styles.imageStyle}/>  
        </TouchableWithoutFeedback>
          <View style={{width:'80%',maxWidth:90}}>
            <Text style={styles.TextStyle} numberOfLines = {2}>{item.title}</Text>      
          </View>        
      </View>
    );
    
  }
  const RenderGenre = ({item}) =>{
    return (
      <TouchableWithoutFeedback onPress = {onTouch.bind(this,item)}>        
        <View style={{paddingRight:10}}>
          <Image source = {item.path} style = {{width:100,height:50}}/>  
        </View>
      </TouchableWithoutFeedback>          
    );
  };
  
  const RenderNew = ({item}) =>{
    return (
      <TouchableWithoutFeedback onPress = {onTouch.bind(this,item)}>        
        <View style={{paddingRight:10}}>
          <Image source = {item.path} style = {{width:100,height:150}}/>  
        </View>
      </TouchableWithoutFeedback>  
    );
  };
  // *************************End of render function part*********************************
    return (
    <View style={styles.container}>
      
      {/* Header Part*/}
      
      <View style = {{width:'90%',flexDirection:'row',justifyContent:'space-between',paddingTop:40}}>
        <Text style={{...styles.TextStyle,...{fontSize:25}}}>Free books</Text>  
        <Feather name="search" size={24} color="white" />
      </View>

      {/* Recommendation Part*/}
      <FlatList 
        ListHeaderComponent = {
          <>
                <View style={{width:'90%',height:'12%',paddingLeft:15}}>
                <Text style={{...styles.TextStyle,...{fontSize:20,marginTop:10}}}>You might like</Text>
                <View style={styles.row1}>
                  <FlatList 
                    data = {reviews}
                    renderItem = {renderData}
                    keyExtractor = {(item,index) => {
                      return item.id;
                    }}
                    horizontal = {true}
                    scrollEnabled={false}
                    key = {Math.random().toString()}/> 
                </View>
                <View style={styles.row2}>
                  <FlatList 
                    data = {reviews2}
                    renderItem = {renderData}
                    keyExtractor = {(item,index) => {
                      return item.id;
                    }}
                    horizontal = {true}
                    key = {Math.random().toString()}/> 
                </View>
              </View>

              {/* Genre Part */}
              
              <View style={{marginTop:50,marginBottom:10,marginLeft:10,flexDirection:'row',justifyContent:'space-between',width:'75%'}}>
                  <Text style = {{...styles.TextStyle,...{fontSize:20}}}>Genres</Text>
                  <Text style = {{...styles.TextStyle,...{fontSize:15,color:'lightblue'}}}>More</Text>
              </View>
              <View style = {{marginLeft:10}}>
                <FlatList 
                      contentContainerStyle ={{paddingRight: 100}}
                      data = {Genresrow1}
                      renderItem = {RenderGenre}
                      horizontal = {true}
                      showsVerticalScrollIndicator = {false}
                      keyExtractor = {(item,index) => {
                        return index.toString();
                      }}/> 
                <FlatList 
                      contentContainerStyle ={{paddingRight: 100}}
                      style = {{paddingTop:10}}
                      data = {Genresrow2}
                      renderItem = {RenderGenre}
                      horizontal = {true}
                      showsVerticalScrollIndicator = {false}
                      keyExtractor = {(item,index) => {
                        return index.toString();
                      }}/>       
                    </View>

              {/* New Releases */}
              <View style = {{marginTop:30,marginLeft:10}}>
              <View style = {{flexDirection:'row',justifyContent:'space-between',width:'75%'}}>  
                <Text style = {{...styles.TextStyle,...{fontSize:20,marginBottom:10}}}>New Releases</Text>
                <Text style = {{...styles.TextStyle,...{fontSize:15,color:'lightblue'}}}>More</Text>      
              </View>
                <FlatList 
                  contentContainerStyle ={{paddingRight: 100}}
                  data = {NewReleases}
                  renderItem = {RenderNew}
                  horizontal = {true}
                  showsVerticalScrollIndicator = {false}
                  keyExtractor = {(item,index) => {
                    return index.toString();
                  }}/> 
              </View>
              
              {/* Someone In Love Section */}
              <View style = {{marginTop:30,marginLeft:10,flexDirection:'row',justifyContent:'space-between',width:'75%'}}>  
                  <Text style = {{...styles.TextStyle,...{fontSize:20}}}>Someone In Love</Text>
                  <Text style = {{...styles.TextStyle,...{fontSize:15,color:'lightblue'}}}>More</Text>      
              </View>
              <Card Someleft = {CardImages.SomeoneInLoveLeft} SomeRight = {CardImages.SomeoneInLoveRight} Ontouch = {onTouch}/>

              {/* Must Known books yet unknown Section */}    
              <View style = {{marginTop:30,marginLeft:10}}>
                <View style = {{flexDirection:'row',justifyContent:'space-between',width:'75%'}}>  
                  <Text style = {{...styles.TextStyle,...{fontSize:20,marginBottom:10}}}>Must Known books yet unknown</Text>
                  <Text style = {{...styles.TextStyle,...{fontSize:15,color:'lightblue'}}}>More</Text>      
                </View>
          
                  <FlatList 
                    contentContainerStyle ={{paddingRight: 100}}
                    
                    data = {BestUnknown}
                    renderItem = {RenderNew}
                    horizontal = {true}
                    showsVerticalScrollIndicator = {false}
                    keyExtractor = {(item,index) => {
                      return index.toString();
                    }}/> 
              </View>   

              {/* Judge a book by its cover Section */}    

              <View style = {{marginTop:30,marginLeft:10,flexDirection:'row',justifyContent:'space-between',width:'75%'}}>  
                  <Text style = {{...styles.TextStyle,...{fontSize:20}}}>Judge a book by its cover</Text>
                  <Text style = {{...styles.TextStyle,...{fontSize:15,color:'lightblue'}}}>More</Text>      
              </View>      
              
              <Card Someleft = {CardImages.JudgeBookCoverLeft} SomeRight = {CardImages.JudgeBookCoverRight} Ontouch = {onTouch}/>

               {/* Good Novels with Regretful heroes Section */}    

              <View style = {{marginTop:30,marginLeft:10,flexDirection:'row',justifyContent:'space-between',width:'75%'}}>  
                  <Text style = {{...styles.TextStyle,...{fontSize:20}}}>Good Novels with Regretful heroes</Text>
                  <Text style = {{...styles.TextStyle,...{fontSize:15,color:'lightblue'}}}>More</Text>      
              </View>      
            
              <Card Someleft = {CardImages.NovelsWithRegretsLeft} SomeRight = {CardImages.NovelsWithRegretsRight} Ontouch = {onTouch}/>
      
          </>

        }
      />
      
    </View>

    );
}; 

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#4F4D4D',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  imageStyle:{
    width:80,
    height:110,
  },
  row1:{
    paddingTop:10,
    flexDirection:'row',
    width:'100%',
    
  },
  row2:{
    paddingTop:10,
    flexDirection:'row',
    width:'100%',
    height:'60%',

  },
  TextStyle:{
    color:"#fff",
    fontSize:12,
    fontWeight:'bold'
  },
});
