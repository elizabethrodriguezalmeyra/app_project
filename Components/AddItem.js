import React, {useState } from 'react';
import { 
    View, 
    TextInput, 
    Button, 
    StyleSheet,

  } from 'react-native';

function AddItem(props) {      
    const [ textItem, setTextItem ] = useState('');  
    const [ yearM, setYearM ] = useState('');  
    const { onAddItem } = props;
    const onHandlerChangeItem = (texto) => setTextItem(texto);
    const onHandlerYearMateria = (texto) => setYearM(texto);

    const onHandlerAddItem = () => {
      //console.log("Add: " + textItem);
      setTextItem('');
      setYearM('')
      onAddItem(textItem, yearM);
    }
    

    return (
    <View style={styles.addItemContainer}>
    <TextInput 
        placeholder='Ingrese una Materia.' 
        style={styles.input}
        value={textItem}
        onChangeText={onHandlerChangeItem}
        />
        <TextInput 
        placeholder='Ingrese el año de la Materia.' 
        style={styles.input}
        value={yearM}
        onChangeText={onHandlerYearMateria}
        />
     
       
    <Button title="Agregar" onPress={onHandlerAddItem}/>
  </View>
  )
}


export default AddItem;