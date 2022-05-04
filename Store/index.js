import {createStore, combineReducers}  from 'redux';

import infomateriaReducer from './Reducer/infomateria.reducer';
import materiaReducer from './Reducer/materia.reducer';

const rootReducer = combineReducers({
    materias: materiaReducer,
    infomat: infomateriaReducer
})
export default createStore(rootReducer)