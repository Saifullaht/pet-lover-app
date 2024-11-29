import 'react-native-reanimated';
import React from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import { Themebutton } from '@/components/themebutton';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { router } from 'expo-router';
import Header from '../components/header';

export default function Secondpage() {
  const { width: screenWidth } = Dimensions.get('window'); // Get screen width

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Header />
      {/* Responsive Image */}
      <Image
        style={{
          width: screenWidth, // 100% of the screen width
          height: screenWidth * 0.65, // Adjust height for better proportions
          alignSelf: 'center',
          marginVertical: 70,
        }}
        source={{
          uri: 'https://st.depositphotos.com/1967477/2305/v/450/depositphotos_23051970-stock-illustration-cute-dog-cartoon-running.jpg',
        }}
      />
      {/* Text Section */}
      <Text
        style={{
          fontSize: 30,
          textAlign: 'center',
          marginHorizontal: 20, // Add padding from screen edges
          marginTop: -30,
          color: '#333',
          lineHeight: 35,
        }}
      >
        Discover a world of joy and companionship at Happy Pet
      </Text>

      {/* Button Section */}
      <View style={{ marginTop: 40, alignItems: 'center' }}>
        <Themebutton
          style={{
            elevation: 3,
            width: screenWidth * 0.9, // 80% of the screen width
          }}
          icon={<FontAwesome name="hand-o-right" size={20} color="white" />}
          bgColor="orange"
          txt="Login"
          onPress={() => router.push("/login")}
        />
      </View>

      <View style={{ marginTop: 20, alignItems: 'center' }}>
        <Themebutton
          style={{
            elevation: 3,
            borderWidth:1,
            borderColor:"orange",
            
            width: screenWidth * 0.9, // 80% of the screen width
          }}
          icon={<FontAwesome name="hand-o-right" size={20} color="black" />}
          bgColor="white"
          txt="Signup"
          txtColor='black'
          
          onPress={() => router.push('/signup')}
        />
      </View>
    </View>
  );
}
