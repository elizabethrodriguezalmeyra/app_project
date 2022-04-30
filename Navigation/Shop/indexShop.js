import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { COLORS } from '../../Constantes/color';
//import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';
import MateriasScreen from '../../Screen/MateriasScreen';
import MateriasInscScreen from '../../Screen/MateriasInscScreen';
import Informacion from '../../Screen/Informacion';
//import Perfil from '../../Screen/Perfil';
import InfoMateria from '../../Screen/InfoMateria';
//import { MateriasInscriptas } from '../../data/MateriasInscriptas';

const Stack = createNativeStackNavigator();

const ShopNavigator =  () => {
    return  (
        <Stack.Navigator initialRouteName='Home'
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? COLORS.primary : '',                    
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}
    >

            <Stack.Screen name='Cursada' component={MateriasScreen} options={{title: 'Mis Materias'}} /> 
            <Stack.Screen name='Materia' component={InfoMateria}   options={ ({route}) => ({title: route.params.name})}/> 
           
               
            <Stack.Screen name='Informacion' component={Informacion}
               // options={ ({route}) => ({title: route.params.bread.name})}*/ 
               />
        </Stack.Navigator>

    )
}

export default ShopNavigator;