/**
 * 根reducer
 * Created by tianrenjie on 2017/11/9
 */
import { combineReducers } from 'redux';
import { message } from './reducer/reducer';

export const rootReducer = combineReducers({
  message,
});
