import { MateriasInscriptas } from "../../data/MateriasInscriptas";
import { SELECT_MATERIA } from "../Actions/materias.action";

const initialState =  {
    materias : MateriasInscriptas,
    selected: null
}

const materiaReducer=(state= initialState, action) =>{
    switch (action.type){
        case SELECT_MATERIA:
            const IndexMateria = state.materias.findIndex(mat => mat.id === action.matid)
        if(IndexMateria === -1)return state
        return{...state, selected: state.materias(IndexMateria)}
        default: 
            return state       
    }
    
}
export default materiaReducer;

