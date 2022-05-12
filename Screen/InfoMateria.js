import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {MateriasInscriptas} from '../data/MateriasInscriptas'
import { useSelector, useDispatch } from 'react-redux'; 
import {selectMateria} from '../Store/Actions/materias.action'



function InfoMateria({navigation, route}) {
  const dispatch = useDispatch();  

  useEffect( () => {
    //console.log("Screen: " + route.params.id);
    dispatch(selectMateria(route.params.id));
  }, [])
  const materia = useSelector(state => state.materias.selected)
  //console.log("Entro aca", materia)  
    
    return (
        <View style={styles.container}>
          <Text style={styles.title}>{materia.title}</Text>
          <Text>Descripcion: {materia.description}</Text>
          <Text> Año: {materia.year}</Text>
        </View>
    
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