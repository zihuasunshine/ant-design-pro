import React from 'react';
import styles from './style.less';

export default (props) => (
  <div className={styles.questionmeta}>
    <div className={styles.img_wrapper}>
      <img src={props.img}/>
    </div>
    <div className={styles.classify}>考研小白入门>跨考</div>
    <div className={styles.info}>{props.children}</div>
  </div>
)