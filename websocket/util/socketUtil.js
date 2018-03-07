/**
 * 服务端socket
 * Created by tanrenjie on 2018/3/7
 */
var io = require('socket.io');

function socketUtil(server) {
  this.socket = io(server);
}
socketUtil.prototype.listenConnection = function () {

};
socketUtil.prototype.listenMessage = function () {
  
};
socketUtil.prototype.listenDisconnection = function () {
  
};

module.exports = socketUtil;
