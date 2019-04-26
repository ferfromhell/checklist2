import axios from 'axios';
import {
  GET_LEVELS,
  GET_ERRORS_PNC,
  SET_SELECT
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
