import React, { PureComponent, Fragment } from 'react';
import { Row, Col, List, Icon, Tag, Input } from 'antd';
import { connect } from 'dva';
import ArticleListContent from '@/components/ArticleListContent';
import styles from './List.less';

const Search = Input.Search;

@connect(({ list }) => ({
  list,
}))
class Center extends PureComponent {
  render() {
    const colLayout = { xs: 24, sm: 24, md: 12, lg: 6, xl: 6, xxl: 6 };
    const {
      list: { list },
    } = this.props;
    console.log(list);
    const IconText = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    );
    return (
      <Fragment>
        <Row>
          <Col {...colLayout}>
            <Search placeholder="输入关键词" onSearch={value => console.log(value)} enterButton />
          </Col>
        </Row>
        <List
          size="large"
          className={styles.articleList}
          rowKey="id"
          itemLayout="vertical"
          dataSource={list.data}
          renderItem={item => (
            <List.Item
              key={item.id}
              actions={[
                <IconText type="like-o" text={item.like} />,
                <IconText type="message" text={item.message} />,
              ]}
            >
              <List.Item.Meta
                title={''}
                description={
                  ''
                  /*<span>
                    <Tag>Ant Design</Tag>
                    <Tag>设计语言</Tag>
                    <Tag>蚂蚁金服</Tag>
                  </span>*/
                }
              />
              <ArticleListContent data={item} />
            </List.Item>
          )}
        />
      </Fragment>
    );
  }
}

export default Center;
