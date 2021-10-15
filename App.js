//import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import inicio from './inicio';
import Page1 from './page1';
import page2 from './page2';
import page3 from './page3';
import points from './points';

//import {Text} from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={inicio} options={{ title: "Iniciando o Quiz" }} />
        <Stack.Screen name="Page1" component={Page1} options={{ title: "Primeiro Quiz" }} />
        <Stack.Screen name="Page2" component={page2} options={{ title: "Segundo Quiz" }} />
        <Stack.Screen name="Page3" component={page3} options={{ title: "Terceiro Quiz" }} />
        <Stack.Screen name="Points" component={points} options={{ title: "Pontos" }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}


