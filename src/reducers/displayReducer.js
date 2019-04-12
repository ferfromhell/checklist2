import update from 'immutability-helper';
import { 
  SET_CURRENT_USER_DISPLAY,
  GET_PUESTOS_DISPLAY, 
  ADD_PUESTO_DISPLAY,
  GET_CHECKLIST,
} from '../actions/types';

const initialState = {
  user: {},
  puestos: [],
  puestoSelect: '',
  errors: {},
  rows: [],
  saved: {
    Succes:false
  },
  checklist: {}
};

export default (state= initialState,action) => {
  switch(action.type){
    case SET_CURRENT_USER_DISPLAY: 
      return{
        ...state,
        user: action.payload
      }
    case GET_PUESTOS_DISPLAY:
      return{
        ...state,
        puestos: action.payload
      }
    case ADD_PUESTO_DISPLAY:
      return{
        ...state,
        puestoSelect: action.payload
      }
    case GET_CHECKLIST:
      return{
        ...state,
        checklist: action.payload
      }
    default:
      return state;
  }
}