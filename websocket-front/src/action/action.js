/**
 * action
 * Created by tianrenjie on 2017/11/9
 */
import { createAction } from 'redux-actions';
import { SEND_MESSAGE } from '../action/action';

export const sendMessageAction = createAction(SEND_MESSAGE);

/**
 * 发送信息
 * @returns {function(*)}
 */
export function sendMesasge() {
  return (dispatch) => {
    dispatch(sendMessageAction());
  };
}
