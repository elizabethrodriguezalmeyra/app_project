import { MateriasInscriptas } from "../../data/MateriasInscriptas";
import { SELECT_MATERIA } from "../Actions/materias.action";

const initialState =  {
    materias : MateriasInscriptas,
    selected: null
}

const materiaReducer=(state= initialState, action) =>{
    console.log("id",action.matid)
    switch (action.type){
        case SELECT_MATERIA:
            const IndexMateria = state.materias.findIndex(mat => mat.id === action.matid)
        if(IndexMateria === -1) return state
        return{...state, selected: state.materias.find(mat => mat.id === action.matid)}
        default: 
            return state       
    }
  
    
}
export default materiaReducer;

