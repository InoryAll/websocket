/**
 * action
 * Created by tianrenjie on 2017/11/9
 */
import { createAction } from 'redux-actions';
import { message } from 'antd';
import { ON_CONNECT, ON_DISCONNECT, SEND_MESSAGE } from '../constant/constant';

export const onConnectAction = createAction(ON_CONNECT);
export const sendMessageAction = createAction(SEND_MESSAGE);
export const onDisconnectAction = createAction(ON_DISCONNECT);

/**
 * 连接到后台
 * @param socketUtil
 * @returns {function(*)}
 */
export function connectToServer(socketUtil) {
  return (dispatch) => {
    socketUtil.attachConnectEvent((msg) => {
      console.log(msg);
      if (msg.code === 1) {
        dispatch(onConnectAction());
        message.success('连接成功!');
      } else {
        message.error('连接失败!');
      }
    });
  };
}


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

/**
 * 从后台断开
 * @param socketUtil
 * @returns {function(*)}
 */
export function disConnectFromServer(socketUtil) {
  return (dispatch) => {
    socketUtil.attachDisconnectEvent((msg) => {
      console.log(msg);
      if (msg.code === 1) {
        dispatch(onDisconnectAction());
        message.success('断开成功!');
      } else {
        message.error('断开失败!');
      }
    });
  };
}
