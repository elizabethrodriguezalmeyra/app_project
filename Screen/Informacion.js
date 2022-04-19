import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function Informacion({navigation}) {
  return (
    <View style={styles.screen}>
      <Text>La informacion de mi usuario es la que se va a cargar desde una Base de dato en la prox entrega</Text>   
      <Button title='Volver' onPress={ () => {
          navigation.navigate('Home')
      }}/>    
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Informacion;