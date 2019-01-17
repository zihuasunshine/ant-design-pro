import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Col, Table } from 'antd';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import Child from '@/components/Tree/Child';
import styles from './style.less';

const leftLayout = {xs: 24, sm:24, md: 24,lg: 24, xl: 6, xxl: 6};
const rightLayout = {xs: 24, sm:24, md: 24,lg: 24, xl: 18, xxl: 18};

@connect(({ global, cpa }) => ({
  global,
  cpa
}))
class CPA extends Component {

  columns = [{
    title: '评估结果',
    dataIndex: 'level',
    key: 'level',
    align: 'center'
  }, {
    title: '学校标识码',
    dataIndex: 'schools',
    key: 'schools',
    render: (schs) =>{
      return <div dangerouslySetInnerHTML={{__html: schs.join("")}}/>
    }
  }];

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'global/getCpaTypes',
    });
    dispatch({
      type: 'cpa/getCpaList',
      params: {
        code: '0351'
      }
    });
  }

  handleSelect = (value) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'cpa/getCpaList',
      params: {
        code: value
      }
    });
  }

  convertTypes = (data) => {
    let types = [];
    data instanceof Array && data.forEach(item => {
     types.push({
       id: item.id,
       label: item.code+item.name,
       value: item.code
     });
    });
    return types;
   }

   convertData = (data) => {
    let dataSource = [];
    data.forEach(item => {
      let cpaObj = {};
      item.forEach((ele, index) =>{
        if(index === 0){
          cpaObj.level = ele.subRanking;
          cpaObj.schools = [];
        } 
        cpaObj.schools.push(`<p>${ele.schoolCode}&nbsp;&nbsp;${ele.schoolName}</p>`);
      });
      dataSource.push(cpaObj);
    });
    return dataSource;
   }

  render() {

    const { global: { typeRes }, cpa: { cpaDataRes } } = this.props;
    const types = typeRes && typeRes.code === 200? typeRes.data : [];
    const dataSource = cpaDataRes && cpaDataRes.code === 200? this.convertData(cpaDataRes.data.dataList) : [];
    const name = cpaDataRes && cpaDataRes.code === 200? cpaDataRes.data.name :'';
    const info = cpaDataRes && cpaDataRes.code === 200? cpaDataRes.data.info :'';

    return(
      <GridContent>
        <div className={styles.cpa_box}>
          <Row gutter={16}>
            <Col {...leftLayout}>
              <div className={styles.left}>
                <Child 
                  defaultValue='0351' 
                  data={this.convertTypes(types)} 
                  onSelect={this.handleSelect}
                />
              </div>
            </Col>
            <Col {...rightLayout}>
              <div className={styles.right}>
                <h3 className={styles.title}>{name}</h3>
                <p dangerouslySetInnerHTML={{__html: info}}/>
                <Table
                  bordered={true}
                  columns={this.columns}
                  dataSource={dataSource}
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

export default CPA;
