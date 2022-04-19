import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function Perfil({navigation}) {
  return (
    <View style={styles.screen}>
      <Text>Ver mi Perfil</Text>   
      <Button title='Ir a Detalle' onPress={ () => {
          navigation.navigate('Informacion')
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


export default Perfil;