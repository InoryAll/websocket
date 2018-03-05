/**
 * 会话组件
 * Created by tianrenjie on 2018/3/5
 */
import React, { PropTypes } from 'react';
import { Row, Col, Card } from 'antd';

class Dialog extends React.Component {
  static propTypes = {};
  render() {
    return (
      <div>
        <Row>
          <Col span={12} offset={6}>
            <Card>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
      </div>);
  }
}

export default Dialog;
