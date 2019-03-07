import React, { Component } from 'react';
import { Tabs, Row, Col, Card } from 'antd';
import Table from './Table';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import DataSource from '@/components/dataSource';
import styles from './score.less';

const TabPane = Tabs.TabPane;
const colLayout = {ZS: 24, sm: 24, md: 12, lg: 8, xl: 6, xxl: 6};

class NationalLine extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    }
  }

  setCurrentPage(page) {
    this.setState({
      currentPage: page
    });
  }
  
  render() {
    const { currentPage } = this.state;

    return (
      <GridContent>
        <Tabs>
          <TabPane key='1' tab='自划线高校复试分数线'>
            <div className={styles.table_wrapper}>
              <Table />
            </div>
          </TabPane>
        </Tabs> 
        <Tabs>
          <TabPane key='2' tab='自划线高校学术学位各学科历年复试线'>
            <div className={styles.card_wrapper}>
              <div className={styles.page_wrapper}>
                {
                  [1,2,3,4].map((item, index) => {
                    return (
                      <div 
                        key={`page${index}`} 
                        className={[styles.page, currentPage === item? styles.selected:''].join(' ')} 
                        onClick={() => {this.setCurrentPage(item)}}>
                        {item}
                      </div>
                    )
                  })
                }
              </div>
              <Row gutter={8}>
                <Col {...colLayout} style={{display: currentPage === 1? 'block':'none'}}>
                  <Card title="北京大学" bordered={false} className={styles.card}>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180515/1687462579.html" target="_blank">哲学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180515/1687462579-2.html" target="_blank">经济学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180515/1687462579-3.html" target="_blank">法学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180515/1687462579-4.html" target="_blank">教育学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180515/1687462579-5.html" target="_blank">文学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180515/1687462579-6.html" target="_blank">历史学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180515/1687462579-7.html" target="_blank">理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180515/1687462579-8.html" target="_blank">工学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180515/1687462579-9.html" target="_blank">管理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180515/1687462579-10.html" target="_blank">艺术学</a>
                  </Card>
                </Col>
                <Col {...colLayout} style={{display: currentPage === 1? 'block':'none'}}>
                  <Card title="中国人民大学" bordered={false} className={styles.card}>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180516/1687787143.html" target="_blank">哲学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180516/1687787143-2.html" target="_blank">经济学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180516/1687787143-3.html" target="_blank">法学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180516/1687787143-4.html" target="_blank">教育学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180516/1687787143-5.html" target="_blank">文学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180516/1687787143-6.html" target="_blank">历史学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180516/1687787143-7.html" target="_blank">理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180516/1687787143-8.html" target="_blank">工学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180516/1687787143-9.html" target="_blank">医学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180516/1687787143-10.html" target="_blank">管理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180516/1687787143-11.html" target="_blank">艺术学</a>
                  </Card>
                </Col>
                <Col {...colLayout} style={{display: currentPage === 1? 'block':'none'}}>
                  <Card title="清华大学" bordered={false} className={styles.card}>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180516/1687738903.html" target="_blank">哲学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180516/1687738903-2.html" target="_blank">经济学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180516/1687738903-3.html" target="_blank">法学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180516/1687738903-4.html" target="_blank">教育学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180516/1687738903-5.html" target="_blank">文学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180516/1687738903-6.html" target="_blank">历史学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180516/1687738903-7.html" target="_blank">理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180516/1687738903-8.html" target="_blank">工学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180516/1687738903-9.html" target="_blank">医学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180516/1687738903-10.html" target="_blank">管理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180516/1687738903-11.html" target="_blank">艺术学</a>
                  </Card>
                </Col>
                <Col {...colLayout} style={{display: currentPage === 1? 'block':'none'}}>
                  <Card title="北京航空航天大学" bordered={false} className={styles.card}>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180517/1688547515.html" target="_blank">哲学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180517/1688547515-2.html" target="_blank">经济学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180517/1688547515-3.html" target="_blank">法学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180517/1688547515-4.html" target="_blank">教育学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180517/1688547515-5.html" target="_blank">文学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180517/1688547515-6.html" target="_blank">理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180517/1688547515-7.html" target="_blank">工学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180517/1688547515-8.html" target="_blank">医学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180517/1688547515-9.html" target="_blank">管理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180517/1688547515-10.html" target="_blank">艺术学</a>
                  </Card>
                </Col>
                <Col {...colLayout} style={{display: currentPage === 1? 'block':'none'}}>
                  <Card title="北京理工大学" bordered={false} className={styles.card}>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180517/1688547515.html" target="_blank">哲学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180517/1688547515-2.html" target="_blank">经济学</a> 
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180517/1688547515-3.html" target="_blank">法学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180517/1688547515-4.html" target="_blank">教育学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180517/1688547515-5.html" target="_blank">文学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180517/1688547515-6.html" target="_blank">理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180517/1688547515-7.html" target="_blank">工学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180517/1688547515-8.html" target="_blank">医学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180517/1688547515-9.html" target="_blank">管理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180517/1688547515-10.html" target="_blank">艺术学</a>
                  </Card>
                </Col>
                <Col {...colLayout} style={{display: currentPage === 1? 'block':'none'}}>
                  <Card title="中国农业大学" bordered={false} className={styles.card}>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180518/1689506740.html" target="_blank">哲学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180518/1689506740-2.html" target="_blank">经济学</a> 
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180518/1689506740-3.html" target="_blank">法学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180518/1689506740-4.html" target="_blank">文学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180518/1689506740-5.html" target="_blank">理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180518/1689506740-6.html" target="_blank">工学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180518/1689506740-7.html" target="_blank">农学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180518/1689506740-8.html" target="_blank">管理学</a>
                  </Card>
                </Col>
                <Col {...colLayout} style={{display: currentPage === 1? 'block':'none'}}>
                  <Card title="北京师范大学" bordered={false} className={styles.card}>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1689746692.html" target="_blank">哲学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1689746692-2.html" target="_blank">经济学</a> 
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1689746692-3.html" target="_blank">法学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1689746692-4.html" target="_blank">教育学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1689746692-5.html" target="_blank">文学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1689746692-6.html" target="_blank">历史学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1689746692-7.html" target="_blank">理学</a> 
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1689746692-8.html" target="_blank">工学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1689746692-9.html" target="_blank">农学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1689746692-10.html" target="_blank">医学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1689746692-11.html" target="_blank">军事学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1689746692-12.html" target="_blank">管理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1689746692-13.html" target="_blank">艺术学</a>
                  </Card>
                </Col>
                <Col {...colLayout} style={{display: currentPage === 1? 'block':'none'}}>
                  <Card title="南开大学" bordered={false} className={styles.card}>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1689746692.html" target="_blank">哲学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1689746692-2.html" target="_blank">经济学</a> 
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1689746692-3.html" target="_blank">法学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1689746692-4.html" target="_blank">教育学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1689746692-5.html" target="_blank">文学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1689746692-6.html" target="_blank">历史学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1689746692-7.html" target="_blank">理学</a> 
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1689746692-8.html" target="_blank">工学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1689746692-9.html" target="_blank">农学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1689746692-10.html" target="_blank">医学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1689746692-11.html" target="_blank">军事学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1689746692-12.html" target="_blank">管理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1689746692-13.html" target="_blank">艺术学</a>
                  </Card>
                </Col>
                <Col {...colLayout} style={{display: currentPage === 2? 'block':'none'}}>
                  <Card title="天津大学" bordered={false} className={styles.card}>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1690113055.html" target="_blank">哲学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1690113055-2.html" target="_blank">经济学</a> 
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1690113055-3.html" target="_blank">法学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1690113055-4.html" target="_blank">教育学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1690113055-5.html" target="_blank">文学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1690113055-6.html" target="_blank">理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1690113055-7.html" target="_blank">工学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1690113055-8.html" target="_blank">医学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1690113055-9.html" target="_blank">管理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1690113055-10.html" target="_blank">艺术学</a>
                  </Card>
                </Col>
                <Col {...colLayout} style={{display: currentPage === 2? 'block':'none'}}>
                  <Card title="大连理工大学" bordered={false} className={styles.card}>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1690268574.html" target="_blank">哲学</a> 
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1690268574-2.html" target="_blank">经济学</a> 
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1690268574-3.html" target="_blank">法学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1690268574-4.html" target="_blank">教育学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1690268574-5.html" target="_blank">文学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1690268574-6.html" target="_blank">理学</a> 
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1690268574-7.html" target="_blank">工学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1690268574-8.html" target="_blank">管理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1690268574-9.html" target="_blank">艺术学</a>
                  </Card>
                </Col>
                <Col {...colLayout} style={{display: currentPage === 2? 'block':'none'}}>
                  <Card title="东北大学" bordered={false} className={styles.card}>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690413596.html" target="_blank">哲学</a> 
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690413596-2.html" target="_blank">经济学</a> 
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690413596-3.html" target="_blank">法学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690413596-4.html" target="_blank">教育学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690413596-5.html" target="_blank">文学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690413596-6.html" target="_blank">理学</a> 
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690413596-7.html" target="_blank">工学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690413596-8.html" target="_blank">管理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690413596-9.html" target="_blank">艺术学</a>
                  </Card>
                </Col>
                <Col {...colLayout} style={{display: currentPage === 2? 'block':'none'}}>
                  <Card title="吉林大学" bordered={false} className={styles.card}>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412689.html" target="_blank">哲学</a> 
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412689-2.html" target="_blank">经济学</a> 
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412689-3.html" target="_blank">法学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412689-4.html" target="_blank">教育学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412689-5.html" target="_blank">文学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412689-6.html" target="_blank">历史学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412689-7.html" target="_blank">理学</a> 
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412689-8.html" target="_blank">工学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412689-9.html" target="_blank">管理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412689-10.html" target="_blank">艺术学</a></Card>
                </Col>
                <Col {...colLayout} style={{display: currentPage === 2? 'block':'none'}}>
                  <Card title="哈尔滨工业大学" bordered={false} className={styles.card}>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412690.html" target="_blank">哲学</a> 
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412690-2.html" target="_blank">经济学</a> 
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412690-4.html" target="_blank">法学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412690-9.html" target="_blank">教育学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412690-5.html" target="_blank">文学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412690-6.html" target="_blank">理学</a> 
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412690-7.html" target="_blank">工学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412690-3.html" target="_blank">管理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412690-8.html" target="_blank">艺术学</a>
                  </Card>
                </Col>
                <Col {...colLayout} style={{display: currentPage === 2? 'block':'none'}}>
                  <Card title="复旦大学" bordered={false} className={styles.card}>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412689.html" target="_blank">哲学</a> 
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412689-2.html" target="_blank">经济学</a> 
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412689-3.html" target="_blank">法学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412689-4.html" target="_blank">教育学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412689-5.html" target="_blank">文学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412689-6.html" target="_blank">历史学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412689-7.html" target="_blank">理学</a> 
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412689-8.html" target="_blank">工学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412689-9.html" target="_blank">管理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412689-10.html" target="_blank">艺术学</a>
                  </Card>
                </Col>
                <Col {...colLayout} style={{display: currentPage === 2? 'block':'none'}}>
                  <Card title="同济大学" bordered={false} className={styles.card}>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412683.html" target="_blank">哲学</a> 
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412683-2.html" target="_blank">经济学</a> 
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412683-3.html" target="_blank">法学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412683-4.html" target="_blank">教育学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412683-5.html" target="_blank">文学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412683-6.html" target="_blank">理学</a> 
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412683-7.html" target="_blank">工学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412683-8.html" target="_blank">医学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412683-9.html" target="_blank">管理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412683-10.html" target="_blank">艺术学</a>
                  </Card>
                </Col>
                <Col {...colLayout} style={{display: currentPage === 2? 'block':'none'}}>
                  <Card title="上海交通大学" bordered={false} className={styles.card}>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412676.html" target="_blank">哲学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412676-2.html" target="_blank">经济学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412676-3.html" target="_blank">法学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412676-4.html" target="_blank">教育学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412676-5.html" target="_blank">文学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412676-6.html" target="_blank">历史学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412676-7.html" target="_blank">理学</a> 
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412676-8.html" target="_blank">工学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412676-9.html" target="_blank">医学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412676-10.html" target="_blank">管理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412676-11.html" target="_blank">艺术学</a>
                  </Card>
                </Col>
                <Col {...colLayout} style={{display: currentPage === 3? 'block':'none'}}>
                  <Card title="南京大学" bordered={false} className={styles.card}>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412676.html" target="_blank">哲学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412676-2.html" target="_blank">经济学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412676-3.html" target="_blank">法学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412676-4.html" target="_blank">教育学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412676-5.html" target="_blank">文学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412676-6.html" target="_blank">历史学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412676-7.html" target="_blank">理学</a> 
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412676-8.html" target="_blank">工学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412676-9.html" target="_blank">医学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412676-10.html" target="_blank">管理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412676-11.html" target="_blank">艺术学</a>
                  </Card>
                </Col>
                <Col {...colLayout} style={{display: currentPage === 3? 'block':'none'}}>
                  <Card title="东南大学" bordered={false} className={styles.card}>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412674.html" target="_blank">哲学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412674-2.html" target="_blank">经济学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412674-3.html" target="_blank">法学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412674-4.html" target="_blank">教育学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412674-5.html" target="_blank">文学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412674-6.html" target="_blank">理学</a> 
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412674-7.html" target="_blank">工学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412674-8.html" target="_blank">医学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412674-9.html" target="_blank">管理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412674-10.html" target="_blank">艺术学</a>
                  </Card>
                </Col>
                <Col {...colLayout} {...colLayout} style={{display: currentPage === 3? 'block':'none'}}>
                  <Card title="浙江大学" bordered={false} className={styles.card}>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412672.html" target="_blank">哲学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412672-2.html" target="_blank">经济学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412672-3.html" target="_blank">法学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412672-4.html" target="_blank">教育学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412672-5.html" target="_blank">文学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412672-11.html" target="_blank">历史学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412672-6.html" target="_blank">理学</a> 
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412672-7.html" target="_blank">工学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412672-12.html" target="_blank">农学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412672-8.html" target="_blank">医学</a> 
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412672-9.html" target="_blank">管理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412672-10.html" target="_blank">艺术学</a>
                  </Card>
                </Col>
                <Col {...colLayout} {...colLayout} style={{display: currentPage === 3? 'block':'none'}}>
                  <Card title="中国科学技术大学" bordered={false} className={styles.card}>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412670.html" target="_blank">哲学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412670-2.html" target="_blank">法学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412670-3.html" target="_blank">理学</a> 
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412670-4.html" target="_blank">工学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412670-5.html" target="_blank">管理学</a>
                  </Card>
                </Col>
                <Col {...colLayout} style={{display: currentPage === 3? 'block':'none'}}>
                  <Card title="厦门大学" bordered={false} className={styles.card}>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412396.html" target="_blank">哲学</a> 
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412396-2.html" target="_blank">经济学</a> 
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412396-3.html" target="_blank">法学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412396-4.html" target="_blank">教育学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412396-5.html" target="_blank">文学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412396-7.html" target="_blank">历史学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412396-8.html" target="_blank">理学</a> 
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412396-9.html" target="_blank">工学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412396-10.html" target="_blank">医学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412396-11.html" target="_blank">管理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690412396-6.html" target="_blank">艺术学</a>
                  </Card>
                </Col>
                <Col {...colLayout} style={{display: currentPage === 3? 'block':'none'}}>
                  <Card title="山东大学" bordered={false} className={styles.card}>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690402232.html" target="_blank">哲学</a> 
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690402232-2.html" target="_blank">经济学</a> 
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690402232-3.html" target="_blank">法学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690402232-4.html" target="_blank">教育学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690402232-5.html" target="_blank">文学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690402232-6.html" target="_blank">历史学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690402232-7.html" target="_blank">理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690402232-8.html" target="_blank">工学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690402232-9.html" target="_blank">医学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690402232-10.html" target="_blank">管理学</a><a href="https://yz.chsi.com.cn/kyzx/other/201805/20180522/1690402232-11.html" target="_blank">艺术学</a>
                  </Card>
                </Col>
                <Col {...colLayout} style={{display: currentPage === 3? 'block':'none'}}>
                  <Card title="湖南大学" bordered={false} className={styles.card}>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201806/20180604/1693474972.html" target="_blank">哲学</a> 
                    <a href="https://yz.chsi.com.cn/kyzx/other/201806/20180604/1693474972-2.html" target="_blank">经济学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201806/20180604/1693474972-3.html" target="_blank">法学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201806/20180604/1693474972-4.html" target="_blank">教育学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201806/20180604/1693474972-5.html" target="_blank">文学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201806/20180604/1693474972-6.html" target="_blank">历史学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201806/20180604/1693474972-7.html" target="_blank">理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201806/20180604/1693474972-8.html" target="_blank">工学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201806/20180604/1693474972-9.html" target="_blank">医学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201806/20180604/1693474972-10.html" target="_blank">管理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201806/20180604/1693474972-11.html" target="_blank">艺术学</a>
                  </Card>
                </Col>
                <Col {...colLayout} style={{display: currentPage === 3? 'block':'none'}}>
                  <Card title="中南大学" bordered={false} className={styles.card}>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201806/20180601/1693103663.html" target="_blank">哲学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201806/20180601/1693103663-2.html" target="_blank">经济学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201806/20180601/1693103663-3.html" target="_blank">法学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201806/20180601/1693103663-4.html" target="_blank">教育学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201806/20180601/1693103663-5.html" target="_blank">文学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201806/20180601/1693103663-6.html" target="_blank">历史学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201806/20180601/1693103663-7.html" target="_blank">理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201806/20180601/1693103663-8.html" target="_blank">工学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201806/20180601/1693103663-9.html" target="_blank">医学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201806/20180601/1693103663-10.html" target="_blank">管理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201806/20180601/1693103663-11.html" target="_blank">艺术学</a>
                  </Card>
                </Col>
                <Col {...colLayout} style={{display: currentPage === 4? 'block':'none'}}>
                  <Card title="中山大学" bordered={false} className={styles.card}>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180530/1692297643.html" target="_blank">哲学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180530/1692297643-2.html" target="_blank">经济学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180530/1692297643-3.html" target="_blank">法学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180530/1692297643-4.html" target="_blank">教育学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180530/1692297643-5.html" target="_blank">文学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180530/1692297643-6.html" target="_blank">历史学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180530/1692297643-7.html" target="_blank">理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180530/1692297643-8.html" target="_blank">工学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180530/1692297643-12.html" target="_blank">农学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180530/1692297643-9.html" target="_blank">医学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180530/1692297643-10.html" target="_blank">管理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180530/1692297643-11.html" target="_blank">艺术学</a>
                  </Card>
                </Col>
                <Col {...colLayout} style={{display: currentPage === 4? 'block':'none'}}>
                  <Card title="华南理工大学" bordered={false} className={styles.card}>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180530/1692101413.html" target="_blank">哲学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180530/1692101413-2.html" target="_blank">经济学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180530/1692101413-3.html" target="_blank">法学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180530/1692101413-4.html" target="_blank">教育学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180530/1692101413-5.html" target="_blank">文学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180530/1692101413-6.html" target="_blank">理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180530/1692101413-7.html" target="_blank">工学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180530/1692101413-8.html" target="_blank">医学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180530/1692101413-9.html" target="_blank">管理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180530/1692101413-10.html" target="_blank">艺术学</a>
                  </Card>
                </Col>
                <Col {...colLayout} style={{display: currentPage === 4? 'block':'none'}}>
                  <Card title="四川大学" bordered={false} className={styles.card}>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180529/1691950324.html" target="_blank">哲学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180529/1691950324-2.html" target="_blank">经济学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180529/1691950324-3.html" target="_blank">法学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180529/1691950324-4.html" target="_blank">教育学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180529/1691950324-5.html" target="_blank">文学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180529/1691950324-6.html" target="_blank">历史学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180529/1691950324-7.html" target="_blank">理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180529/1691950324-8.html" target="_blank">工学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180529/1691950324-9.html" target="_blank">农学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180529/1691950324-10.html" target="_blank">医学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180529/1691950324-11.html" target="_blank">管理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180529/1691950324-12.html" target="_blank">艺术学</a>
                  </Card>
                </Col>
                <Col {...colLayout} style={{display: currentPage === 4? 'block':'none'}}>
                  <Card title="重庆大学" bordered={false} className={styles.card}>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180528/1691647626.html" target="_blank">哲学</a><a href="https://yz.chsi.com.cn/kyzx/other/201805/20180528/1691647626-2.html" target="_blank">经济学</a><a href="https://yz.chsi.com.cn/kyzx/other/201805/20180528/1691647626-3.html" target="_blank">法学</a><a href="https://yz.chsi.com.cn/kyzx/other/201805/20180528/1691647626-4.html" target="_blank">教育学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180528/1691647626-5.html" target="_blank">文学</a><a href="https://yz.chsi.com.cn/kyzx/other/201805/20180528/1691647626-6.html" target="_blank">历史学</a><a href="https://yz.chsi.com.cn/kyzx/other/201805/20180528/1691647626-7.html" target="_blank">理学</a><a href="https://yz.chsi.com.cn/kyzx/other/201805/20180528/1691647626-8.html" target="_blank">工学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180528/1691647626-9.html" target="_blank">农学</a><a href="https://yz.chsi.com.cn/kyzx/other/201805/20180528/1691647626-10.html" target="_blank">医学</a><a href="https://yz.chsi.com.cn/kyzx/other/201805/20180528/1691647626-11.html" target="_blank">管理学</a><a href="https://yz.chsi.com.cn/kyzx/other/201805/20180528/1691647626-12.html" target="_blank">艺术学</a>
                  </Card>
                </Col>
                <Col {...colLayout} style={{display: currentPage === 4? 'block':'none'}}>
                  <Card title="电子科技大学" bordered={false} className={styles.card}>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180525/1690851311.html" target="_blank">经济学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180525/1690851311-2.html" target="_blank">法学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180525/1690851311-3.html" target="_blank">教育学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180525/1690851311-4.html" target="_blank">文学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180525/1690851311-5.html" target="_blank">理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180525/1690851311-9.html" target="_blank">工学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180525/1690851311-6.html" target="_blank">医学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180525/1690851311-8.html" target="_blank">军事学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180525/1690851311-7.html" target="_blank">管理学</a>
                  </Card>
                </Col>
                <Col {...colLayout} style={{display: currentPage === 4? 'block':'none'}}>
                  <Card title="西安交通大学" bordered={false} className={styles.card}>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180524/1690680828.html" target="_blank">哲学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180524/1690680828-2.html" target="_blank">经济学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180524/1690680828-3.html" target="_blank">法学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180524/1690680828-4.html" target="_blank">教育学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180524/1690680828-5.html" target="_blank">文学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180524/1690680828-6.html" target="_blank">理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180524/1690680828-7.html" target="_blank">工学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180524/1690680828-8.html" target="_blank">医学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180524/1690680828-9.html" target="_blank">管理学</a>
                  </Card>
                </Col>
                <Col {...colLayout} style={{display: currentPage === 4? 'block':'none'}}>
                  <Card title="西北工业大学" bordered={false} className={styles.card}>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180523/1690531830.html" target="_blank">经济学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180523/1690531830-2.html" target="_blank">法学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180523/1690531830-3.html" target="_blank">教育学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180523/1690531830-4.html" target="_blank">文学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180523/1690531830-5.html" target="_blank">理学</a> 
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180523/1690531830-6.html" target="_blank">工学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180523/1690531830-7.html" target="_blank">管理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180523/1690531830-8.html" target="_blank">艺术学</a>
                  </Card>
                </Col>
                <Col {...colLayout} style={{display: currentPage === 4? 'block':'none'}}>
                  <Card title="兰州大学" bordered={false} className={styles.card}>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1690287033.html" target="_blank">哲学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1690287033-2.html" target="_blank">经济学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1690287033-3.html" target="_blank">法学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1690287033-4.html" target="_blank">教育学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1690287033-5.html" target="_blank">文学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1690287033-6.html" target="_blank">历史学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1690287033-7.html" target="_blank">理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1690287033-8.html" target="_blank">工学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1690287033-9.html" target="_blank">农学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1690287033-10.html" target="_blank">医学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1690287033-11.html" target="_blank">管理学</a>
                    <a href="https://yz.chsi.com.cn/kyzx/other/201805/20180521/1690287033-12.html" target="_blank">艺术学</a>
                  </Card>
                </Col>
              </Row>
            </div>
          </TabPane>
        </Tabs> 
        <DataSource/>
      </GridContent>
    );
  }
}

export default NationalLine;