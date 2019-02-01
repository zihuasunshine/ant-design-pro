import React, { Fragment } from 'react';
import { Row, Col } from 'antd';
import styles from './style.less';
import img_hot from '@/assets/img_hot.png';

export default (props) =>(
  <Fragment>
    <Row className={styles.question_box}>
      <Col span={4}>
        <div className={styles.title_wrapper} style={{color: props.color}}>
          <img className={styles.title} src={props.img}/>
        </div>
      </Col>
      <Col span={20}>
        <div className={styles.question_wrapper}>
          <div className={styles.question}>
            <span>我准备二战，可是已经被辅导？</span>
            <span className={styles.time}>2019-01-12</span>
          </div>
          <div className={styles.question}>
            <span>我准备二战，可是已经被辅</span>
            <span className={styles.time}>2019-01-12</span>
          </div>
        </div>
      </Col>
    </Row>
  </Fragment>
)