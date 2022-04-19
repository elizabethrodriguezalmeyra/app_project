import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AddItem from '../Components/AddItem';
import Header from '../Components/Structs/Header';
import Footer from '../Components/Structs/Footer';
import Index from '../Components/List/Index';
import ModalItem from '../Components/ModalItem';
import '../style';
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

     
function Mostrar({navigation}) {
    const [info, setInfo] = useState(false)
    const [ modalVisible, setModalVisible ] = useState(false);
    const [ listItem, setListItem ] = useState([{id:1, value:'Programación', year:'2' },{id:2, value:'Matemática', year:'1'}]);
    const [ itemSelected, setItemSelected ] = useState({});
    const [ counter, setCounter ] = useState(3);
  
  const [content, setContent] = useState();

  
  const handleRestart = () => {
    setInfo(false)
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

  let context
  if(info){
    context= content
   
    }
    else{
      context= <View>
      <Index  onHandlerModal={onHandlerModal} content={setContent} setInfo={setInfo} handleRestart={handleRestart} itemList={listItem} ></Index>
      <ModalItem onDelete={onHandlerDelete} item={itemSelected} visible={modalVisible} onCancel={closeModal}/>
    </View>
    }
  return (
    <View >
      <Header /> 
      <AddItem onAddItem={agregarItem}/>
      <View>
    {context}
      </View>
      <Button title='Ver mi Perfil' onPress={ () => {
          navigation.navigate('Perfil')
      }}/>    
      <Footer />
       
     
    </View>
  );


const styles = StyleSheet.create({
    screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

}
export default Mostrar;