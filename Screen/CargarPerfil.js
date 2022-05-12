import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, StyleSheet, TextInput, ScrollView, Button } from 'react-native';
import { COLOR } from '../Constantes/color';
import { addPerfil } from '../store/perfil.actions';
//import ImageSelector from '../components/ImageSelector';

const CargarPerfil = ({navigation}) => {
    const dispatch = useDispatch();
    const [ title, setTitle ] = useState('');
    const [ image, setImage ] = useState('');

    const handlerTitleChange = text => setTitle(text);
    const handlerImageChange = img => setImage(img);
    const handlerSave = () => {
        console.log("Add Image");
        dispatch(addPerfil(title, image));
        navigation.navigate('Perfil');
    }

    return (
      
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.label}>Titulo</Text>
                <TextInput style={styles.input} onChangeText={handlerTitleChange}/>
                <ImageSelector onImage={handlerImageChange}/>
                <Button title="Guardar Perfil" color={color.MAROON} onPress={handlerSave}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30
    },
    label: {
        fontSize: 18,
        marginBottom: 16
    },
    input: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 2,
        paddingVertical: 4
    }
})

export default CargarPerfil