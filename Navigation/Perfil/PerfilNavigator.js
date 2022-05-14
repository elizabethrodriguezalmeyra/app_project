import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NuevoPerfil from '../../Screen/NuevoPerfil';
import DetallePerfil from '../../Screen/DetallePerfil';

const PerfilStack = createNativeStackNavigator();

function PerfilNavigator  (){

    return (
    <PerfilStack.Navigator >
            <PerfilStack.Screen
                name="Detalle"
                component={DetallePerfil}
                options={{title: 'Detalle Perfil'}} 
            />
            <PerfilStack.Screen
                name="Nuevo"
                component={NuevoPerfil}
                options={{title: 'Nuevo Perfil'}} 
            />

    </PerfilStack.Navigator>
    )
}
export default PerfilNavigator;