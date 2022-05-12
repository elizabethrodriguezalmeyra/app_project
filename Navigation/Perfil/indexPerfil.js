import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLOR } from '../../Constantes/color';
import NuevoPerfil from '../../Screen/NuevoPerfil';
import DetallePerfil from '../../Screen/DetallePerfil'

const Stack = createNativeStackNavigator();

const PerfilNavigator =  () => (
    <PlaceStack.Navigator
        initialRoute='Perfil'
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? COLOR.DARK_SIENNA : '',
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : COLOR.DARK_SIENNA,
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}
    >
    <PlaceStack.Screen
    name="Perfil"
    component={NuevoPerfil}
    //debemos convertirla a una funcion por que necesitamos recibir el parametro de navigation
    options={({navigation}) => ({
        title: 'Perfil',
        headerRight: () => (
            <TouchableOpacity onPress={ () => navigation.navigate('Nuevo')}>
                <Ionicons 
                    name="md-add"
                    size={24}
                    color={Platform.OS === "android"? 'white' : COLORS.DARK_SIENNA}    
                />
            </TouchableOpacity>
        )
    })}
/>
<PlaceStack.Screen
    name="Detalle"
    component={DetallePerfil}
    options={{title: 'Detalle Perfil'}} 
/>
<PlaceStack.Screen
    name="Nuevo"
    component={NuevoPerfil}
    options={{title: 'Nuevo Perfil'}} 
/>

</PlaceStack.Navigator>
)
export default PerfilNavigator;