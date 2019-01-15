import React, { Component } from 'react';
import { Icon } from 'antd';
import styles from './style.less';

class Parent extends Component {

  render() {
    return (
      <div className={styles.p_wrapper}>
        <div className={styles.parent}>
          <Icon type="plus" className={styles.icon} />
            <span className={styles.p_text}>高校类型</span>
          <Icon type="down" />
        </div>
      </div>
    )
  }
}

export default Parent;