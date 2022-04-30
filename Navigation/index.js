import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './Tab/indextab';

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <TabNavigator/>
        </NavigationContainer>
    )
}


export default MainNavigator;