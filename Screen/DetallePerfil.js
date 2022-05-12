import React from 'react'
import Perfil from '../Components/Perfil'

const DetallePerfil = () => {

    let perfil = useSelector(state => state.perfil);


return (
    <Perfil
    title={perfil.title}
    image={perfil.image}
    address="La Plata, Argentina"
    onSelect={() => navigation.navigate('Detalle')}
/>

)
}

export default DetallePerfil;