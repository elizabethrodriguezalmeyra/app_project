import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import ShopNavigator from '../Shop/indexShop';
import PerfilNavigator from '../Perfil/PerfilNavigator';

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <BottomTabs.Navigator initialRouteName='ShopTab' 
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false, 
                tabBarStyle: styles.tabBar,
            }}
            >
            <BottomTabs.Screen name='ShopTab' component={ShopNavigator}   //aca irian las vistas para manejar las materias que se tengan estados inscriptas
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={styles.item}>
                            <Ionicons name="md-home" size={24} color="black" />
                            <Text>INICIO</Text>
                        </View>
                    )
                }}
            />
           <BottomTabs.Screen name='Perfil' component={PerfilNavigator}   //aca irian las vistas para manejar las materias que se tengan estados inscriptas
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={styles.item}>
                            <Ionicons name="heart" size={24} color="black" />
                            <Text>Mi Perfil</Text>
                        </View>
                    )
                }}
            />
            
        </BottomTabs.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        shadowColor: '#7f5df0',
        shadowOffset: { width: 0, height: 10},
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 5,
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20, 
        borderRadius: 15,
        height: 90,
        backgroundColor: '#ccc'
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default TabNavigator;