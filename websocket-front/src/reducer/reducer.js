/**
 * reducer
 * Created by tianrenjie on 2018/3/6
 */
import { combineReducers } from 'redux';
import {ON_CONNECT, ON_DISCONNECT, SEND_MESSAGE} from '../constant/constant';

const initFields = {};

function message(state = initFields, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      return state;
    default:
      return state;
  }
}

function socket(state = initFields, action) {
  switch (action.type) {
    case ON_CONNECT:
      return { ...state, connect: true };
    case ON_DISCONNECT:
      return { ...state, connect: false };
    default:
      return state;
  }
}

export default combineReducers({
  message,
  socket,
});
