import React, { useState } from 'react';
import { 
  Text, 
  View, 
} from 'react-native';
import ModalItem  from './Components/ModalItem';
import AddItem from './Components/AddItem';
import Index from './Components/List/Index';
import Header from './Components/Estructura/Header';
import Footer from './Components/Estructura/Footer';
import './style';

export default function App() {  
  const [ counter, setCounter ] = useState(3);
  const [ listItem, setListItem ] = useState([{id:1, value:'Programación', year:'2' },{id:2, value:'Matemática', year:'1' }]);
  const [ itemSelected, setItemSelected ] = useState({});
  const [ modalVisible, setModalVisible ] = useState(false);

  
  const onHandlerDelete = id => { 
      //console.log("Item " + itemSelected.value + " Eliminado");
      setListItem( currenItems => currenItems.filter( item => item.id !== id ));
      setItemSelected({});
      setModalVisible(!modalVisible);
  }
  const onHandlerModal = id => {
    setItemSelected(listItem.filter( item => item.id === id)[0]);
    setModalVisible(!modalVisible);
  }  
  const closeModal = () => {
    setModalVisible(!modalVisible);
  }

  const agregarItem = (textItem, yearM) => {   
   // console.log("add materia.");
    if((textItem!=="") && (yearM !=="")){
      //console.log("Se agrego el item: " + textItem);
      setListItem( currenItems => 
        [...currenItems, {id: counter, value: textItem, year: yearM}]        
      )
      setCounter(counter + 1);
    }
    
  }
  
  
  return (
    
    <View style={styles.container}>
      <Header style={styles.header} /> 
      <AddItem onAddItem={agregarItem}/>      
      <View style={styles.listItemContainer}>
        <Index itemList={listItem} onHandlerModal={onHandlerModal}></Index>
      </View>
      <ModalItem onDelete={onHandlerDelete} item={itemSelected} visible={modalVisible} onCancel={closeModal}/>
      <Footer />
    </View>
    
  );
}

