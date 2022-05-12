import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { COLORS } from '../constants';

const Perfil = ({ title, image, address, onSelect}) => {
    
    return (
        <TouchableOpacity
            onPress={onSelect}
            style={styles.perfil}
        > 
        {/* { isStatic:true, uri: 'image'} */}
            <Image style={styles.image} source={{isStatic:true, uri: image,}}/>
            <View style={styles.info}>
                <Text style={styles.title}>{title}</Text>
                <Text styles={styles.address}>{address}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    perfil: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingVertical: 16,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: COLORS.PEACH_PUFF
    },
    info: {
        marginLeft: 25,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    title: {
        color: COLORS.BLUSH,
        fontSize: 18,
        marginBottom: 6,
    },
    address: {
        color: '#777',
        fontSize: 16,
    }
})

export default Perfil;