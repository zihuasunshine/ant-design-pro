import React from 'react';
import Link from 'umi/link';
import moment from 'moment';
import { Row, Col, Avatar } from 'antd';
import styles from './index.less';

const colLayout1 = { xs: 24, sm: 24, md: 24, lg: 20, xl: 18, xxl: 18 };
const colLayout2 = { xs: 24, sm: 24, md: 24, lg: 4, xl: 6, xxl: 6 };

const ArticleListContent = ({ data, data: { baid, qtitle, quptime, category_f_name, category_s_name, category_t_name }, link }) => (
  <div className={styles.listContent}>
    <Row gutter={32}>
      <Col {...colLayout1}>
        <div className={styles.description}>
          <div className={styles.cate}>{category_f_name} > {category_s_name} > {category_t_name}</div>
          <a dangerouslySetInnerHTML={{__html: qtitle}} className={styles.a} href={link} target='_blank'/>
        </div>
      </Col>
      <Col {...colLayout2} className={styles.align_right}>
        <span>{baid == 0? '未回答':'已回答'}</span> | <span>{moment(quptime * 1000).format('YYYY-MM-DD')}</span>
      </Col>
    </Row>
    <div className={styles.extra}>
      {/*<Avatar src={avatar} size="small" />
      <a href={href}>{owner}</a> 发布在 <a href={href}>{href}</a>*/}
    </div>
  </div>
);

export default ArticleListContent;
