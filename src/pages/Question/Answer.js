import React, { Fragment, PureComponent } from 'react';
import { connect } from 'dva';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import RichTextEditor from '@/components/RichTextEditor';
import { formatMessage, FormattedMessage } from 'umi/locale';
import { Row, Col, Icon, Button } from 'antd';
import styles from './Answer.less';
import bestSrc from '@/assets/best.png';

const colLayout = { xs: 24, sm: 24, md: 24, lg: 16, xl: 16, xxl: 16 };

@connect(({ question }) => ({
  question,
}))
class Answer extends PureComponent {
  constructor(props) {
    super(props);
    this.item = props.location.state;
    console.log(this.item);
  }

  render() {
    return (
      <GridContent>
        <div className={styles.main}>
          <Row>
            <Col {...colLayout}>
              <h4>
                {this.item.category_f_name &&
                  this.item.category_f_name +
                    '>' +
                    this.item.category_s_name +
                    '>' +
                    this.item.category_t_name}
              </h4>
            </Col>
            <Col {...colLayout}>
              <div className={styles.qtitle}>
                <Icon type="question-circle" className={styles.qicon} />
                <a>{this.item.qtitle}</a>
              </div>
            </Col>
            {this.item.baid ? (
              <Col {...colLayout}>
                <div className={styles.title_wrapper}>
                  <img alt="best" src={bestSrc} />
                  <h3 className={styles.title}>最佳答案</h3>
                </div>
                <div className={styles.answer}>{this.item.acontent}</div>
              </Col>
            ) : null}
            <Col {...colLayout}>
              <RichTextEditor />
            </Col>
          </Row>
          <Row>
            <Col {...colLayout} className={styles.btn_wrapper}>
              <Button type="primary" className={styles.answer_btn}>
                {this.item.baid
                  ? formatMessage({ id: 'app.settings.perfect' })
                  : formatMessage({ id: 'app.settings.answer' })}
              </Button>
            </Col>
          </Row>
        </div>
      </GridContent>
    );
  }
}

export default Answer;
