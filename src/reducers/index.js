import { combineReducers } from 'redux';
import BaselineReducer from '../modules/baseline/reducers';

export default combineReducers({
  baselines: BaselineReducer,
});
