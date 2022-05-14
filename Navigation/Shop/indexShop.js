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
                name='Home'
                component={MateriasScreen} 
                options={{title: 'Inicio'}} /> 

            <Plataforma.Screen 
                name='Materia'
                component={InfoMateria}  
                options={ ({route}) => ({title: route.params.name})}/>   

            <Plataforma.Screen
                name="Detalle"
                component={DetallePerfil}
                options={{title: 'Detalle Perfil'}} 
            />
            <Plataforma.Screen
                name="Nuevo"
                component={NuevoPerfil}
                options={{title: 'Nuevo Perfil'}} 
            />

        </Plataforma.Navigator>

    )
}

export default ShopNavigator;