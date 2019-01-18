import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import { Row, Col, Table, Input, Button } from 'antd';
import { formatMessage } from 'umi/locale';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import styles from './style.less';

const leftLayout = {xs: 24, sm:24, md: 24,lg: 24, xl: 5, xxl: 5};
const rightLayout = {xs: 24, sm:24, md: 24,lg: 24, xl: 19, xxl: 19};

@connect(({ pgjg }) => ({
  pgjg
}))
class School extends Component {

  name = '北京大学';

  columns = [{
    title: '序号',
    align: 'center',
    render: (text, record, index) => {
      return <span>{index+1}</span>
    }
  }, {
    title: '学校代码',
    dataIndex: 'schoolCode',
    key: 'schoolCode',
    align: 'center'
  }, {
    title: '学校名称',
    dataIndex: 'schoolName',
    key: 'schoolName',
    align: 'center'
  }, {
    title: '一级学科代码',
    dataIndex: 'majorCode',
    key: 'majorCode',
    align: 'center'
  }, {
    title: '一级学科名称',
    dataIndex: 'majorName',
    key: 'majorName',
    align: 'center'
  },{
    title: '评估结果',
    dataIndex: 'subRanking',
    key: 'subRanking',
    align: 'center'
  }, {
    title: '位次百分百',
    dataIndex: 'subPercent',
    key: 'subPercent',
    align: 'center'
  },];

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'pgjg/getPgjgListBySchool',
      params: {
        name: this.name
      }
    });
  }

  handleChange = (e) => {
    this.name = e.target.value? e.target.value : '北京大学';
  }

  handleClick = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'pgjg/getPgjgListBySchool',
      params: {
        name: this.name
      }
    });
  }

  render() {
    const { pgjg: { pgjgList2Res } } = this.props;
    const pgjgList = pgjgList2Res && pgjgList2Res.code === 200 ? pgjgList2Res.data : [];

    return(
      <Fragment>
        <Row gutter={16}>
          <Col {...leftLayout}>
            <div className={styles.sch_left}>
              <Input 
                className={styles.name} 
                placeholder={formatMessage({id: 'form.school.placeholder'})}
                onChange={this.handleChange}  
              />
              <Button type='primary' onClick={this.handleClick}>查询</Button>
            </div>
          </Col>
          <Col {...rightLayout}>
            <div className={styles.right}>
              <h3 className={styles.title}>{this.name}</h3>
              <Table
                bordered={true}
                columns={this.columns}
                dataSource={pgjgList}
                pagination={false}
              />
            </div>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default School;
