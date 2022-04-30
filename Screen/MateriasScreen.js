
import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { MateriasInscriptas } from '../data/MateriasInscriptas';
import GridItem from '../Components/GridItem';


function MateriasScreen({navigation}) {
  const handledSelectedCategory = (item) => {
    navigation.navigate('Materia', {
      id: item.id,
      name: item.title
    })
  }

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