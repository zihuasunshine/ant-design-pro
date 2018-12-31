import React, { PureComponent, Fragment } from 'react';
import { Row, Col, List, Icon, Tag, Input, Divider, Pagination } from 'antd';
import { connect } from 'dva';
import ArticleListContent from '@/components/ArticleListContent';
import styles from './Articles.less';

const Search = Input.Search;
const qtypes = {
  new: '1',
  hot: '2',
  discuss: '3',
};

@connect(({ home }) => ({
  home,
}))
class Center extends PureComponent {
  constructor(props) {
    super(props);
    this.question = '';
    (this.qtype = props.route.query.key),
      (this.pager = {
        page: 1,
        size: 10,
      });
  }

  componentDidMount() {
    const { dispatch } = this.props;
    this.getQuestionList();
  }

  handleSerach = value => {
    this.question = value;
    this.getQuestionList();
  };

  getQuestionList = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'home/fetchList',
      params: {
        question: this.question,
        qtype: this.qtype,
        ...this.pager,
      },
    });
  };

  handleChange = (page) =>{
    this.pager = {
      page,
      size: 10
    }
    this.getQuestionList();
  }

  render() {
    const colLayout = { xs: 24, sm: 24, md: 12, lg: 6, xl: 6, xxl: 6 };
    const {
      home: { list },
    } = this.props;
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
            <Search placeholder="输入关键词" onSearch={this.handleSerach} enterButton />
          </Col>
        </Row>
        <List
          //size="large"
          // pagination={{
          //   onChange: (page) => {
          //     console.log(page);
          //   },
          //   pageSize: 6,
          // }}
          className={styles.articleList}
          rowKey="id"
          itemLayout="vertical"
          dataSource={list && list.data ? list.data : []}
          renderItem={item => (
            <List.Item

              key={item.id}
              style={{padding:0}}
              // actions={[
              //   <IconText type="like-o" text={item.like} />,
              //   <IconText type="message" text={item.message} />,
              // ]}
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
              <ArticleListContent data={item} link={`/question/answer/${item.id}`} />
            </List.Item>
          )}
        />
        <div className={styles.page}>
          <Pagination 
            defaultCurrent={1} 
            total={50}
            onChange={this.handleChange}
          />
        </div>
      </Fragment>
    );
  }
}

export default Center;
