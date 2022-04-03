import React from 'react';
import { 
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
import ListItem  from './ListItem';

  function Index(props)  { 

    const {itemList, onHandlerModal} = props
    //console.log(itemList)
   return( 
   <FlatList
          data={itemList}
          renderItem={(data) => (
            <ListItem onHandlerModal={onHandlerModal} data={data} />
             
          )}
          keyExtractor={ (item) => item.id }
        />
   );
  
}



export default Index;
    