/**
 * 会话组件Container
 * Created by tianrenjie on 2018/3/6
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import SocketUtil from '../util/socketUtil';
import Dialog from '../component/Dialog';
import { messageSelector } from '../selector/selector';
import { connectToServer, disConnectFromServer } from '../action/action';

const linkToServer = () => {
  const socketUtil = new SocketUtil('ws://127.0.0.1:3000');
  return socketUtil;
};

class DialogConatainer extends React.Component {
  static propTypes = {
    message: PropTypes.object.isRequired,
    connectToServer: PropTypes.func.isRequired,
    disConnectFromServer: PropTypes.func.isRequired,
  };
  state = {
    socket: null,
    socketUtil: null,
  };
  componentWillMount() {
    const socketUtil = linkToServer();
    this.setState({
      socketUtil,
    });
    socketUtil.initAttrs((socket) => {
      this.setState({
        socket,
      });
    });
  }
  componentWillUnmount() {
    const { socket, socketUtil } = this.state;
  }
  render() {
    return (
      <Dialog
        socket={this.state.socket}
        socketUtil={this.state.socketUtil}
        {...this.props}
      />);
  }
}

function mapStateToProps(state) {
  return {
    message: messageSelector(state),
  };
}

const mapDispatchToProps = {
  connectToServer,
  disConnectFromServer,
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogConatainer);
