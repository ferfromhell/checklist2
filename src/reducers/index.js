import { combineReducers} from 'redux';
import checklistReducer from './checklistReducer';

export default combineReducers({
  checklist: checklistReducer
})