 
import 'react-native-reanimated';
import { Text, View ,Image, Button , Dimensions } from 'react-native';
import { Themebutton } from '@/components/themebutton';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { router } from 'expo-router';
import Header from '../components/header';
export default function WelcomeScreen(){
       

      return (
        <View style={{height:"100%", backgroundColor:"white"}}>
        <Header/>
         <Image style={{width:400,height:500 , marginLeft:-19,marginTop:-20}} source={{uri:"https://img.freepik.com/premium-vector/man-with-dogs-vector-illustration-cartoon-style-white-background_1142-76869.jpg"}}/>
         <Text style = {{fontSize:32, textAlign:"center" , marginLeft:10,marginTop:-120}}> Get started by finding the perfect companion for your family!</Text> 
          
          <View>
             <Themebutton style={{marginTop:61, elevation:3}} 
             icon={<FontAwesome name="hand-o-right" size={20} color="white" /> }
               bgColor='orange' txt='Wellcome' onPress={()=> router.push("/secondpage")}/> 
             </View>
         </View>
        
      )
  }
 