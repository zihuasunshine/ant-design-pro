import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import Link from 'umi/link';
import { Row, Col, Tabs, Card, Avatar } from 'antd';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import styles from './Home.less';

const TabPane = Tabs.TabPane;
const { Meta } = Card;
const colLayout = {xs: 24, sm: 24, md:12, lg: 12, xl: 6, xl: 6 }
const img = "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png";

@connect(({ home, loading }) => ({
  home,
  listLoading: loading.effects['list/fetch'],
}))
class Home extends PureComponent {

  componentDidMount() {
    // 获取文章列表
    const { dispatch } = this.props;
    dispatch({
      type: 'home/articleList'
    });
  }

  article = (item) => {
    return (
      <Row className={styles.article_box}>
        <Col span={6}>
          <div style={{backgroundImage: item.img?`url(${item.img})`:`url(${img})`}} className={styles.article_img}></div>
        </Col>
        <Col span={18}>
          <div className={styles.article_text}>
            <Link className={styles.a} to={`/home/article/${item.id}`}>{item.title}</Link>
          </div>
        </Col>
      </Row>
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

    return (
      <Fragment>
        <div className={styles.banner}>
          {this.articles(articlelistRes)}
        </div>
        <GridContent className={styles.userCenter}>
          <Row gutter={24}>
            <Col lg={24} md={24}>
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
          </Row>
        </GridContent>
      </Fragment>
    );
  }
}

export default Home;
