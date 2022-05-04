import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {MateriasInscriptas} from '../data/MateriasInscriptas'
import { useSelector } from 'react-redux';
import {selectMateriaInfo} from '../Store/Actions/infomat.action'



function InfoMateria({navigation, route}) {
  const materia = useSelector(state => state.materias)
 // console.log(materia)  hasta aca llegue
    
    return (
        <View style={styles.container}>
          <Text style={styles.title}>{materia.title}</Text>
          <Text>Descripcion: {materia.description}</Text>
          <Text> Año: {materia.year}</Text>
        </View>
      //   <View style={styles.screen}>
      //   <Text>Bread Detail Screen</Text>      
      // </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
      },
      title: {
        fontSize: 20,
        fontFamily: 'OpenSansBold',
        marginBottom: 10,
      }
    });
    
    
export default InfoMateria;