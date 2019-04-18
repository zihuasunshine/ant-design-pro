import React, { PureComponent, Fragment } from 'react';
import { List, Row, Col, Tag, Pagination } from 'antd';
import momont from 'moment';
import styles from './Questions.less';

const colLayout1 = {xs:24, sm: 24, md: 19, lg: 19, xl: 19, xxl: 19};
const colLayout2 = {xs:24, sm: 24, md: 5, lg: 5, xl: 5, xxl:5};
const pageSize = 10;

class ItemList extends PureComponent {

  handleChange = (page, pageSize) => {
    const { onChange } = this.props;
    onChange(page, pageSize);
  }

  render() {
    const { listData, loading, total } = this.props;
    return (
      <Fragment>
        <List
          size="large"
          loading={loading}
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

export default ItemList;
