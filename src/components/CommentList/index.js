import React, { Component } from 'react';
import { Row, Col, List, Avatar, Icon, Input, Button,  } from 'antd';
import { formatMessage } from 'umi/locale';
import Link from 'umi/link';
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

  onLoadMore = (commentId) => {
    const { onGetMoreComment } = this.props;
    onGetMoreComment(commentId);
  }

  render() {
    const { listData } = this.props;
    const { inputVisible, inputValue, currentId, } = this.state;
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
        size='middle'
        itemLayout='verticle'
        locale={{emptyText:''}}
        pagination={listData.length>0?{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 8,
        }:false}
        dataSource={listData}
        renderItem={item => (
          <div>
            <List.Item
              key={item.addTime}
              actions={[
                <span style={{marginLeft: 46}} onClick={()=>{this.handleClick(item.id)}}>
                  <Icon type={'message'} style={{ marginRight: 8 }} />
                  {item.commentsCount==0?'':item.commentsCount}
                </span>]}
             >
              <List.Item.Meta
                avatar={<Link to={`/account/center/waitAnswer/${item.uid}`}><Avatar src={item.avatarFile} /></Link>}
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
                loadMore={item.commentsCount>3 && item.commentlist.length==3?<LoadMore commentId={item.id} />:null}
                dataSource={item.commentlist}
                renderItem={el => (
                  <List.Item key={item.addTime}>
                    <List.Item.Meta
                      avatar={<Link to={`/account/center/waitAnswer/${item.uid}`}><Avatar src={el.avatarFile} /></Link>}
                      title={<div><a>{el.userName}</a><span className={styles.add_time}>{moment(el.addTime).format('YYYY-MM-DD mm:ss')}</span></div>}
                      description={el.message}
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