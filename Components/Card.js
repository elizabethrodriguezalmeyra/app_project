import React from 'react';
import {
    View, 
    Text,
    StyleSheet,
    Button
} from 'react-native';




function Card(props) {
    const {titulo, item, setInfo, handleRestart={handleRestart}} = props
    return (
        <View style= {StyleSheet.inputContainer}>
            <Text> {titulo} </Text>
            <Text> {item.id} </Text>
            <Text> {item.value} </Text>
            <Button title="Volver" onPress={handleRestart}></Button>
        </View>
       
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#ccdbdd',
        width: 300,
        padding: 20,
        borderRadius: 20,

    },
});

export default Card;