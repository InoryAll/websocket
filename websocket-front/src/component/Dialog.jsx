/**
 * 会话组件
 * Created by tianrenjie on 2018/3/5
 */
import React, { PropTypes } from 'react';
import { Row, Col, Card, Form, Input, Button } from 'antd';
import './Dialog.less';

const FormItem = Form.Item;
const { TextArea } = Input;
class Dialog extends React.Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="wapper">
        <Card className="dialog-card">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('content', {
                initialValue: '请在下方输入...',
              })(
                <TextArea rows={26} className="dialog-content" disabled="true" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('message', {
                initialValue: '',
              })(
                <Row>
                  <Col span={19}>
                    <Input rows={28} className="dialog-mesasge" placeholder="请输入消息..." />
                  </Col>
                  <Col span={4} offset={1}>
                    <Button type="primary">发送</Button>
                  </Col>
                </Row>
              )}
            </FormItem>
          </Form>
        </Card>
      </div>);
  }
}

export default Form.create()(Dialog);
