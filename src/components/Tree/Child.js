import React, { Component } from 'react';
import styles from './style.less';
import { join } from 'path';

class Child extends Component {

  state = {
    currentValue: this.props.defaultValue
  }

  handleChildClick = (value) =>{
    const { onSelect } = this.props;
    onSelect && onSelect(value);
    this.setState({
      currentValue: value
    });
  }

  renderChildren = (data, currentValue) => {
    return data.map(item =>{
      const selected = currentValue === item.value;
      return (
        <div 
          className={[styles.child, selected?styles.selected:''].join(" ")} key={`child${item.id}`} 
          onClick={() => {this.handleChildClick(item.value)}}
        >
          <span className={styles.c_text}>{item.label}</span>
        </div>
      );
    });
  }

  render() {
    const { data } = this.props;
    const { currentValue } = this.state;

    return (
      <div className={styles.c_wrapper}>
        {this.renderChildren(data, currentValue)}
      </div>
    )
  }
}

export default Child;