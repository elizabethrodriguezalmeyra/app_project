import React from 'react';
import { 
   
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';


function ListItem (props) { 
  const { onHandlerModal, data} = props
   
   return( 
   
            <TouchableOpacity onPress={onHandlerModal.bind(this, data.item.id)}>
                <View style={styles.itemList}>
                    <Text>{data.item.value} - </Text>
                    <Text> Año cursada: {data.item.year}</Text>
                </View>
            </TouchableOpacity>
         
   );
  
}



export default ListItem;
    