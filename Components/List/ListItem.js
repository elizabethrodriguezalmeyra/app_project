import React  from 'react';
import { 
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Button
  } from 'react-native';
  import Card from '../Card';
  import colors from '../../Constantes/color';

  function ListItem (props) { 
  const { onHandlerModal, content, setInfo, handleRestart, data } = props

  function mostrarInfo(item, content, setInfo){
    content(<Card titulo={"Esta Materia es"} item={item} handleRestart={handleRestart}/>);
    setInfo(true);
  
  }
  
  
   
   return( 
   
            <TouchableOpacity onPress={onHandlerModal.bind(this, data.item.id)}>
                <View style={styles.itemList}>
                    <Text>{data.item.value} - </Text>
                    <Text> Año cursada: {data.item.year}</Text>
                    <Button title="Ver Info" onPress={()=>mostrarInfo(data.item, content, setInfo)} color={colors.primary}></Button>
                </View>
            </TouchableOpacity>
            
         
   );
  
}



export default ListItem;
    