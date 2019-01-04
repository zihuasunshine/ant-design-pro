import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import Link from 'umi/link';
import { Row, Col, Tabs, Card, Avatar, Select, Tag } from 'antd';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import Article from './Articles';
import styles from './Home.less';

const TabPane = Tabs.TabPane;
const Option = Select.Option;
const { Meta } = Card;
const colLayout = {xs: 24, sm: 24, md:12, lg: 12, xl: 6, xl: 6, xxl: 6 }
const colLayout1 = {xs:6, sm:6, md: 6, lg: 6, xl: 6, xl: 6, xxl: 6};
const colLayout2 = {xs:18, sm:18, md: 18, lg: 18, xl: 18, xl: 18, xxl: 18};
const img = "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png";

function onChange(value) {
  console.log(value);
}

@connect(({ home, loading }) => ({
  home,
  listLoading: loading.effects['list/fetch'],
}))
class Home extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      options1: [{id: 1, name:'全部问题'}],
      options2: [],
      options3: [],
      options4: [],
      lastOption: '',
    },
    this.question = '',
    this.qtype = 1,
    this.pager = {
      page: 1,
      size: 10,
    }
  }

  componentDidMount() {
    // 获取文章列表
    const { dispatch } = this.props;
    dispatch({
      type: 'home/articleList'
    });
    //this.getCategory(1, {}, 1);
  }

 

  article = (item) => {
    return (
      <div>
        <Link to={`/home/article/${item.id}`}>
          <Row className={styles.article_box}>
            <Col {...colLayout1}>
              <div style={{backgroundImage: item.img?`url(${item.img})`:`url(${img})`}} className={styles.article_img}></div>
            </Col>
            <Col {...colLayout2}>
              <div className={styles.article_text}>
                <Link className={styles.a} to={`/home/article/${item.id}`}>{item.title}</Link>
                <div className={styles.source}><span>来源：{item.source}</span></div>
              </div>
            </Col>
          </Row>
        </Link>
      </div>
     
    )
  }

  articles = (articlelistRes) =>{
    return (
      <div className={styles.article_container}>
          <Row>
          {
            articlelistRes && articlelistRes.data.map((item, index) => {
              if(index !== 0){
                return <Col key={item.id} {...colLayout} className={styles.article_col}>{this.article(item)}</Col>
              }
            })
          }
          </Row>
      </div>
    )
  }

  onTabChange = key => {
    const { match } = this.props;
    switch (key) {
      case 'new':
        router.push(`${match.url}/new`);
        break;
      case 'hot':
        router.push(`${match.url}/hot`);
        break;
      case 'discuss':
        router.push(`${match.url}/discuss`);
        break;
      default:
        break;
    }
  };

  render() {
    const { children, home: { articlelistRes }} = this.props;
    const { options1, options2, options3, options4, lastOption } = this.state;
    return (
      <Fragment>
        <GridContent className={styles.userCenter}>
        {/*
          <div className={styles.banner}>
          { this.articles(articlelistRes)}
          </div>
        */}
       {/*
          <Row gutter={24}>
            <Col lg={24} md={24}>
              <Article />
              <div className={styles.tabs}>
                <Tabs onChange={this.onTabChange} type="card">
                  <TabPane tab="新问题" key="new">
                    {children}
                  </TabPane>
                  <TabPane tab="热门问题" key="hot">
                    {children}
                  </TabPane>
                  <TabPane tab="神讨论" key="discuss">
                    {children}
                  </TabPane>
                </Tabs>
              </div>
            </Col>
          </Row>*/}
          <Article />
        </GridContent>
      </Fragment>
    );
  }
}

export default Home;
