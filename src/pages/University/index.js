import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import { formatMessage } from 'umi/locale';
import { Row, Col, Table, Input, Button } from 'antd';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import Parent from '@/components/Tree/Parent';
import Child from '@/components/Tree/Child';
import styles from './style.less';
import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from 'constants';

const leftLayout = {xs: 24, sm:24, md: 24,lg: 24, xl: 5, xxl: 5};
const rightLayout = {xs: 24, sm:24, md: 24,lg: 24, xl: 19, xxl: 19};
const width = window.screen.availWidth;
const tags = [
  {
    id: 1, label: '一流大学', value: '一流大学'
  }, {
    id: 2, label: '一流学科', value: '一流学科'
  }, {
    id: 3, label: '985高校', value: '985'
  }, {
    id: 4, label: '211高校', value: '211'
  }
];

@connect(({ global, university }) => ({
  global,
  university
}))
class University extends Component {

  
  title = '一流大学';      // 表格上方文字
  state = {
    name: '',              // 文本框内容
    tag: false,        // 当前选中tag
    province: false,         // 当前选中省份
    initTagValue: '一流大学',
    initProvinceValue: ''
  }
 
  columns1 = [{
    title: '序号',
    align: 'center',
    render: (text, record, index) => {
      return <span>{index+1}</span>
    }
  }, {
    title: '学校标识码',
    dataIndex: 'code',
    key: 'code',
    align: 'center',
  }, {
    title: '学校名称',
    dataIndex: 'mc',
    key: 'mc',
    align: 'center',
    render: (text, record, index) => {
      return <a href={record.xxwz} target="_blank">{text}</a>
    }
  }, {
    title: '所在地区',
    dataIndex: 'province',
    key: 'province',
    align: 'center'
  }, {
    title: '所在城市',
    dataIndex: 'city',
    key: 'city',
    align: 'center'
  }, {
    title: '主管部门',
    dataIndex: 'department',
    key: 'department',
    align: 'center'
  }, {
    title: '办学层次',
    dataIndex: 'level',
    key: 'level',
    align: 'center'
  }, {
    title: '高校类型',
    dataIndex: 'tag',
    key: 'tag',
    align: 'center'
  },];

  columns2 = [{
    title: '序号',
    align: 'center',
    render: (text, record, index) => {
      return <span>{index+1}</span>
    },
    className: styles.mobile
  }, {
    title: '学校名称',
    dataIndex: 'mc',
    key: 'mc',
    align: 'center',
    className: styles.mobile,
    render: (text, record, index) => {
      return <a href={record.xxwz} target="_blank">{text}</a>
    }
  }, {
    title: '所在地区',
    dataIndex: 'province',
    key: 'province',
    align: 'center',
    className: styles.mobile,
  }, {
    title: '所在城市',
    dataIndex: 'city',
    key: 'city',
    align: 'center',
    className: styles.mobile,
  }, {
    title: '主管部门',
    dataIndex: 'department',
    key: 'department',
    align: 'center',
    className: styles.mobile,
  }, {
    title: '办学层次',
    dataIndex: 'level',
    key: 'level',
    align: 'center',
    className: styles.mobile,
  }, {
    title: '高校类型',
    dataIndex: 'tag',
    key: 'tag',
    align: 'center',
    className: styles.mobile,
  },];

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'global/getProvince'
    });
    dispatch({
      type: 'university/getUniversityInfo',
      params: {
        key: 'tag',
        word: this.title,
      }
    });
  }

  handleSelectTag = (item) => {
    const { dispatch } = this.props, { value } = item;;
    dispatch({
      type: 'university/getUniversityInfo',
      params: {
        key: 'tag',
        word: value
      }
    });
    this.title = value;
    this.setState({initProvinceValue: '', name: ''});
  }

  handleSelectProvince = (item) => {
    const { dispatch } = this.props, { value } = item;
    dispatch({
      type: 'university/getUniversityInfo',
      params: {
        key: 'sf',
        word: value
      }
    });
    this.title = value;
    this.setState({initTagValue: '', name: ''});
  }

  handleClick = (flag) => {
    let { tag, province } = this.state;
    if(flag === 'tag'){
      this.setState({
        tag: !tag,
        province: false,
      });
    }else {
      this.setState({
        province: !province,
        tag: false,
      });
    }
  }

  handleChange = (e) => {
    this.setState({name: e.target.value});
  }

  handleSubmit = () => {
    const { dispatch } = this.props;
    const { name } = this.state;
    dispatch({
      type: 'university/getUniversityInfo',
      params: {
        key: 'mc',
        word: name? name:'北京大学'
      }
    });
    this.title = name? name:'北京大学';
    this.setState({initTagValue: '', initProvinceValue: ''});
  }

  setDefalutValue = (item) => {
    const { id, value } = item;
    const state = typeof id === 'number'?{initTagValue: value} : {initProvinceValue: value}
    this.setState(state);
  }

  convertTypes = (data) => {
    let types = [];
    data instanceof Array && data.forEach(item => {
     types.push({
       id: item.provinceid,
       label: item.province,
       value: item.province
     });
    });
    return types;
  }

  render() {
    const { name, tag, province, initTagValue, initProvinceValue } = this.state;
    const { global: { provinceRes }, university: { universityRes } } = this.props;
    const provinces = provinceRes && provinceRes.code === 200? provinceRes.data : [];
    const universities = universityRes && universityRes.code === 200? universityRes.data : [];
    const columns = width < 576? this.columns2:this.columns1;

    return(
      <GridContent>
        <div className={styles.university_box}>
          <Row gutter={16}>
            <Col {...leftLayout}>
              <div className={styles.left}>
                <Fragment>
                  <div onClick={() => this.handleClick('tag')}>
                    <Parent label='高校类型'></Parent>
                  </div>
                  <div className={tag?styles.show:styles.hide}>
                    <Child 
                      defaultValue={initTagValue}
                      data={tags} 
                      onSelect={this.handleSelectTag}
                      setDefalutValue={this.setDefalutValue}
                    /> 
                  </div>
                </Fragment>
                <Fragment>
                  <div onClick={() => this.handleClick('sf')}>
                    <Parent label={'所在地区'}></Parent>
                  </div>
                  <div className={province?styles.show:styles.hide}>
                    <Child 
                      defaultValue={initProvinceValue}
                      data={this.convertTypes(provinces)} 
                      onSelect={this.handleSelectProvince}
                      setDefalutValue={this.setDefalutValue}
                    /> 
                  </div>
                </Fragment>
                <div className={styles.input_wrapper}>
                  <Input 
                    value={name}
                    className={styles.name} 
                    placeholder={formatMessage({id: 'form.schoolKey.placeholder'})}
                    onChange={this.handleChange}  
                  />
                  <Button type='primary' onClick={this.handleSubmit}>查询</Button>
                </div>
              </div>
            </Col>
            <Col {...rightLayout}>
              <div className={styles.right}>
                <h3 className={styles.title}>{this.title}</h3>
                <Table
                  bordered={true}
                  columns={columns}
                  dataSource={universities}
                  pagination={false}
                />
              </div>
            </Col>
          </Row>
        </div>
      </GridContent>
    );
  }
}

export default University;
