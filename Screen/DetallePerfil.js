import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Perfil from '../Components/Perfil'

const DetallePerfil = () => {

    let perfil = [{title: "Hola", imagen:""}]
    
return (

    <Perfil
    title={perfil.title}
    image={perfil.image}
    address="La Plata, Argentina"

/>
   


)
}

export default DetallePerfil;