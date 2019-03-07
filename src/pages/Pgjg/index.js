import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import { Tabs } from 'antd';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import DataSource from '@/components/dataSource';
import Subject from './Subject';
import School from './School';
import styles from './style.less';

const TabPane = Tabs.TabPane;

class CPA extends Component {

  handleClick = (code) => {
    this.setState({code});
  }

  render() {

    return(
      <GridContent>
        <div className={styles.pgjg_box}>
          <Tabs defaultActiveKey="1">
            <TabPane key={1} tab='按学科查询'>
              <Subject/>
            </TabPane>
            <TabPane key={2} tab='按高校查询'>
              <School/>
            </TabPane>
          </Tabs>
        </div>
        <DataSource />
      </GridContent>
    );
  }
}

export default CPA;
