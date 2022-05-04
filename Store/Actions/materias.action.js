export const SELECT_MATERIA = 'SELECT MATERIA'

export const selectMateria = (id) => ({
    type: SELECT_MATERIA, 
    matid: id,
    selected: null
    })