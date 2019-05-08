import axios from 'axios';
import {
  GET_LEVELS,
  GET_ERRORS_PNC,
  SET_SELECT,
  SET_QS,
  UPDATE_ROW_PNC,
  SAVE_TABLE_PNC,
  GET_ERRORS
} from './types';

export const getLevels = (level,parent) => dispatch => {
  axios
    .get('https://asesores.ac-labs.com.mx/Mantenimiento/Development/PNC/api_cl_aclab.php?api=LevelsPNC&level='+level+'&parent='+parent)
    .then(res =>
      {
        dispatch({
        type: GET_LEVELS,
        payload: res.data
      })}
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS_PNC,
        payload: err.response.data
      })
    );
};
export const setSelect = data =>{
  return {
    type: SET_SELECT,
    payload:data
  };
};
export const setQs = data =>{
  return {
    type: SET_QS,
    payload:data
  };
};
//update Row
export const updateRowPNC = data =>{
  return {
    type: UPDATE_ROW_PNC,
    payload:data
  };
};
//Save table
export const saveTablePNC = (table) => dispatch => {
  console.log(table);
  axios
    .post('https://asesores.ac-labs.com.mx/Mantenimiento/Development/PNC/api_cl_aclab.php', JSON.stringify({
      puesto: table.puesto,
      rows: table.rows,
      type: 'checklistPNC'
    }))
    .then(res =>
      {
        console.log(res)
        dispatch({
        type: SAVE_TABLE_PNC,
        payload: res.data
      })}
    )
    .catch(err =>{
        console.log(err);
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      }
    );
};
