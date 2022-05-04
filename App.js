import React, { useState } from 'react';
import { 
  Text, 
  View, 
} from 'react-native';
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import './style';
import MainNavigator from './Navigation';
import { Provider } from 'react-redux';
import store from './Store'


export default function App() {  
  
 
  const [loaded] = useFonts({
    OpenSans: require('./assets/font/GrapeNuts-Regular.ttf'),
    OpenSansBold: require('./assets/font/OpenSans-Bold.ttf'),
    GrepeNuts: require('./assets/font/GrapeNuts-Regular.ttf'), 
  })

  //console.log("Render");
  if(!loaded) return <AppLoading/>
  
  
  return (
    
   <Provider store={store} >
    
    <MainNavigator/>
    </Provider>
  );
}

