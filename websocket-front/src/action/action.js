/**
 * action
 * Created by tianrenjie on 2017/11/9
 */
import { createAction } from 'redux-actions';
import { SEND_MESSAGE } from '../constant/constant';

export const sendMessageAction = createAction(SEND_MESSAGE);

/**
 * 发送信息
 * @returns {function(*)}
 */
export function sendMesasge() {
  return (dispatch) => {
    fetch('', {
      method: 'POST',
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return {};
    }).then((data) => {
      console.log(data);
    }).catch((e) => {
      console.log(e);
    });
    dispatch(sendMessageAction());
  };
}
