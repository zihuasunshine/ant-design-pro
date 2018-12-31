import React, { PureComponent } from 'react';
import { List, Row, Col } from 'antd';
import { connect } from 'dva';
import momont from 'moment';
import styles from './Questions.less';

const colLayout1 = {xs:24, sm: 24, md: 18, lg: 18, xl: 18, xxl: 18};
const colLayout2 = {xs:24, sm: 24, md: 6, lg: 6, xl: 6, xxl:68};

@connect(({center}) => ({
  center,
}))
class Center extends PureComponent {

  componentDidMount() {
    const user = JSON.parse(sessionStorage.getItem('user'));
    const { dispatch } = this.props;
    dispatch({
      type: 'center/getMyQuestion',
      params: {
        userId: user.uid
      }

    });
  }

  render() {
    const { center: { myQuestionRes } } = this.props;
    const listData = myQuestionRes && myQuestionRes.code===200 ? myQuestionRes.data.list :[];

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
                  <Col {...colLayout1}><a className={styles.listItemMetaTitle} href={item.title}>{item.title}</a></Col>
                  <Col {...colLayout2}>
                    <span className={styles.listItemMetaTitle}>{item.bestAnswer==0?'未回答':'已回答'}|{momont(item.addTime).format('YYYY-MM-DD HH:mm')}</span>
                  </Col>
                </Row>
              }
              description={
               <span>{item.detail}</span>
              }
            />
          </List.Item>
        )}
      />
    );
  }
}

export default Center;
