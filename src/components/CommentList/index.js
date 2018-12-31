import React, { Component } from 'react';
import { Row, Col, List, Avatar, Icon, Input, Button,  } from 'antd';
import { formatMessage } from 'umi/locale';
import moment from 'moment';
import styles from './style.less';

const IconText = ({ type, text }) => (
  <span style={{marginLeft: 46}}>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);


class CommentList extends Component {

  constructor(props){
    super(props);
    this.state={
      inputVisible: true,
      inputValue: '',
      currentId: '',
    }
  }

  showInput = () => {
    const { inputVisible } = this.state;
    this.setState({ inputVisible: !inputVisible });
  };

  saveInputRef = input => {
    this.input = input;
  };

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

  handleClick = (id) => {
    this.setState({ currentId: id});
  }

  handleComment = (answerId, commentId) => {
    const { inputValue } = this.state;
    const { onHandleComment } = this.props;
    onHandleComment(inputValue, answerId, commentId);
    this.setState({inputValue: ''});
  }

  render() {
    const { listData } = this.props;
    const { inputVisible, inputValue, currentId } = this.state;

    return (
      <List
        size='middle'
        itemLayout='verticle'
        locale={{emptyText:''}}
        pagination={listData.length>0?{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }:false}
        dataSource={listData}
        renderItem={item => (
          <div>
            <List.Item
              key={item.addTime}
              actions={[
                <span style={{marginLeft: 46}} onClick={()=>{this.handleClick(item.id)}}>
                  <Icon type={'message'} style={{ marginRight: 8 }} />
                  {item.commentlist.length?item.commentlist.length:''}
                </span>]}
             >
              <List.Item.Meta
                avatar={<Avatar src={item.avatarFile} />}h
                title={<div><a>{item.userName}</a><span className={styles.add_time}>{moment(item.addTime).format('YYYY-MM-DD HH:mm')}</span></div>}
                description={item.message}
              />
            </List.Item>
            {item.id === currentId && (
              <div className={styles.comment_wraper}>
                <Row>
                  <Col span={22}>
                    <Input
                      ref={this.saveInputRef}
                      type="text"
                      style={{ width: '98%' }}
                      value={inputValue}
                      placeholder={formatMessage({id: 'rate_to_best_answer'})}
                      onChange={this.handleInputChange}
                      //onBlur={this.handleInputConfirm}
                      onPressEnter={this.handleInputConfirm}
                    />
                  </Col>
                  <Col span={2}>
                    <Button type='primary' onClick={() => this.handleComment(item.answerId, item.id)}>评论</Button>
                  </Col>
                </Row>
              </div>
            )}
            <div className={styles.sub_comment}>
              <List
                size='small'
                locale={{emptyText:''}}
                dataSource={item.commentlist}
                renderItem={item => (
                  <List.Item key={item.addTime}>
                    <List.Item.Meta
                      avatar={<Avatar src={item.avatarFile} />}
                      title={<div><a>{item.userName}</a><span className={styles.add_time}>{moment(item.addTime).format('YYYY-MM-DD mm:ss')}</span></div>}
                      description={item.message}
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