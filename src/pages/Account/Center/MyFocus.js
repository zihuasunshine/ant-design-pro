import React, { PureComponent } from 'react';
import { List, Row, Col, Tag } from 'antd';
import { connect } from 'dva';
import momont from 'moment';
import styles from './Questions.less';

const colLayout1 = {xs:24, sm: 24, md: 20, lg: 20, xl: 20, xxl: 20};
const colLayout2 = {xs:24, sm: 24, md: 4, lg: 4, xl: 4, xxl:4};

@connect(({center}) => ({
  center,
}))
class Center extends PureComponent {

  state = {
    listData: []
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'center/getMyFocus',
      params: {
        state: -1
      }
    }).then(() => {
      const { center: { myFocusRes } } = this.props;
      const listData = myFocusRes && myFocusRes.code===200 ? myFocusRes.data.list :[];
      this.setState({ listData });
    });
  }

  render() {
    const { listData } = this.state;
    return (
      <List
        size="large"
        className={styles.articleList}
        rowKey="id"
        itemLayout="vertical"
        dataSource={listData}
        renderItem={item => (
          <List.Item
            key={item.id}
          >
            <List.Item.Meta
              title={
                <Row>
                  <Col {...colLayout1}>
                    {item.state !== 5? 
                      (<a className={styles.listItemMetaTitle} href={`/question/answer/${item.id}`}>{item.title}</a>) : 
                      (<span className={styles.listItemMetaTitle}>{item.title}</span>) }
                  </Col>
                  <Col {...colLayout2}>
                    <span className={styles.listItemMetaTitle}>{momont(item.addTime).format('YYYY-MM-DD HH:mm')}</span>
                  </Col>
                </Row>
              }
            />
          </List.Item>
        )}
      />
    );
  }
}

export default Center;
