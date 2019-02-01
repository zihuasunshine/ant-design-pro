import React, { Component } from 'react';
import { Row, Col, Input } from 'antd';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import Question from '@/components/Index/Question';
import QuestionMeta from '@/components/Index/QuestionMeta';
import Title from '@/components/Index/Title';
import ListItem from '@/components/Index/ListItem';
import styles from './index.less';
import img from '@/assets/img_0.png';

const Search = Input.Search;
const leftLayout = {xs: 24, sm:24, md: 24,lg: 24, xl: 12, xxl: 12};
const rightLayout = {xs: 24, sm:24, md: 24,lg: 24, xl: 12, xxl: 12};

class Index extends Component {

  render() {
    return (
      <GridContent>
        <Row gutter={16}>
          <Col {...leftLayout}>
            <Question color={'#139BEA'} title={'热门提问'}/>
          </Col>
        </Row>
        <div className={styles.title_wrapper}>
          <Title chinese='全部问题' english={'all questions'}>
            <Search enterButton/>
          </Title>
        </div>
        <Row gutter={12}>
          <Col span={12}>
            <QuestionMeta img={img}/>
          </Col>
          <Col span={12}>
            <ListItem/>
          </Col>
        </Row>
        <div className={styles.title_wrapper}>
          <Title chinese='问题分类' english={'classification'}>
            <a>查看更多 >></a>
          </Title>
        </div>
        <Row gutter={24}>
          <Col span={6}>
            <QuestionMeta>
              <span className={styles.time}>2019.01.20</span>
              <span>5000+浏览量</span>
            </QuestionMeta>
          </Col>
          <Col span={6}>
            <QuestionMeta>
              <span className={styles.time}>2019.01.20</span>
              <span>5000+浏览量</span>
            </QuestionMeta>
          </Col>
          <Col span={6}>
            <QuestionMeta>
              <span className={styles.time}>2019.01.20</span>
              <span>5000+浏览量</span>
            </QuestionMeta>
          </Col>
          <Col span={6}>
            <QuestionMeta>
              <span className={styles.time}>2019.01.20</span>
              <span>5000+浏览量</span>
            </QuestionMeta>
          </Col>
        </Row>
      </GridContent>
    )
  }
}

export default Index;