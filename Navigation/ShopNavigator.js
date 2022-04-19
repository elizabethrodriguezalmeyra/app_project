import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Card from '../Components/Card';
import Mostrar from '../Screen/Mostrar';
import Perfil from '../Screen/Perfil';
import Informacion from '../Screen/Informacion';


const Stack = createNativeStackNavigator();

  function ShopNavigator()  { 
 return(
  <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={Mostrar} /> 
          <Stack.Screen name='Perfil' component={Perfil} />
          <Stack.Screen name='Informacion' component={Informacion} />
                
      </Stack.Navigator>
  </NavigationContainer>
 )
}
export default ShopNavigator;