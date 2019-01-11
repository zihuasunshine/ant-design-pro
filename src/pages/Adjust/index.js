import React, { Component } from 'react';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import QueryForm from './QueryForm';
import Result from './Result';
import styles from './style.less';

class Adjust extends Component {

  render() {
    return (
      <GridContent>
        <div className={styles.form_wrapper}>
          <QueryForm/>
        </div>
        <div className={styles.result_wrapper}>
          <Result/>
        </div>
      </GridContent>
    )
  }
}

export default Adjust;