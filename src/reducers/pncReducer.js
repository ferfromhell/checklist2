import {
  GET_LEVELS, SET_SELECT
} from '../actions/types';

const initialState = {
  allLevels:{},
  levelsSelect: []
}

export default (state= initialState,action) => {
  switch(action.type){
    case GET_LEVELS: 
      return{
        ...state,
        allLevels: action.payload
      }
    case SET_SELECT:
      console.log(action.payload);
      // const index=(action.payload.i.index);
      //const info=(action.payload.value);
      // return update(state, {levelsSelect: { [rowIndexInput]:  {$set: newValueInput}}});
      return {
        ...state,
        levelsSelect: action.payload
      }
    default:
      return state;
  }
}

