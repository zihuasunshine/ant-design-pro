import React, {Component, Fragment} from 'react';
import { Tag, Divider } from 'antd';
import styles from './style.less';

class Classify extends Component {

  handleClick = (item, flag, index) =>{
    const { onOptionClick } = this.props;
    onOptionClick && onOptionClick(item, flag, index);
  }

  render() {

    const { tags, options } = this.props;

    return (
      <div className={styles.classify_wrapper}>
        <div className={styles.tag_wrapper}>
          {tags.map((item, index) => {
            return tags.length !== index+1?(
              <Fragment key={`tag${index}`} >
                <span className={styles.tag} onClick={() =>{this.handleClick(item, 0, index)}}>{item.name}</span>
                <span className={styles.arrow}>></span>
              </Fragment>
            ):(
              <Fragment key={`tag${index}`} >
                <span className={styles.tag}>{item.name}</span>
              </Fragment>
            )
          })}
        </div>
        {options.length>0?null:<Divider dashed={true}/>}
        {options.length > 0?(
          <div className={styles.options_wrapper}>
            {options.map((item, index) => {
              return <Tag color='blue'  key={`option${index}`} className={styles.option} onClick={()=>{this.handleClick(item, 1)}}>{item.name}</Tag>
            })}
          </div>
        ):null}
      </div>
    )
  }
}

export default Classify;