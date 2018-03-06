/**
 * 会话组件Container
 * Created by tianrenjie on 2018/3/6
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Dialog from '../component/Dialog';

class DialogConatainer extends React.Component {
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
