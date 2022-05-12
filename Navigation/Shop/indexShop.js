import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform, TouchableOpacity } from 'react-native'
import { COLOR } from '../../Constantes';
import MateriasScreen from '../../Screen/MateriasScreen';
import MateriasInscScreen from '../../Screen/MateriasInscScreen';
import Informacion from '../../Screen/Informacion';
import InfoMateria from '../../Screen/InfoMateria';
import Perfil from '../../Screen/Perfil'

const Stack = createNativeStackNavigator();

const ShopNavigator =  () => {
    return  (
        <Stack.Navigator initialRouteName='Home'
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? COLOR.DARK_SIENNA:'',                    
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : COLOR.DARK_SIENNA,
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}
    >

            <Stack.Screen name='Home' component={MateriasScreen} options={{title: 'Inicio'}} /> 
            <Stack.Screen name='Materia' component={InfoMateria}   options={ ({route}) => ({title: route.params.name})}/>         
            <Stack.Screen name='Perfil' component={Perfil}/>
        </Stack.Navigator>

    )
}

export default ShopNavigator;