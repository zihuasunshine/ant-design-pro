import React from 'React';
import styles from './style.less';

export default (props) => (
  <div className={styles.title_box}>
    <div className={styles.chinese}>{props.chinese}</div>
    <div className={styles.english}>{props.english}</div>
    <div className={styles.right}>{props.children}</div>
  </div>
)