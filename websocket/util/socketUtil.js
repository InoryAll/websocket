/**
 * 服务端socket
 * Created by tanrenjie on 2018/3/7
 */
var io = require('socket.io');

function SocketUtil(server) {
  this.socket = io(server);
}
SocketUtil.prototype.listenConnection = function () {
  this.socket.on('connection', function () {
    this.on('connect', function () {
      console.log('connection has been created.');
    });
    this.on('message', function (data) {
      console.log('data has been received %s',data);
    });
    this.on('disconnect', function () {
      console.log('connection has been canceled.');
    });
  });
};

module.exports = SocketUtil;
