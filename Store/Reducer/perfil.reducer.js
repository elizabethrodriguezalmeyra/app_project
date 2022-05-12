
import Perfil from '../Models/Perfil';
import { ADD_PERFIL } from '../Actions/perfil.action';

const initialState = {
    perfil: []
}

export default (state = initialState, action) => {
    //console.log("Reducer...");
    switch(action.type) {
        case ADD_PERFIL:
            //console.log("ADD_PERFIL");
            const newPerfil = new Perfil(Date.now(), action.payload.title, action.payload.image);
            //console.log(newPerfil);
            return {
                ...state,
                perfil: state.perfil.concat(newPerfil),
            }
        default:
            return state
    }
}