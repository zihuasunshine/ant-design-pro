import React, { Component } from 'react';
import { connect } from 'dva';
import { Table } from 'antd';
import moment from 'moment';

@connect(({ adjust }) => ({
  adjust
}))
class Result extends Component {

  componentDidMount() {
    const { state } = this.props;
    this.getAdjustData(state?state:{});
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'adjust/setCurrent',
      current: 1
    });
  }

  getAdjustData = (params) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'adjust/getAdjustData',
      params: params
    })
  }

  handleChange = (page) => {
    const { dispatch, adjust: { params } } = this.props;
    let pageParams = { ...params };
    pageParams.p = page;
    dispatch({
      type: 'adjust/loading',
      loading: true
    }).then(() => {
      this.getAdjustData(pageParams);
    }).then(() => {
      dispatch({
        type: 'adjust/setCurrent',
        current: page
      });
    });
  }

  columns = [{
    title: '学校名称',
    dataIndex: 'yxmc',
    key: 'yxmc',
    render: (text) =>{
      return <span title={text}>{text.length>16?text.slice(0,15)+'...':text}</span>
    }
  }, {
    title: '专业名称',
    dataIndex: 'zymc',
    key: 'zymc',
    render: (text) =>{
      return <span title={text}>{text.length>16?text.slice(0,15)+'...':text}</span>
    }
  }, {
    title: '调剂信息标题',
    dataIndex: 'title',
    key: 'title',
    render: (text, record, index) => {
      return <a href={`/adjust/detail/${record.id}`} title={text}>{text.length>30?text.slice(0,30)+'...':text}</a>
    }
  }, {
    title: '发布时间',
    dataIndex: 'fbsj',
    key: 'fbsj',
    render: (text) => {
      return <span>{moment(text).format('YYYY-MM-DD')}</span>;
    }
  }];

  render(){
    const { adjust: { adjustDataRes, current, loading } } = this.props;
    const dataSource = adjustDataRes && adjustDataRes.code === 200? adjustDataRes.data : [];
    const pagination={
      showQuickJumper: true,
      pageSize:20,
      current:current,
      total: dataSource.total,
      onChange: this.handleChange
    }
    return(
      <Table
        loading={loading}
        columns={this.columns}
        dataSource={dataSource.list}
        pagination={pagination}
      />
    )
  }
}

export default Result;
