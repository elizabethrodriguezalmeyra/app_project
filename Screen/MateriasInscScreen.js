import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { MATERIAS } from '../data/MateriasInscriptas';
import BreadItem from '../Components/BreadItem'; 

function MateriasInscScreen({navigation, route}) {
  //const breads = BREADS.filter( bread => bread.category === route.params.categoryID);

  /*const handleSelect = (item) => {
    navigation.navigate('Detail', {
      productID: item.id,
      bread: item
    })
  }*/

  //const renderItemBread = ({item}) => <BreadItem item={item} onSelected={handleSelect}/>;

  return (
    <FlatList
      data={breads}
      keyExtractor={ item => item.id}
      renderItem={renderItemBread}
      />
  //   <View style={styles.screen}>
  //   <Text>Category Bread Screen {route.params.categoryID}</Text>   
  //   <Button title='Ir a Detalle' onPress={ () => {
  //       navigation.navigate('Detail')
  //   }}/>    
  // </View>
  );
}

const styles = StyleSheet.create({
    screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default MateriasInscScreen;