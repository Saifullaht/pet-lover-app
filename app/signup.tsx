import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import Header from '../components/header';
import { router } from 'expo-router';

export default function Signup() {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Header />
      <View style={styles.container}>
        {/* Circular Image */}
        <Image 
          source={{ uri: 'https://cdn.vectorstock.com/i/500p/98/05/puppy-little-dog-pets-lover-circle-line-geometric-vector-53479805.jpg' }} 
          style={styles.image} 
        />

        {/* Welcome Text */}
        <Text style={styles.title}>SignUp!</Text>

        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          keyboardType="email-address"
        />

        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
        />

        {/* Login Button */}
        <TouchableOpacity onPress={() => router.push("/(tabs)")}
        style={styles.button}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>

        {/* Forgot Password Link */}
        <TouchableOpacity>
          <Text style={styles.link}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop:-50,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60, // Makes the image circular
    marginBottom: 20,
    borderWidth: 2,
    borderColor: 'orange', // Optional border for better styling
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  button: {
    backgroundColor: 'orange',
    paddingVertical: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#007BFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
     
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    color: 'orange',
    fontSize: 14,
    textAlign: 'center',
  },
});

 
