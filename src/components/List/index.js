import React, { PureComponent, Fragment } from 'react';
import { List, Row, Col, Tag, Pagination } from 'antd';
import { connect } from 'dva';
import momont from 'moment';
import styles from './style.less';

const colLayout1 = {xs:24, sm: 24, md: 19, lg: 19, xl: 19, xxl: 19};
const colLayout2 = {xs:24, sm: 24, md: 5, lg: 5, xl: 5, xxl:5};
const pageSize = 10;

@connect(({center}) => ({
  center,
}))
class Center extends PureComponent {

  pager = {
    pageno: 1,
    pageSize
  }
  state = {
    listData: [],
    total: 0,
  }

  componentDidMount() {
    this.getDataSource();
  }

  handleChange = (page, pageSize) => {
    this.pager = {
      pageno: page,
      pageSize
    }
    this.getDataSource();
  }

  getDataSource = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'center/getMyPlease',
      params: {
        state: -1,
        ...this.pager
      }
    }).then(() => {
      const { center: { myPleaseRes } } = this.props;
      let listData = [], total = 0;
      if(myPleaseRes && myPleaseRes.code===200 ) {
        listData =  myPleaseRes.data.list;
        total = myPleaseRes.data.total;
      }
      this.setState({ total, listData });
    });
  }

  render() {
    const { listData, total } = this.state;
    return (
      <Fragment>
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
                        (<a className={styles.listItemMetaTitle} href={`/question/answer/${item.questionId}`}>{item.title}</a>) : 
                        (<span className={styles.listItemMetaTitle}>{item.title}</span>) }
                    </Col>
                    <Col {...colLayout2} className={styles.text_right}>
                      <span className={styles.listItemMetaTitle}>{momont(item.addTime).format('YYYY-MM-DD HH:mm')}</span>
                    </Col>
                  </Row>
                }
              />
            </List.Item>
          )}
        />
        <div className={styles.pagination_wrapper}>
          <Pagination 
            defaultCurrent={1} 
            total={total} 
            hideOnSinglePage={true} 
            onChange={this.handleChange}/>
        </div>
      </Fragment>
    );
  }
}

export default Center;
