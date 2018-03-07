/**
 * socket类，用于实时通信
 * Created by tianrenjie on 2018/3/7
 */
const io = require('socket.io');

class SocketUtil {
  constructor(url) {
    this.socket = null;
    this.socketUrl = url;
  }
  initAttrs() {
    this.socket = io.connect(this.socketUrl);
  }
  initEvents(connectCallback, messageCallback, disconnectCallback) {
    this.socket.on('connect', (msg, connectCallback) => {
      connectCallback(msg);
    });
    this.socket.on('message', (msg, messageCallback) => {
      messageCallback(msg);
    });
    this.socket.on('disconnect', (msg, disconnectCallback) => {
      disconnectCallback(msg);
    });
  }
}

export default SocketUtil;
