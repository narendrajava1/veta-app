import { combineReducers } from 'redux';
import rateReducer from './rate-reducer';

const rootReducer = combineReducers({
  ratesManage: rateReducer
});

export default rootReducer;
