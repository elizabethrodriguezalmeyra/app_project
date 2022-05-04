import { MateriasInscriptas } from "../../data/MateriasInscriptas";
import { SELECT_MAT} from "../Actions/infomat.action";

const initialState =  {

    materias : MateriasInscriptas,
    filteredMat: [],
    selected: null
}


const infomateriaReducer = (state = initialState, action) => {
    switch(action.type) {
        case SELECT_MAT:
            console.log("Entra aca" );
            return {
                ...state,
                selected: state.materias.find( materia => materia.id === action.matid )
            }
        default: 
            return state;
    }
    
}

export default infomateriaReducer;