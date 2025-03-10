 
import { useFonts } from 'expo-font';
 
import * as SplashScreen from 'expo-splash-screen';
 
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import {   Dimensions } from 'react-native';
import { Stack } from 'expo-router';

 
SplashScreen.preventAutoHideAsync();
const SCREEN_HEIGHT = Dimensions.get("screen").height;
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName="index">
      <Stack.Screen name='index'/>
      <Stack.Screen name='secondpage'/>
      <Stack.Screen name='products'/>
      <Stack.Screen name='login'/>
      <Stack.Screen name='signup'/>

    </Stack>
  )
}