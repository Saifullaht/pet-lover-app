import AntDesign from '@expo/vector-icons/AntDesign';
import { Tabs } from "expo-router";
import React from "react";
import Octicons from '@expo/vector-icons/Octicons';
import { Image } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "orange",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Animals",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="horse" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "profile",
          tabBarIcon: ({ color }) => (
<AntDesign name="github" size={24} color= {color} />          ),
        }}
      />
       
      <Tabs.Screen
        name="animalpro"
        options={{
          title: "Animals-Feed",
          tabBarIcon: ({ color }) => (
            <Octicons name="feed-heart" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}