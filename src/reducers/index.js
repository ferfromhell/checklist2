import { combineReducers} from 'redux';
import checklistReducer from './checklistReducer';
import displayReducer from './displayReducer';

export default combineReducers({
  checklist: checklistReducer,
  display: displayReducer
})