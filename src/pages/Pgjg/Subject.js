import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import { Row, Col, Table } from 'antd';
import Parent from '@/components/Tree/Parent';
import Child from '@/components/Tree/Child';
import styles from './style.less';

const leftLayout = {xs: 24, sm:24, md: 24,lg: 24, xl: 5, xxl: 5};
const rightLayout = {xs: 24, sm:24, md: 24,lg: 24, xl: 19, xxl: 19};

@connect(({ global, pgjg }) => ({
  global,
  pgjg
}))
class Subject extends Component {

  code = '';

  state = {
    code: '',
    defaultValue: 1,
  }

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
      type: 'global/getPgjgTypes',
    });
    dispatch({
      type: 'pgjg/getPgjgListById',
      params: {
        id: '1'
      }
    });
  }

  handleSelect = (item) => {
    const { value } = item;
    const { dispatch } = this.props;
    dispatch({
      type: 'pgjg/getPgjgListById',
      params: {
        id: value
      }
    });
  }

  setDefalutValue = (item) => {
    const { value } = item;
    this.setState({
      defaultValue: value
    });
  }


  handleClick = (code) => {
    this.setState({code: this.code === code? '':code}, () => {
      const { code } = this.state;
      this.code = code;
    });
  }

  convertTypes = (data) => {
    let types = [];
    data instanceof Array && data.forEach(item => {
     types.push({
       id: item.id,
       label: item.code+item.name,
       value: item.id
     });
    });
    return types;
   }

  renderTree = (defaultValue, data) => {
    const { code } = this.state;
    return data.map( item => {
      return (
        <Fragment>
          <div onClick={() => this.handleClick(item.code)}>
            <Parent label={item.name}></Parent>
          </div>
          <div className={item.code === code? styles.show:styles.hide}>
            <Child 
              defaultValue={defaultValue}
              data={this.convertTypes(item.childen)} 
              onSelect={this.handleSelect}
              setDefalutValue={this.setDefalutValue}
            /> 
          </div>
        </Fragment>
      )
    });
  }

  render() {
    const { defaultValue } = this.state;
    const { global: { pgjgTypeRes }, pgjg: { pgjgList1Res } } = this.props;
    const pgjgType = pgjgTypeRes && pgjgTypeRes.code === 200 ? pgjgTypeRes.data : [];
    const pgjgList = pgjgList1Res && pgjgList1Res.code === 200 ? pgjgList1Res.data.details : [];
    const name = pgjgList1Res && pgjgList1Res.code === 200 ? pgjgList1Res.data.code+pgjgList1Res.data.name:'';
    const info = pgjgList1Res && pgjgList1Res.code === 200 ? pgjgList1Res.data.info:'';

    return(
      <Fragment>
        <Row gutter={16}>
          <Col {...leftLayout}>
            <div className={styles.left}>
            { this.renderTree(defaultValue, pgjgType) }
            </div>
          </Col>
          <Col {...rightLayout}>
            <div className={styles.right}>
              <h3 className={styles.title}>{name}</h3>
              <p dangerouslySetInnerHTML={{__html: info}}/>
              <Table
                rowKey={ record => record.schoolCode}
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

export default Subject;
