import axios from 'axios';
import { 
  GET_PUESTOS_DISPLAY, 
  GET_ERRORS_DISPLAY, 
  SET_CURRENT_USER_DISPLAY, 
  ADD_PUESTO_DISPLAY, 
  GET_CHECKLIST
} from './types';

//Display Checklist
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER_DISPLAY,
    payload: decoded
  };
};
export const getPuestos = () => dispatch => {
  axios
    .get('https://asesores.ac-labs.com.mx/Mantenimiento/Development/PNC/api_cl_aclab.php?api=position')
    .then(res =>
      {
        dispatch({
        type: GET_PUESTOS_DISPLAY,
        payload: res.data
      })}
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS_DISPLAY,
        payload: err.response.data
      })
    );
};
export const getChecklist = (puesto) => dispatch => {
  const url= 'https://asesores.ac-labs.com.mx/Mantenimiento/Development/PNC/api_cl_aclab.php?api=checklist&puesto='+puesto;
  console.log(url)
  axios
    .get(url)
    .then(res =>
      {
        dispatch({
        type: GET_CHECKLIST,
        payload: res.data
      })}
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS_DISPLAY,
        payload: err.response.data
      })
    );
};
//ADD PUESTO
export const addPuesto = puesto =>{
  return {
    type: ADD_PUESTO_DISPLAY,
    payload: puesto
  };
};

//Save table
// export const saveTable = (table) => dispatch => {
//   console.log(table);
//   axios
//     .post('https://asesores.ac-labs.com.mx/Mantenimiento/Development/PNC/api_cl_aclab.php', JSON.stringify({
//       puesto: table.puesto,
//       rows: table.rows,
//       type: 'checklist'
//     }))
//     .then(res =>
//       {
//         console.log(res)
//         dispatch({
//         type: SAVE_TABLE,
//         payload: res.data
//       })}
//     )
//     .catch(err =>{
//         console.log(err);
//         dispatch({
//           type: GET_ERRORS,
//           payload: err.response.data
//         })
//       }
//     );
// };