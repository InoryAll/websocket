/**
 * 会话组件
 * Created by tianrenjie on 2018/3/5
 */
import React, { PropTypes } from 'react';
import { Row, Col, Card, Form, Input, Button, message, notification } from 'antd';
import io from 'socket.io-client';
import './Dialog.less';

const FormItem = Form.Item;
const { TextArea } = Input;
class Dialog extends React.Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
    // socket: PropTypes.object,
    // socketUtil: PropTypes.object,
  };
  componentWillMount() {
    // const { socket, socketUtil } = this.props;
    const socket = io.connect('http://127.0.0.1:3000');
    this.setState({
      socket,
    });
    if (socket) {
      socket.on('connect', () => {
        message.success('连接成功!');
      });
      socket.on('message', (data) => {
        notification.info({
          message: '消息通知',
          description: data,
          duration: 4.5,
          placement: 'bottomRight',
        });
      });
      // socket.emit('my');
      // socket.on('disconnect', function () {
      //   console.log('disconnect');
      // });
        // socketUtil.attachDisconnectEvent((msg) => {
        //   if (msg.code === 1) {
        //     message.success('断开成功!');
        //   } else {
        //     message.error('断开失败!');
        //   }
        // });
      // socket.connect();
      // socketUtil.attachConnectEvent((msg) => {
      //   if (msg.code === 1) {
      //     message.success('连接成功!');
      //     this.setState({
      //       connected: true,
      //     });
      //   } else {
      //     message.error('连接失败!');
      //   }
      // });
    }
  }
  componentWillUnmount() {
    const { socket } = this.state;
    socket.emit('disconnectRequest');
    socket.on('disConnectEvent', () => {
      socket.disconnect();
      message.success('断开成功!');
    });
    // socket.emit('disconnectRequest');
    // socket.on('disConnectEvent', function () {
    //   console.log('disconnect!');
    //   socket.disconnect();
    // });
    // const { socket, socketUtil } = this.props;
    // if (socket && socketUtil) {
    //   socket.emit('disconnect');
    //   socketUtil.attachDisconnectEvent((msg) => {
    //     if (msg.code === 1) {
    //       message.success('断开成功!');
    //     } else {
    //       message.error('断开失败!');
    //     }
    //   });
    // }
  }
  handleSubmit = (e) => {
    const { socket } = this.state;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        socket.send(values.message);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="wapper">
        <Card className="dialog-card">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Row>
              <Col span={24}>
                <FormItem>
                  {getFieldDecorator('content', {
                    initialValue: '请在下方输入...',
                  })(
                    <TextArea rows={26} className="dialog-content" disabled="true" />
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={21}>
                <FormItem>
                  {getFieldDecorator('message', {
                    initialValue: '',
                  })(
                    <Input rows={28} className="dialog-mesasge" placeholder="请输入消息..." />
                  )}
                </FormItem>
              </Col>
              <Col span={2} offset={1}>
                <FormItem>
                  <Button type="primary" htmlType="submit">发送</Button>
                </FormItem>
              </Col>
            </Row>
          </Form>
        </Card>
      </div>);
  }
}

export default Form.create()(Dialog);
