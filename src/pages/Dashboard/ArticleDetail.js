import React, { PureComponent, Fragment } from 'react';
import { Tag } from 'antd';
import { connect } from 'dva';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import moment from 'moment';
import styles from './Articles.less';

@connect(({ home }) => ({
  home,
}))
class Center extends PureComponent {
  constructor(props) {
    super(props);
    this.id = props.match.params.id
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'home/articleDetail',
      id: this.id
    });
  }

  render() {
  
    const { home: { articleDetailRes } } = this.props;

    return (
      <GridContent>
        {
          articleDetailRes && (
            <div className={styles.article_detail}>
              <h2 className={styles.title}>{articleDetailRes.data.title}</h2>
              <div className={styles.date}>编辑时间：{moment(articleDetailRes.data.lrsj).format('YYYY-MM-DD')}</div>
              {articleDetailRes.data.img?<div className={styles.img}><img src={articleDetailRes.data.img}/></div>:null}
              <div dangerouslySetInnerHTML={{__html: articleDetailRes.data.content}}></div>
              <p className={styles.keyword}><Tag color="magenta">{articleDetailRes.data.keyword}</Tag></p>
              <p className={styles.source}>来源：{articleDetailRes.data.source}</p>
            </div>
          )
        }
      </GridContent>
    );
  }
}

export default Center;
