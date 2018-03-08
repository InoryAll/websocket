/**
 * socket类，用于实时通信
 * Created by tianrenjie on 2018/3/7
 */
import io from 'socket.io-client';

class SocketUtil {
  constructor(url) {
    this.socket = null;
    this.socketUrl = url;
  }
  initAttrs(callback) {
    this.socket = io.connect(this.socketUrl);
    callback(this.socket);
  }
  // initEvents(connectCallback, messageCallback, disconnectCallback) {
  //   this.socket.on('connect', (msg, connectCallback) => {
  //     connectCallback(msg);
  //   });
  //   this.socket.on('message', (msg, messageCallback) => {
  //     messageCallback(msg);
  //   });
  //   this.socket.on('disconnect', (msg, disconnectCallback) => {
  //     disconnectCallback(msg);
  //   });
  // }
  attachConnectEvent(callback) {
    this.socket.on('connecting', (msg) => {
      callback(msg);
    });
  }
  attachMessageEvent(callback) {
    this.socket.on('messaging', (msg) => {
      callback(msg);
    });
  }
  attachDisconnectEvent(callback) {
    this.socket.on('disconnected', (msg) => {
      callback(msg);
    });
  }
}

export default SocketUtil;
