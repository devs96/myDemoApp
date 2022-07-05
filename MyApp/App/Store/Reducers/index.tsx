import {combineReducers} from 'redux';
import {groups} from './groups';
import {getValue} from './tasks';

export default combineReducers({
  tasks: getValue,
  groups: groups,
});
