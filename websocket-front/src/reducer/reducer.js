/**
 * reducer
 * Created by tianrenjie on 2018/3/6
 */
import { SEND_MESSAGE } from '../constant/constant';

const initFields = {};
export function message(state = initFields, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      return state;
    default:
      return state;
  }
}
