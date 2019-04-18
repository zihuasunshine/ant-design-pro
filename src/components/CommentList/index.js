import React, { Component, Fragment } from 'react';
import { Row, Col, List, Avatar, Icon, Input, Button,  } from 'antd';
import { formatMessage } from 'umi/locale';
import Link from 'umi/link';
import moment from 'moment';
import styles from './style.less';

const colLayout1 = { xs: 24, sm: 18, md: 19, lg: 20, xl: 21, xxl: 21 };
const colLayout2 = { xs: 24, sm: 6, md: 5, lg: 4, xl: 3, xxl: 3 };

const IconText = ({ title, type, text, handleClick }) => (
  <span onClick={handleClick} style={{margin: '0 4px'}}>
    <Icon title={title} type={type} style={{ marginRight: 4 }} />
    {text}
  </span>
);

class CommentList extends Component {

  constructor(props){
    super(props);
    this.state={
      inputVisible: true,
      inputValue: '',
      currentId: '',           // 控制添加评论框的显示隐藏
      currentInputId: '',      // 控制显示评论的span还是修改的input
      prevValue: [],           // 修改时, 一级评论的内容为空时取上一次的值
      subPrevValue: [],        // 修改时, 二级评论的内容为空时取上一次的值
    }
  }

  showInput = () => {
    const { inputVisible } = this.state;
    this.setState({ inputVisible: !inputVisible });
  };

  saveInputRef = input => {
    this.input = input;
  };

  /**
   * type 0: 一级回复 1: 二级回复
   */
  getActions = (type, index, item) => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    let actions = [];
    if(type === 0) {
      actions.push(<IconText title='评论' type='message' text={item.commentsCount==0?'':item.commentsCount} handleClick={()=>this.setCurrentId(item.id)}/>);
    }
    if(user && user.uid === item.uid) {
      actions.push(<IconText title='修改' type='edit' text='' handleClick={()=>this.handleFocus(type, index, item)}/>);
      actions.push(<IconText title='删除' type='delete' text='' handleClick={()=>this.handleDeleteComment(index, item)}/>);
    }
    return actions;
  }

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const { inputValue } = this.state;
    if (!inputValue) {
      this.setState({inputVisible: false})
      return;
    }
  };

  setCurrentId = (id) => {
    this.setState({ currentId: id});
  }

  hideCommentBox = () => {
    this.setState({currentId: ''});
  }


  // 添加评论
  handleComment = (answerId, commentId) => {
    const { prevValue, subPrevValue } = this.state, _prevValue = [...prevValue], _subPrevValue = [...subPrevValue];
    const prevInputValue = commentId? _subPrevValue : _prevValue;
    const { inputValue } = this.state;
    prevInputValue.splice(0,0,inputValue);  // 添加
    const { onHandleComment } = this.props;
    onHandleComment(inputValue, answerId, commentId);
    this.setState({inputValue: '', prevValue: _prevValue, subPrevValue: _subPrevValue});
  }

  // 获得焦点
  handleFocus = (type, index, item) => {
    this.setState({ currentInputId: item.id }, () => {
      type === 0? this[`modifyInput${index}`].focus() : this[`subModifyInput${index}`].focus();
    });
  }


  // 失去焦点 => 修改评论
  handleModifyComment = (index, item) => {
    // item.commentId为true 二级评论
    this.setState({ currentInputId: '' });
    const { prevValue, subPrevValue } = this.state, _prevValue = [...prevValue], _subPrevValue = [...subPrevValue];
    const prevInputValue = item.commentId? _subPrevValue : _prevValue;
    const input = item.commentId? this[`subModifyInput${index}`] : this[`modifyInput${index}`];
    const value = input.state.value;  
    if(!value) {
      input.setValue(prevInputValue[index] || item.message);
      return;
    }
    if(value !== prevInputValue[index]) {
      const { onHandleModifyComment } = this.props;
      prevInputValue[index] = value;
      onHandleModifyComment(value, item);
    }
    this.setState({prevValue: _prevValue, subPrevValue: _subPrevValue});
  }

  // 删除评论
  handleDeleteComment = (index, item) => {
    const { prevValue, subPrevValue } = this.state, _prevValue = [...prevValue], _subPrevValue = [...subPrevValue];
    const prevInputValue = item.commentId? _subPrevValue : _prevValue;
    prevInputValue.splice(index, 1);
    const { onHandleDeleteComment } = this.props;
    onHandleDeleteComment(index, item);
    this.setState({prevValue: _prevValue, subPrevValue: _subPrevValue});
  }

  onLoadMore = (commentId) => {
    const { onGetMoreComment } = this.props;
    onGetMoreComment(commentId);
  }

  render() {
    const { listData, loading } = this.props;
    const { inputVisible, inputValue, currentId, currentInputId, prevValue, subPrevValue } = this.state;
    console.log(subPrevValue);
    
    const LoadMore = ({commentId}) => (
      <div style={{
        textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px',
      }}
      >
        <Button onClick={() => this.onLoadMore(commentId)}>查看更多</Button>
      </div>
    );

    return (
      <List
        className={styles.comment_box}
        loading={loading}
        size='middle'
        itemLayout='verticle'
        locale={{emptyText:' '}}
        pagination={listData.length>0?{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 8,
        }:false}
        dataSource={listData}
        renderItem={(item, index) => (
          <div className={styles.list_wrapper}>
            <List.Item
              key={item.addTime}
              actions={this.getActions(0, index, item)}
             >
              <List.Item.Meta
                // avatar={<Link to={`/account/center/waitAnswer/${item.uid}`}><Avatar src={item.avatarFile} /></Link>}
                avatar={<Avatar src={item.avatarFile}/>}
                title={<div><a>{item.userName}</a><span className={styles.add_time}>{moment(item.addTime).format('YYYY-MM-DD HH:mm')}</span></div>}
                description={<Fragment>
                              <span className={styles.modify_span} style={{display:item.id === currentInputId?'none':'inline-block'}}>{prevValue[index] || item.message}</span>
                              <Input 
                                defaultValue={item.message}
                                className={styles.modify_input} 
                                style={{display:item.id === currentInputId?'inline-block':'none'}}
                                ref={(input) => this[`modifyInput${index}`] = input} 
                                onBlur={() => this.handleModifyComment(index, item)}
                              />
                              </Fragment>
                            }
              />
            </List.Item>
            {item.id === currentId && (
              <div className={styles.comment_wraper}>
                <Row gutter={8}>
                  <Col {...colLayout1}>
                    <Input
                      ref={this.saveInputRef}
                      type="text"
                      style={{ width: '100%' }}
                      value={inputValue}
                      placeholder={formatMessage({id: 'rate_to_best_answer'})}
                      onChange={this.handleInputChange}
                      //onBlur={this.handleInputConfirm}
                      onPressEnter={this.handleInputConfirm}
                    />
                  </Col>
                  <Col {...colLayout2} className={styles.comment_btn_wrapper}>
                    <span className={styles.cancle_comment} onClick={this.hideCommentBox}>取消</span>
                    <Button 
                      className={styles.comment}
                      type='primary' 
                      onClick={() => this.handleComment(item.answerId, item.id)}
                    >
                        评论
                      </Button>
                  </Col>
                </Row>
              </div>
            )}
            <div className={styles.sub_comment}>
              <List
                locale={{emptyText:' '}}
                loadMore={(item.commentsCount>3 && item.commentlist.length < 3) || item.commentsCount>3 && item.commentlist.length==3?<LoadMore commentId={item.id} />:null}
                dataSource={item.commentlist}
                renderItem={(el, index) => (
                  <List.Item 
                    key={item.addTime}
                    actions={this.getActions(1, index, el)}
                  >
                    <List.Item.Meta
                      //avatar={<Link to={`/account/center/waitAnswer/${item.uid}`}></Link>}
                      avatar={<Avatar src={el.avatarFile} size='small'/>}
                      title={<div><a>{el.userName}</a><span className={styles.add_time}>{moment(el.addTime).format('YYYY-MM-DD HH:mm')}</span></div>}
                      description={<Fragment>
                                    <span className={styles.modify_span} style={{display:el.id === currentInputId?'none':'inline-block'}}>{subPrevValue[index] || el.message}</span>
                                    <Input 
                                      defaultValue={el.message}
                                      ref={(input) => this[`subModifyInput${index}`] = input} 
                                      className={styles.modify_input} 
                                      style={{display:el.id === currentInputId?'inline-block':'none'}}
                                      onBlur={() => {this.handleModifyComment(index, el)}}
                                    />
                                   </Fragment>
                                  }
                    />
                  </List.Item>
                )}
              />
            </div>
          </div>
        )}
      />
    )
  }
}

export default CommentList;