import React, { Component } from 'react';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import QueryForm from './QueryForm';
import Result from './Result';
import styles from './style.less';

class Adjust extends Component {

  constructor(props) {
    super(props);
    this.params = props.location.state;
  }

  render() {
    return (
      <GridContent>
        <div className={styles.form_wrapper}>
          <QueryForm state={this.params}/>
        </div>
        <div className={styles.result_wrapper}>
          <Result state={this.params}/>
        </div>
      </GridContent>
    )
  }
}

export default Adjust;