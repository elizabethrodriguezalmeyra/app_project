import React, { useState } from 'react';
import { 
  Text, 
  View, 
} from 'react-native';
import { useFonts } from "expo-font";
import ModalItem  from './Components/ModalItem';
import AddItem from './Components/AddItem';
import Index from './Components/List/Index';
import Header from './Components/Structs/Header';
import Footer from './Components/Structs/Footer';
import AppLoading from "expo-app-loading";
import './style';
import ShopNavigator from './Navigation/ShopNavigator';
import Perfil from './Screen/Perfil';

export default function App() {  
  
 
  const [loaded] = useFonts({
    OpenSans: require('./assets/font/GrapeNuts-Regular.ttf'),
    OpenSansBold: require('./assets/font/OpenSans-Bold.ttf'),
    GrepeNuts: require('./assets/font/GrapeNuts-Regular.ttf'), 
  })

  //console.log("Render");
  if(!loaded) return <AppLoading/>
  
  
  

  
  
 

 /* 
      }*/
       
     // console.log(info);
  return (
    
   
    
    <ShopNavigator/>
    
  );
}

