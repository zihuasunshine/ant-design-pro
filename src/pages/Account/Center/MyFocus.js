import React, { PureComponent, Fragment } from 'react';
import { List, Row, Col, Tag, Pagination } from 'antd';
import { connect } from 'dva';
import momont from 'moment';
import ItemList from './ItemList';

const pageSize = 10;

@connect(({center}) => ({
  center,
}))
class MyFocus extends PureComponent {

  pager = {
    pageno: 1,
    pageSize
  }
  state = {
    listData: [],
    total: 0,
    loading: true,
  }

  componentDidMount() {
    this.getDataSource();
  }

  handleChange = (page, pageSize) => {
    this.pager = {
      pageno: page,
      pageSize
    }
    this.getDataSource();
  }

  getDataSource = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'center/getMyFocus',
      params: {
        state: -1,
        ...this.pager
      }
    }).then(() => {
      const { center: { myFocusRes } } = this.props;
      let listData = [], total = 0;
      if(myFocusRes && myFocusRes.code===200 ) {
        listData =  myFocusRes.data.list;
        total = myFocusRes.data.total;
      }
      this.setState({ total, listData, loading: false });
    });
  }

  render() {
    const { listData, total, loading } = this.state;
    return (
      <ItemList listData={listData} loading={loading} total={total} onChange={this.handleChange}/>
    );
  }
}

export default MyFocus;
