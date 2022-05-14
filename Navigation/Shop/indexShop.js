import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { COLOR } from '../../Constantes';
import MateriasScreen from '../../Screen/MateriasScreen';
import InfoMateria from '../../Screen/InfoMateria';

import NuevoPerfil from '../../Screen/NuevoPerfil';
import DetallePerfil from '../../Screen/DetallePerfil';

const Plataforma = createNativeStackNavigator();

const ShopNavigator =  () => {
    return  (
        <Plataforma.Navigator initialRouteName='Nuevo'
    >
            <Plataforma.Screen 
                name='HOME'
                component={MateriasScreen} 
                options={{title: 'Inicio'}} /> 

            <Plataforma.Screen 
                name='Materia'
                component={InfoMateria}  
                options={ ({route}) => ({title: route.params.name})}/>   

            
        </Plataforma.Navigator>

    )
}

export default ShopNavigator;