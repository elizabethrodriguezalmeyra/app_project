import { MATERIAS } from "../../data/bbddmaterias";
import { SELECT_MAT} from "../actions/infomat.action";

const initialState =  {

    materias : MATERIAS,
    filteredMat: [],
    selected: null
}


const InfoMateriaReducer = (state = initialState, action) => {
    switch(action.type) {
        case SELECT_MAT:
            console.log("MAT " + action.matid );
            return {
                ...state,
                selected: state.materias.find( materia => materia.id === action.matid )
            }
        default: 
            return state;
    }
    
}

export default infomateriaReducer;