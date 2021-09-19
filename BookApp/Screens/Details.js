import React from 'react';
import { StyleSheet, Text, View,Image, ImageBackground, TouchableOpacity, FlatList} from 'react-native';
import { AntDesign,Feather,MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
export default function Details ({navigation,route}){
    const image = route.params.path;
    //console.log(image)
    return(
        <View style = {styles.container}>
                <ImageBackground source={route.params.path} resizeMode="cover" style={styles.image}/>
                    {/* Header Section */}
                    <View style = {styles.headerStyle}>    
                        <TouchableOpacity activeOpacity = {0.4} onPress = {() => navigation.goBack()} >
                            <AntDesign name="arrowleft" size={24} color="black" />
                        </TouchableOpacity>    
                        <View style = {{marginLeft:-20}}>
                            <Text style = {{fontWeight:'bold',fontSize:15}}>{route.params.title}</Text>
                        </View>
                        <TouchableOpacity activeOpacity = {0.4}><Feather name="more-horizontal" size={24} color="black" /></TouchableOpacity>     
                    </View>

                    {/* book Container  */}
                    <View 
                        style = {{
                        justifyContent:'space-between',
                        alignItems:'center',
                        alignSelf:'center',
                        marginTop:50
                    }}
                    >
                        <Image source = {route.params.path}
                                style = {{width:150,height:210}}  
                        /> 
                    {/*********Rating, Rated for, Downloads****************************/}    
                    <View style = {{flexDirection:'row',marginTop:20,marginLeft:35,justifyContent:'space-around',width:'90%'}}>
                        <View style = {{alignItems:'center'}}>
                            <AntDesign name="star" size={24} color="black" style = {{paddingBottom:12}}/>
                            <Text>3.5/5 </Text>
                        </View>
                        <View style = {{borderColor:'black',borderWidth:1,width:'11%',height:35,alignItems:'center'}}> 
                            <View style = {{flexDirection:'row',justifyContent:'center',alignItems:'center',paddingBottom:5}}>
                                <Text style = {{fontSize:24,fontWeight:'bold'}}>16</Text>
                                <Text style = {{fontSize:16,fontWeight:'bold'}}>+</Text>
                            </View>
                            <Text>16+</Text>
                        </View>
                        <View style = {{alignItems:'center'}}>
                            <MaterialCommunityIcons name="download-circle" size={24} color="black" style = {{paddingBottom:12}}/>
                            <Text>2k </Text>
                        </View>
                    </View>
                    {/*** Download button ***/}    
                    <TouchableOpacity activeOpacity = {0.7}>
                        <LinearGradient
                                colors={['#6B4790','#EF509C']}
                                style = {styles.dowload}
                            >    
                            <MaterialCommunityIcons name="download-circle" size={24} color="#eee" style = {{paddingRight:10}}/>
                            <Text style = {{fontSize:18,color:'#fff',marginLeft:-5}}>Download</Text>
                        </LinearGradient> 
                    </TouchableOpacity>                               
                </View>
                {/***************************Description*************************/}
                <View style = {{backgroundColor:'rgba(0, 0, 0, 0.85)',marginTop:39,width:'100%',flex:1}}>
                    <View style = {{padding:5,paddingLeft:10}}>
                        <Text style = {{fontSize:18,color:'#fff',fontWeight:'bold'}}>Description</Text>
                    </View>
                    <FlatList
                        ListHeaderComponent = {
                            <>       
                                <View style = {{padding:10}}> 
                                    <Text style = {{color:'#fff'}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel sapien facilisis, venenatis erat sed, fermentum lorem. 
                                    Donec eget mauris in urna auctor consequat eu id felis. In ut consequat quam. Sed iaculis ac purus at maximus. 
                                    Fusce fringilla dui vel eros bibendum commodo. Cras accumsan maximus est, vitae egestas nisl ultricies quis. Vivamus vestibulum lorem sit amet felis pharetra, et malesuada elit ultricies. 
                                    Aenean luctus eros ut faucibus molestie. Vivamus quis quam consectetur, dictum magna vitae, volutpat metus. 
                                    Nulla rhoncus lacus sit amet velit vulputate congue in vitae enim. Suspendisse elementum est nisi.In euismod finibus mollis. Donec porttitor eget sem sed maximus. 
                                    Vestibulum maximus fringilla ante, sit amet fringilla arcu faucibus sit amet. Nullam tortor nunc, consectetur sit amet tristique finibus, sagittis eu sapien. Integer cursus, dui nec dignissim lobortis, urna nibh imperdiet ipsum, quis laoreet tortor ipsum hendrerit odio. Ut tempus eget ex at placerat. Fusce tristique urna at suscipit commodo. Nullam ac ornare eros, ut venenatis urna. Suspendisse mi lorem, lacinia condimentum odio ut, ultricies egestas justo. Sed et ante justo. Duis feugiat facilisis arcu elementum tincidunt. Aliquam tempus ultrices sapien ornare feugiat. Suspendisse eros leo, bibendum at facilisis nec, malesuada eget urna. Quisque semper urna vitae purus venenatis aliquet at vitae eros. 
                                    Quisque vel leo euismod, congue urna non, imperdiet urna. Etiam ac elit vitae tortor faucibus auctor ac nec nisi.Quisque nec varius felis. 
                                    Nam at varius neque. Sed scelerisque bibendum nulla quis congue. Nulla eu nibh quis enim rutrum blandit. Praesent facilisis lorem ut metus gravida, quis efficitur mi cursus. Etiam scelerisque urna nec enim sagittis, ac porttitor lorem pellentesque. Proin laoreet bibendum nunc, quis eleifend tellus cursus a. Mauris varius quis nunc in rutrum. Maecenas gravida felis porttitor massa semper, quis convallis diam ultrices. Fusce suscipit vestibulum sem quis consectetur. In sit amet faucibus tortor, ullamcorper bibendum purus. Pellentesque molestie ut dolor eu tristique. Vestibulum quis varius elit, in facilisis risus. Praesent dictum lacus eu metus fermentum, venenatis feugiat massa sollicitudin. 
                                    Nulla velit magna, imperdiet vel velit sit amet, commodo blandit dolor.
                                    </Text>    
                                </View>
                            </>
                        }
                    />
                    
                </View>
        </View>
    );//['#1B75BC', '#161138'],['#6B4790','#EF509C'],['#B52025','#F27B64'],['#F05123','#F1AA54']
    //['#1B75BC', '#312C75'],['#244720','#6BBE47']
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    headerStyle : {
        marginTop:35,marginLeft:30,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'90%',
    },
    image: {
        height:'85%',
        opacity:0.3,
        position:'absolute',
        top:0,
        bottom:0,
        right:0,
        left:0
      },
      dowload:{
        flexDirection:'row',
        marginTop:40,      
        padding:15,
        borderRadius:30
      }
});//backgroundColor:'#5C5CFF',
  