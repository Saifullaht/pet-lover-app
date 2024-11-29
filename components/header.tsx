  
import 'react-native-reanimated';

 
import { Text, View ,Image, Button , Dimensions } from 'react-native';
import { router } from 'expo-router';
 
 

  export default function Header(){

      return (
        <View>
          
          <View style={{flexDirection:"row", padding:5, backgroundColor:"white"}}> 
           <Image style={{marginLeft:15 , width:50, height:50}} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUk3u_QHfRXuShzDuhAwBUJNLL6rX_JmSpHw&s" }}/>
           <Text style={{marginTop:15,marginLeft:2 , fontWeight:700 ,  }}>Happy Pet</Text>

        </View>
  
        
        </View>
      );
  }