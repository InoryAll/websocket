/**
 * 服务端socket
 * Created by tianrenjie on 2018/3/7
 */
var io = require('socket.io');

function SocketUtil(server) {
  this.socket = io(server);
}
SocketUtil.prototype.listenConnection = function (server) {
  io(server).sockets.on('connection', function (socket) {
    socket.on('connect', function () {
      console.log('connection has been created.');
      // socket.emit('connecting', { code: 1, message: '连接成功!' });
    });
    socket.on('message', function (data) {
      console.log('data has been received %s',data);
    });
    socket.on('disconnect', function () {
      console.log('connection has been canceled.');
      // socket.emit('disconnected', { code: 1, message: '断开成功!' });
    });
  });
};

module.exports = SocketUtil;
