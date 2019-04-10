import update from 'immutability-helper';
import { 
  SET_CURRENT_USER,
  GET_PUESTOS, 
  GET_CATEGORIAS, 
  ADD_CATEGORY_ROW, 
  DELETE_ROW,
  ADD_EXTRA_ROW, 
  ADD_PUESTO,
  SAVE_TABLE,
  UPDATE_ROW 
} from '../actions/types';

const initialState = {
  user: {},
  puestos: [],
  puestoSelect: '',
  categorias: [],
  errors: {},
  rows: [],
  saved: {
    Succes:false
  }
};

export default (state= initialState,action) => {
  switch(action.type){
    case SET_CURRENT_USER: 
      return{
        ...state,
        user: action.payload
      }
    case GET_PUESTOS:
      return{
        ...state,
        puestos: action.payload
      }
    case ADD_PUESTO:
      return{
        ...state,
        puestoSelect: action.payload
      }
    case GET_CATEGORIAS:
      return{
        ...state,
        categorias: action.payload
      }
    case ADD_CATEGORY_ROW:
      return{
        ...state,
        rows: [...state.rows,action.payload]
      }
    case ADD_EXTRA_ROW:
      return{
        ...state,
        rows: action.payload
      }
    case DELETE_ROW:
      return{
        ...state,
        rows: action.payload
      }
    case UPDATE_ROW:
      const rowIndex=(action.payload.i.index);
      const newValue=(action.payload.value);
      return update(state, {rows: { [rowIndex]: {response: {$set: newValue}}}});
    case SAVE_TABLE:
      return{
        ...state,
        saved: action.payload
      }
    default:
      return state;
  }
}