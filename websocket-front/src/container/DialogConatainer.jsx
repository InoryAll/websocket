/**
 * 会话组件Container
 * Created by tianrenjie on 2018/3/6
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import SocketUtil from '../util/socketUtil';
import Dialog from '../component/Dialog';

const linkToServer = () => {
  const socket = new SocketUtil('ws://127.0.0.1:3000');
  socket.initAttrs();
  socket.initEvents((msg) => {
    // 连接成功的回调
  }, (msg) => {
    // 接收到信息的回调
  }, (msg) => {
    // 连接断开的回调
  });
};

class DialogConatainer extends React.Component {
  static propTypes = {};
  componentWillMount() {
  }
  render() {
    return (
      <Dialog
        {...this.props}
      />);
  }
}

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DialogConatainer);
