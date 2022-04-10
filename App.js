import React, { useState } from 'react';
import { 
  Text, 
  View, 
} from 'react-native';
import { useFonts } from "expo-font";
import ModalItem  from './Components/ModalItem';
import AddItem from './Components/AddItem';
import Index from './Components/List/Index';
import Header from './Components/Structs/Header';
import Footer from './Components/Structs/Footer';
import AppLoading from "expo-app-loading";
import './style';

export default function App() {  
  const [ counter, setCounter ] = useState(3);
  const [ listItem, setListItem ] = useState([{id:1, value:'Programación', year:'2' },{id:2, value:'Matemática', year:'1'}]);
  const [ itemSelected, setItemSelected ] = useState({});
  const [ modalVisible, setModalVisible ] = useState(false);
  const [content, setContent] = useState();
  const [info, setInfo] = useState(false)
  
  const [loaded] = useFonts({
    OpenSans: require('./assets/font/GrapeNuts-Regular.ttf'),
    OpenSansBold: require('./assets/font/OpenSans-Bold.ttf'),
    GrepeNuts: require('./assets/font/GrapeNuts-Regular.ttf'), 
  })

  //console.log("Render");
  if(!loaded) return <AppLoading/>
  
  
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
  
  const handleRestart = () => {
    setInfo(false)
  }

  let context
    if(info){
      context= content
     
      }
      else{
        context= <View style={styles.listItemContainer}>
        <Index  onHandlerModal={onHandlerModal} content={setContent} setInfo={setInfo} handleRestart={handleRestart} itemList={listItem} ></Index>
         <ModalItem onDelete={onHandlerDelete} item={itemSelected} visible={modalVisible} onCancel={closeModal}/>
      </View>
     
      }
       
     // console.log(info);
  return (
    
    <View style={styles.container}>
      <Header style={styles.header} /> 
      <AddItem onAddItem={agregarItem}/>
      <View style={styles.listItemContainer}>
      {context}
      </View>
      
      <Footer />
    </View>
    
  );
}

