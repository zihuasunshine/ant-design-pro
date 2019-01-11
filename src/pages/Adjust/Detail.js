import React, { Component } from 'react';
import { connect } from 'dva';
import Link from 'umi/link';
import { Row, Col, Tag } from 'antd';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import moment from 'moment';
import styles from './style.less';

const colLayout1 = {xs: 24, sm: 24, md: 24, lg: 24, xl: 18, xxl: 18};
const colLayout2 = {xs: 24, sm: 24, md: 24, lg: 24, xl: 6, xxl: 6};
const colLayout3 = {xs: 24, sm: 12, md: 12, lg: 12, xl: 12, xxl: 12};

@connect(({ adjust }) => ({
  adjust
}))
class Adjust extends Component {

  constructor(props) {
    super(props);
    this.id = props.match.params.id;
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'adjust/getDetail',
      params: {
        id: this.id
      }
    });
    dispatch({
      type: 'adjust/getAdjustRecommended',
      params: {
        id: this.id
      }
    });
  }

  render() {
    const { adjust: { adjustDetailRes, recommendRes  }} = this.props;
    const detail = adjustDetailRes && adjustDetailRes.code === 200 && adjustDetailRes.data.info ? adjustDetailRes.data.info : {};
    const recommendList = recommendRes && recommendRes.code === 200 ? recommendRes.data : [];

    return (
      <GridContent>
        <Row className={styles.detail_box}>
          <Col {...colLayout1}>
            <div className={styles.detail_wrapper}>
              <div className={styles.tag_wrapper}>
                <Tag color='#13C2C2'><Link to={{pathname:'/adjust', state:{yx: detail.yxmc}}}>{detail.yxmc}调剂信息</Link></Tag>
                <Tag color='#13C2C2'><Link to={{pathname:'/adjust', state:{zy: detail.zymc}}}>与{detail.zymc}相关调剂信息</Link></Tag>
              </div>
              <h2>{detail.title}</h2>
              <Row className={styles.baseinfo_wrapper}>
                <Col className={styles.baseinfo} {...colLayout3}>
                  <span className={styles.label}>高校名称:</span>
                  <span title={detail.yxmc} className={styles.value}>{detail.yxmc && detail.yxmc.length>16? detail.yxmc.substring(0,16)+'...':detail.yxmc}</span>
                </Col>
                <Col className={styles.baseinfo} {...colLayout3}>
                  <span className={styles.label}>所在省市:</span>
                  <span className={styles.value}>{detail.province}</span>
                </Col>
                <Col className={styles.baseinfo} {...colLayout3}>
                  <span className={styles.label}>院校属性:</span>
                  <span className={styles.value}>{detail.tag}</span>
                </Col>
                <Col className={styles.baseinfo} {...colLayout3}>
                  <span className={styles.label}>调剂专业:</span>
                  <span title={detail.zymc} className={styles.value}>{detail.zymc && detail.zymc.length>16? detail.zymc.substring(0,16)+'...':detail.zymc}</span>
                </Col>
                <Col className={styles.baseinfo} {...colLayout3}>
                  <span className={styles.label}>发布时间:</span>
                  <span className={styles.value}>{detail.fbsj? moment(detail.fbsj).format('YYYY年MM月DD日'):'未注明'}</span>
                </Col>
                <Col className={styles.baseinfo} {...colLayout3}>
                  <span className={styles.label}>截止时间:</span>
                  <span className={styles.value}>{detail.jzsj? moment(detail.fbsj).format('YYYY年MM月DD日'):'未注明'}</span>
                </Col>
              </Row>
              <div className={styles.content} dangerouslySetInnerHTML={{__html: detail.content}}/>
              <div className={styles.align_right}>
                <i>--微信公众号【小白考研】（微信号：ikaoyaner）整理提供</i>
              </div>
            </div>
          </Col>
          <Col {...colLayout2}>
            <h3 className={styles.title}>推荐内容</h3>
            <div className={styles.recommend_wrapper}>
              {recommendList.length > 0?recommendList.map((item) => {
                return <a href={`/adjust/detail/${item.id}`}>{item.title}</a>
              }):'无推荐内容'}
            </div>
          </Col>
        </Row>
      </GridContent>
    )
  }
}

export default Adjust;