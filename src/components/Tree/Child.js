import React, { Component } from 'react';
import styles from './style.less';
import { join } from 'path';

class Child extends Component {

  handleChildClick = (item) =>{
    const { onSelect, setDefalutValue } = this.props;
    onSelect && onSelect(item);
    setDefalutValue && setDefalutValue(item);
  }

  renderChildren = (data, currentValue) => {
    return data.map(item =>{
      const selected = currentValue === item.value;
      return (
        <div 
          className={[styles.child, selected?styles.selected:''].join(" ")} key={`child${item.id}`} 
          onClick={() => {this.handleChildClick(item)}}
        >
          <span className={styles.c_text}>{item.label}</span>
        </div>
      );
    });
  }

  render() {
    const { data, defaultValue } = this.props;

    return (
      <div className={styles.c_wrapper}>
        {this.renderChildren(data, defaultValue)}
      </div>
    )
  }
}

export default Child;