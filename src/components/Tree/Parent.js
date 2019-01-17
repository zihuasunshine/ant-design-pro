import React, { Component } from 'react';
import { Icon } from 'antd';
import styles from './style.less';

class Parent extends Component {

  render() {
    const { label } = this.props;
    return (
      <div className={styles.p_wrapper}>
        <div className={styles.parent}>
          <Icon type="plus" className={styles.icon} />
          <span className={styles.p_text}>{label}</span>
          <Icon type="down" className={styles.down}/>
        </div>
      </div>
    )
  }
}

export default Parent;