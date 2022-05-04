import {createStore, combineReducer}  from 'redux';

import infomateriaReducer from './Reducer/infomateria.reducer';
import materiaReducer from './Reducer/materia.reducer';

const rootReducer = combineReducer({
    materias: materiaReducer,
    infomat: infomateriaReducer
})
export default createStore(rootReducer)