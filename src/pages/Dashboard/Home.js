import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import { Row, Col, Tabs } from 'antd';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import styles from './Home.less';

const TabPane = Tabs.TabPane;

@connect(({ loading, user, project }) => ({
  listLoading: loading.effects['list/fetch'],
  currentUser: user.currentUser.data,
  currentUserLoading: loading.effects['user/fetchCurrent'],
  project,
  projectLoading: loading.effects['project/fetchNotice'],
}))
class Home extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'project/fetchNotice',
    });
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
    const { children } = this.props;

    return (
      <Fragment>
        <div className={styles.banner} />
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
