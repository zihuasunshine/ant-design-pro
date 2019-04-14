import React, { PureComponent } from 'react';
import router from 'umi/router';
import { List, Row, Col, Tag, Icon } from 'antd';
import { connect } from 'dva';
import momont from 'moment';
import styles from './Questions.less';

const colLayout1 = {xs:24, sm: 24, md: 18, lg: 18, xl: 18, xxl: 18};
const colLayout2 = {xs:24, sm: 24, md: 6, lg: 6, xl: 6, xxl:68};
const state = [{
  color: 'blue',
  name: '待审核',
}, {
  color: 'blue',
  name: '待回答',
}, {
  color: 'green',
  name: '已回答',
}, {
  color: 'blue',
  name: '待完善',
}, {
  color: 'red',
  name: '审核不通过',
}, {
  color: 'red',
  name: '已删除',
}];

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

  handleEdit = (item) => {
    router.push({
      pathname: '/question',
      state: item
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
            <Row>
              <Col {...colLayout1}>
                {item.state !== 5? 
                  (<a className={styles.listItemMetaTitle} href={`/question/answer/${item.id}`}>{item.title}</a>) : 
                  (<span className={styles.listItemMetaTitle}>{item.title}</span>) } 
                  {item.state === 0 || item.state === 4? <Icon title='重新编辑' type='edit' className={styles.re_edit} onClick={() => this.handleEdit(item)}/> : null }
              </Col>
              <Col {...colLayout2}>
                <span className={styles.listItemMetaTitle}>{item.bestAnswer==0?'未回答':'已回答'} | {momont(item.addTime).format('YYYY-MM-DD HH:mm')}</span>
              </Col>
              <Col span={24} className={styles.margin_top}>
                <Tag color={state[item.state].color}>{state[item.state].name}</Tag>
              </Col>
            </Row>
          </List.Item>
        )}
      />
    );
  }
}

export default Center;
