/**
 * 会话组件Container
 * Created by tianrenjie on 2018/3/6
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import SocketUtil from '../util/socketUtil';
import Dialog from '../component/Dialog';
import { messageSelector } from '../selector/selector';

const linkToServer = (_this) => {
  const socketUtil = new SocketUtil('ws://127.0.0.1:3000');
  _this.setState({
    socketUtil,
  });
  socketUtil.initAttrs((socket) => {
    _this.setState({
      socket,
    });
  });
};

class DialogConatainer extends React.Component {
  static propTypes = {
    message: PropTypes.object.isRequired,
  };
  state = {
    socket: null,
    socketUtil: null,
  };
  componentWillMount() {
    linkToServer(this);
  }
  render() {
    return (
      <Dialog
        {...this.props}
      />);
  }
}

function mapStateToProps(state) {
  return {
    message: messageSelector(state),
  };
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DialogConatainer);
