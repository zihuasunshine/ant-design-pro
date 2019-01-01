import React, { PureComponent } from 'react';
import styles from './Center.less';

class Center extends PureComponent {
  render() {
   
    return (
     <div className={styles.wait_answer}>您还没有待回答的问题</div>
    );
  }
}

export default Center;
