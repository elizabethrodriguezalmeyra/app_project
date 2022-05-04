
import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
//import { MateriasInscriptas } from '../data/MateriasInscriptas';
import { useSelector, useDispatch } from 'react-redux';
import GridItem from '../Components/GridItem';
import {selectMateria} from '../Store/Actions/materias.action'


function MateriasScreen({navigation}) {

  const handledSelectedCategory = (item) => {
    navigation.navigate('Materia', {
      id: item.id,
      name: item.title
    })
  }

  const dispatch = useDispatch();
  const MateriasInscriptas = useSelector(state=>state.materias).materias
  //console.log('materiaScreen', MateriasInscriptas)

  const renderGridItem = ({item}) => <GridItem item={item} onSelected={handledSelectedCategory}/>;
  
  return (
    <FlatList 
      data={MateriasInscriptas}
      keyExtractor={ item => item.id}
      renderItem={renderGridItem}
      numColumns={2}
    />

    
  );
}

const styles = StyleSheet.create({
    screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default MateriasScreen;