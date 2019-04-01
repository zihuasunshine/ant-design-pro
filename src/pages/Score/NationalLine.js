import React, { Component } from 'react';
import { Tabs, Tag, Row, Col, Table } from 'antd';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import DataSource from '@/components/dataSource';
import { 
  xssubject, 
  zssubject, 
  columns1, 
  columns2, 
  XSDataEqual01, 
  XSDataEqual02, 
  XSDataEqual03, 
  XSDataEqual04, 
  XSDataEqual05, 
  XSDataEqual06, 
  XSDataEqual07, 
  XSDataEqual08,
  XSDataEqual09, 
  XSDataEqual10, 
  XSDataEqual11, 
  XSDataEqual12, 
  XSDataEqual13, 
  XSDataEqual14, 
  XSDataEqual15, 
  XSDataEqual16, 
  XSDataEqual17, 
  XSDataOver01, 
  XSDataOver02, 
  XSDataOver03, 
  XSDataOver04, 
  XSDataOver05, 
  XSDataOver06, 
  XSDataOver07, 
  XSDataOver08, 
  XSDataOver09, 
  XSDataOver10, 
  XSDataOver11, 
  XSDataOver12, 
  XSDataOver13, 
  XSDataOver14,
  XSDataOver15, 
  XSDataOver16, 
  XSDataOver17, 
  //==================//
  ZSDataEqual01, 
  ZSDataEqual02, 
  ZSDataEqual03, 
  ZSDataEqual04, 
  ZSDataEqual05, 
  ZSDataEqual06, 
  ZSDataEqual07, 
  ZSDataEqual08,
  ZSDataEqual09, 
  ZSDataEqual10, 
  ZSDataEqual11, 
  ZSDataEqual12, 
  ZSDataEqual13, 
  ZSDataEqual14, 
  ZSDataEqual15, 
  ZSDataEqual16, 
  ZSDataOver01, 
  ZSDataOver02, 
  ZSDataOver03, 
  ZSDataOver04, 
  ZSDataOver05, 
  ZSDataOver06, 
  ZSDataOver07, 
  ZSDataOver08, 
  ZSDataOver09, 
  ZSDataOver10, 
  ZSDataOver11, 
  ZSDataOver12, 
  ZSDataOver13, 
  ZSDataOver14,
  ZSDataOver15, 
  ZSDataOver16, 
} from './data';
import styles from './score.less';
import xs01 from '@/assets/score/xs01.png';
import xs02 from '@/assets/score/xs02.png';
import xs03 from '@/assets/score/xs03.png';
import xs04 from '@/assets/score/xs04.png';
import xs05 from '@/assets/score/xs05.png';
import xs06 from '@/assets/score/xs06.png';
import xs07 from '@/assets/score/xs07.png';
import xs08 from '@/assets/score/xs08.png';
import xs09 from '@/assets/score/xs09.png';
import xs10 from '@/assets/score/xs10.png';
import xs11 from '@/assets/score/xs11.png';
import xs12 from '@/assets/score/xs12.png';
import xs13 from '@/assets/score/xs13.png';
import xs14 from '@/assets/score/xs14.png';
import xs15 from '@/assets/score/xs15.png';
import xs16 from '@/assets/score/xs16.png';
import xs17 from '@/assets/score/xs17.png';

import zs01 from '@/assets/score/zs01.png';
import zs02 from '@/assets/score/zs02.png';
import zs03 from '@/assets/score/zs03.png';
import zs04 from '@/assets/score/zs04.png';
import zs05 from '@/assets/score/zs05.png';
import zs06 from '@/assets/score/zs06.png';
import zs07 from '@/assets/score/zs07.png';
import zs08 from '@/assets/score/zs08.png';
import zs09 from '@/assets/score/zs09.png';
import zs10 from '@/assets/score/zs10.png';
import zs11 from '@/assets/score/zs11.png';
import zs12 from '@/assets/score/zs12.png';
import zs13 from '@/assets/score/zs13.png';
import zs14 from '@/assets/score/zs14.png';
import zs15 from '@/assets/score/zs15.png';
import zs16 from '@/assets/score/zs16.png';
 
const TabPane = Tabs.TabPane;
const colLayout1 = {xs: 24, xm: 24, md: 8, lg: 8, xl: 8, xxl: 10}
const colLayout2 = {xs: 24, xm: 24, md: 7, lg: 7, xl: 7, xxl: 7}
const xsKeys = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16', '17'];
const xsImg = [xs01, xs02, xs03, xs04, xs05, xs06, xs07, xs08, xs09, xs10, xs11, xs12, xs13, xs14, xs15, xs16, xs17];
const zsImg = [zs01, zs02, zs03, zs04, zs05, zs06, zs07, zs08, zs09, zs10, zs11, zs12, zs13, zs14, zs15, zs16];
const XSDataSourceEqual = {
  '01': XSDataEqual01,
  '02': XSDataEqual02,
  '03': XSDataEqual03,
  '04': XSDataEqual04,
  '05': XSDataEqual05,
  '06': XSDataEqual06,
  '07': XSDataEqual07,
  '08': XSDataEqual08,
  '09': XSDataEqual09,
  '10': XSDataEqual10,
  '11': XSDataEqual11,
  '12': XSDataEqual12,
  '13': XSDataEqual13,
  '14': XSDataEqual14,
  '15': XSDataEqual15,
  '16': XSDataEqual16,
  '17': XSDataEqual17,
}

const XSDataSourceOver = {
  '01': XSDataOver01,
  '02': XSDataOver02,
  '03': XSDataOver03,
  '04': XSDataOver04,
  '05': XSDataOver05,
  '06': XSDataOver06,
  '07': XSDataOver07,
  '08': XSDataOver08,
  '09': XSDataOver09,
  '10': XSDataOver10,
  '11': XSDataOver11,
  '12': XSDataOver12,
  '13': XSDataOver13,
  '14': XSDataOver14,
  '15': XSDataOver15,
  '16': XSDataOver16,
  '17': XSDataOver17,
}

const ZSDataSourceEqual = {
  '01': ZSDataEqual01,
  '02': ZSDataEqual03,
  '03': ZSDataEqual07,
  '04': ZSDataEqual04,
  '05': ZSDataEqual02,
  '06': ZSDataEqual05,
  '07': ZSDataEqual06,
  '08': ZSDataEqual08,
  '09': ZSDataEqual09,
  '10': ZSDataEqual10,
  '11': ZSDataEqual13,
  '12': ZSDataEqual11,
  '13': ZSDataEqual12,
  '14': ZSDataEqual14,
  '15': ZSDataEqual15,
  '16': ZSDataEqual16,
}

const ZSDataSourceOver = {
  '01': ZSDataOver01,
  '02': ZSDataOver03,
  '03': ZSDataOver07,
  '04': ZSDataOver04,
  '05': ZSDataOver02,
  '06': ZSDataOver05,
  '07': ZSDataOver06,
  '08': ZSDataOver08,
  '09': ZSDataOver09,
  '10': ZSDataOver10,
  '11': ZSDataOver13,
  '12': ZSDataOver11,
  '13': ZSDataOver12,
  '14': ZSDataOver14,
  '15': ZSDataOver15,
  '16': ZSDataOver16,
}

class NationalLine extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentXS: '01',
      currentZS: '01',
    }
  }

  setCurrentXS = item => {
    this.setState({
      currentXS: item.key
    });
  }

  setCurrentZS = item => {
    this.setState({
      currentZS: item.key
    });
  }
  
  render() {
    const { currentXS, currentZS } = this.state;

    return (
      <GridContent>
        <ul className={styles.year_wrapper}>
          <li className={styles.year}><a href="https://yz.chsi.com.cn/kyzx/kydt/201903/20190312/1772265387.html" target="_blank">2019</a></li>
          <li className={styles.year}><a href="https://yz.chsi.com.cn/kyzx/kydt/201803/20180316/1669704798.html" target="_blank">2018</a></li>
          <li className={styles.year}><a href="https://yz.chsi.com.cn/kyzx/kydt/201703/20170315/1591045016.html" target="_blank">2017</a></li>
          <li className={styles.year}><a href="https://yz.chsi.com.cn/kyzx/zcdh/201603/20160311/1525041539.html" target="_blank">2016</a></li>
          <li className={styles.year}><a href="https://yz.chsi.com.cn/kyzx/kydt/201503/20150310/1433021280.html" target="_blank">2015</a></li>
          <li className={styles.year}><a href="https://yz.chsi.com.cn/kyzx/kydt/201403/20140318/828601850.html" target="_blank">2014</a></li>
          <li className={styles.year}><a href="https://yz.chsi.com.cn/kyzx/kydt/201303/20130326/404415686.html" target="_blank">2013</a></li>
          <li className={styles.year}><a href="https://yz.chsi.com.cn/kyzx/kydt/201203/20120330/296907941.html" target="_blank">2012</a></li>
        </ul>
        <Tabs>
          <TabPane tab='国家线趋势图-学术硕士'>
            <div className={styles.tag_wrapper}>
              {
                xssubject.map((item) => {
                  return <Tag key={item.key} color={currentXS === item.key?'#2db7f5':'geekblue'} className={styles.tag} onClick={() => { this.setCurrentXS(item)}}>{item.value}</Tag>
                })
              }
            </div>
            <Row gutter={24} className={styles.col_wrapper}>
              <Col {...colLayout1} className={[styles.img_wrapper, styles.col].join(' ')}>
                { 
                  xssubject.map(item => {
                    return item.key === currentXS? <h4 className={styles.title}>{(item.title || item.value)+'总分国家线趋势图及单科分数'}</h4> : null;
                  })
                }
                {
                  xsImg.map((item, index) => {
                    return <img key={`xs${index}`} src={item} style={{display: parseInt(currentXS) === (index+1)? 'block':'none'}}/>
                  })
                }
              </Col>
              <Col {...colLayout2} className={styles.col}>
                <Table
                  columns={columns1}
                  dataSource={XSDataSourceEqual[currentXS]}
                  pagination={false}
                />
              </Col>
              <Col {...colLayout2} className={styles.col}>
                <Table
                  columns={columns2}
                  dataSource={XSDataSourceOver[currentXS]}
                  pagination={false}
                />
              </Col>
            </Row>
          </TabPane>
        </Tabs> 
        <Tabs>
          <TabPane tab='国家线趋势图-专业硕士'>
            <div className={styles.tag_wrapper}>
              {
                zssubject.map((item) => {
                  return <Tag key={item.key} color={currentZS === item.key?'#2db7f5':'geekblue'} className={styles.tag} onClick={() => { this.setCurrentZS(item)}}>{item.value}</Tag>
                })
              }
            </div>
            <Row gutter={16} className={[styles.col_wrapper, styles.col_l_wrapper].join(' ')}>
              <Col {...colLayout1} className={[styles.img_wrapper, styles.col].join(' ')}>
                { 
                  zssubject.map(item => {
                    return item.key === currentZS? <h4 className={styles.title}>{(item.title || item.value)+'总分国家线趋势图及单科分数'}</h4> : null;
                  })
                }
                {
                  zsImg.map((item, index) => {
                    return <img key={`zs${index}`} src={item} style={{display: parseInt(currentZS) === (index+1)? 'block':'none'}}/>
                  })
                }
              </Col>
              <Col {...colLayout2} className={styles.col}>
                <Table
                  columns={columns1}
                  dataSource={ZSDataSourceEqual[currentZS]}
                  pagination={false}
                />
              </Col>
              <Col {...colLayout2} className={styles.col}>
                <Table
                  columns={columns2}
                  dataSource={ZSDataSourceOver[currentZS]}
                  pagination={false}
                />
              </Col>
            </Row>
          </TabPane>
        </Tabs> 
        <DataSource />
      </GridContent>
    );
  }
}

export default NationalLine;