import React, { Fragment, PureComponent } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import RichTextEditor from '@/components/RichTextEditor';
import CommentList from '@/components/CommentList';
import ShareUser from './ShareUser';
import BraftEditor from 'braft-editor';
import { ContentUtils } from 'braft-utils'
import { ImageUtils } from 'braft-finder'
import { notificationTip, isMobile } from  '@/utils/utils';
import { formatMessage, FormattedMessage } from 'umi/locale';
import { Row, Col, Icon, Button, Input, Avatar, message, Form, Divider, Upload, Drawer } from 'antd';
import moment from 'moment';
import styles from './Answer.less';
//import bestSrc from '@/assets/best.png';
import bestSrc from '@/assets/xbkyaner.png';

//const colLayout = { xs: 24, sm: 24, md: 24, lg: 16, xl: 16, xxl: 16 };
const colLayout = { xs: 24, sm: 24, md: 24, lg: 24, xl: 24, xxl: 24 };
const colLayout1 = { xs: 24, sm: 18, md: 19, lg: 20, xl: 21, xxl: 21 };
const colLayout2 = { xs: 24, sm: 6, md: 5, lg: 4, xl: 3, xxl: 3 };
const FormItem = Form.Item;
const TextArea = Input.TextArea;
const controls = [
  'bold',
  'italic',
  'underline',
  'text-color',
  'separator',
  'link',
  'separator',
];

@connect(({ global, question }) => ({
  global,
  question,
}))
@Form.create()
class Answer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      inputVisible: false,
      inputValue: '',
      isFormVisible: false,
      editorState: BraftEditor.createEditorState(null),
      agreeCount: 0,                      // 点赞数
      againstCount: 0,                    // 点踩数
      commentCount: 0,                    // 评论数
      comments: [],                       // 评论列表
      isFocus: false,                     // 是否关注  
      isAgree: 0,                         // 1(点赞)、-1(点踩)、0(没有点赞也没点踩)     
      loading: true,                      // 评论列表加载
    }
    this.requestCommetCount = 0;          // 请求评论列表次数, 只请求一次
    this.commentId = -1;                  // 评论id
    this.id = props.match.params.id;      // 问题id
    this.currentUser = sessionStorage.getItem('user')? JSON.parse(sessionStorage.getItem('user')):null;
  }

  componentDidMount(){
    this.getQuestionDetail();
    this.isFocus(this.id);
  }

  componentWillUnmount() {
    // 销毁redeux中的数据
    const { dispatch } = this.props;
    dispatch({
      type: 'question/destory',
    });
  }

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

  // 得到问题详情
  getQuestionDetail = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'question/getDetail',
      id: this.id,
    }).then(() => {
      const { question: { qDetailRes }} = this.props;
      if(qDetailRes && qDetailRes.code == 200) {
        const { data: { answer }} = qDetailRes;
        if(answer) {
          dispatch({
            type: 'global/getOtherUserInfo',
            params: {
              uid: answer.uid
            }
          });
        }
        // 答案若存在
        if(answer) {
          this.isVote(answer.answerId); // 是否点赞
          const { agreeCount, againstCount, commentCount } = answer;
          this.setState({
            agreeCount, againstCount, commentCount
          });
        }
      }else{
        setTimeout(() => {
          router.push('/'); // 返回到首页
        }, 500);
        return;
      }
    });
  }

  // 是否点赞
  isVote = (answerId) => {
    if(localStorage.getItem('access_token')){
      const { dispatch } = this.props;
      dispatch({
        type: 'question/isVote',
        params:{
          answerId
        }
      }).then(() => {
        const { question: { isVoteRes }} = this.props;
        if(isVoteRes && isVoteRes.code === 200) {
          this.setState({ isAgree: isVoteRes.data });
        }
      });
    }else{
      // 未登录
    }
  }

  // 是否关注
  isFocus = (questionId) => {
    if(localStorage.getItem('access_token')) {
      const { dispatch } = this.props;
      dispatch({
        type: 'question/isFocus',
        payload: {
          questionId
        }
      }).then(() => {
        const { question: { isFocusRes }} = this.props;
        if(isFocusRes && isFocusRes.code === 200) {
          this.setState({ isFocus: isFocusRes.data });
        }
      });
    }
  }

  // 显示评论
  showComment = (answerId) => {
    const { inputVisible } = this.state;
    this.setState({ inputVisible: !inputVisible });
    if(this.requestCommetCount === 0) {
      this.getComment(answerId);
      this.requestCommetCount = 1;
    }
  };

  // 请求评论
  getComment = (answerId) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'question/getComment',
      params:{
        answerId
      }
    }).then(() => {
      const { question: { commentRes }} = this.props;
      if(commentRes && commentRes.code === 200) {
        this.setState({ comments: commentRes.data, loading: false,});
      }
    });
  }

  // 获取更多评论
  getMoreComment = (commentId) =>{
    this.commentId = commentId;
    const { dispatch } = this.props;
    dispatch({
      type: 'question/getMoreComment',
      params:{
        id: commentId
      }
    }).then(()=> {
      const { question: { moreCommentRes }} = this.props;
      if(moreCommentRes && moreCommentRes.code === 200){
        const { comments } = this.state;
        let _comments = [...comments];
        _comments.forEach(item => {
          if(item.id === this.commentId){
            item.commentlist = moreCommentRes.data;
          }
        });
        this.setState({comments: _comments});
      }
    });
  }

  handleVote = (voteValue, answerId) => {
    const { dispatch, question: { isVoteRes } } = this.props;
    // 先查询是否点过赞 点过踩
    if(isVoteRes){
      // 登录过
      const isVote = isVoteRes.data;
      this.handleVoteTip(isVote, voteValue, answerId);
    }else {
      dispatch({
        type: 'question/isVote',
        params:{
          answerId
        }
      }).then(()=>{
        const { dispatch, question: { isVoteRes } } = this.props;
        if(isVoteRes && isVoteRes.code ===200){
          this.handleVoteTip(isVoteRes.data, voteValue, answerId);
        } 
      });
    }
  }

  handleVoteTip = (isVote, voteValue, answerId) => {
    const { dispatch } = this.props;
    if(isVote === 1 ){
      notificationTip(formatMessage({id: 'has_voted_like'}), true);
      return;
    }
    if(isVote === -1){
      notificationTip(formatMessage({id: 'has_voted_dislike'}), false);
      return;
    }
    if(isVote === 0) {
      dispatch({
        type: 'question/vote',
        params: {
          answerId, 
          voteValue
        },
      }).then(() => {
        const { question: {isVoteRes }} = this.props;
        if(isVoteRes && isVoteRes.code === 200){
          let { agreeCount, againstCount } = this.state;
          if(voteValue == 1) {
            agreeCount = agreeCount+1;
            this.setState({ agreeCount: agreeCount});
          }else {
            againstCount++;
            this.setState({ againstCount: againstCount++});
          }
          this.isVote(answerId);
        }
      });
    }
  }

  // 关注
  handleFocus = (questionId, type) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'question/focus',
      payload: {
        questionId,
        type,
      }
    }).then(() => {
      const { question: { focusRes }} = this.props;
      if(focusRes && focusRes.code === 200){
        this.isFocus(questionId)
      }
    });
  }

  // 分享
  handleShare = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'question/setShareDrawer',
      payload: true
    });
  }

  // 取消分享
  handleCancleShare = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'question/setShareDrawer',
      payload: false
    });
  }

  // 添加评论
  handleComment = (inputValue, answerId, commentId) => {
    const { dispatch } = this.props;
    if(!inputValue){
      notificationTip(formatMessage({id: 'not_edit_content'}));
      return;
    }
    dispatch({
      type: 'question/comment',
      params: {
        answerId, 
        message: inputValue,
        commentId
      },
    }).then(() =>{
      const { question: { commentedRes }} = this.props;
      if(commentedRes && commentedRes.code === 200) {
        // 前端追加数据
        const user = JSON.parse(sessionStorage.getItem('user'));
        const { comments, commentCount } = this.state;
        let _commentCount = commentCount, _comments = [...comments];
        if(commentId){
          // 二级评论追加数据
          _comments.forEach(item => {
            if(item.id === commentId){
              ++item.commentsCount;
              item.commentlist.unshift({
                addTime: new Date().getTime(),
                answerId: answerId,
                userName: user.userName,
                avatarFile: user.avatarFile,
                commentsCount: 0,
                message: inputValue,
                uid: user.uid,
              });
            }
          });
        }else{
          // 一级评论追加数据
          _comments.unshift({
            id: commentedRes.data,
            addTime: new Date().getTime(),
            answerId: answerId,
            userName: user.userName,
            avatarFile: user.avatarFile,
            commentsCount: 0,
            commentlist: [],
            message: inputValue,
            uid: user.uid,
          });
        }
        this.setState({comments:_comments, inputValue: '', commentCount: ++_commentCount});
      }
    });
  }

  // 修改评论
  handleModifyComment = (message, item) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'question/modifyComment',
      params: {
        message,
        commentId: item.id,
      }
    }).then(() => {
      const { question: modifyCommentRes } = this.props;
      if(modifyCommentRes && modifyCommentRes.code === 200) {

      }
    });
  }

  // 删除评论
  handleDeleteComment = (index, item) => {
    const { comments, commentCount } = this.state, { dispatch } = this.props, _comments = [...comments];
    let _commentCount = commentCount;
    dispatch({
      type: 'question/deleteComment',
      params: {
        commentId: item.id
      }
    }).then(() => {
      const { question: { deleteCommentRes }} = this.props;
      if(deleteCommentRes && deleteCommentRes.code === 200) {
        _commentCount --;
        if(item.commentId) {
          // 二级评论
          let _subComments = [];
          for(let i = 0, length = _comments.length; i < length; i++) {
            if(item.commentId === _comments[i].id) {
              _subComments =  _comments[i].commentlist;
              _comments[i].commentsCount --;
              break;
            }
          }
          _subComments.splice(index,1);
        }else{
          // 一级评论
          _comments.splice(index, 1);
        }
        this.setState({ 
          comments: _comments, 
          commentCount: _commentCount
        });
        this.setState({ comments: _comments});
      }
    });
  }

  handleChange = (editorState) => {
    this.setState({ editorState })
  }

  // 显示我来完善或我来回答对话框
  handleClick = () =>{
    this.setState(({isFormVisible})=> {
      return {
        isFormVisible: !isFormVisible
      }
    });
  }

  uploadHandler = (param) => {
    if (!param.file) {
      return false;
    }
    const { dispatch } = this.props;
    dispatch({
      type: 'global/upload',
      payload: {
        type: 'answer',
        file: param.file
      }
    }).then(()=> {
      const { global: {uploadRes: { data } } } = this.props;
      this.setState({
        editorState: ContentUtils.insertMedias(this.state.editorState, [{
          type: 'IMAGE',
          url: data.url
        }])
      })
    });
  }

  // 请求完善或请求回答
  handlePlease = (answerId) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'question/perfectAnswer',
      params: {
        answerId,
        reason: formatMessage({id: 'app.setting.user.please.answer'}),
        perfectAnswer: ''
      },
    }).then(() => {
      const { question: { pAnswerRes } } = this.props;
      if( pAnswerRes && pAnswerRes.code === 200){
        notificationTip(formatMessage({id: 'app.setting.admin.answer'}), true);
      }
    });
  }

  // 完善或回答问题
  handleSubmit = (e, answerId, questionId) =>{
    e.preventDefault();
    const { dispatch, form: { validateFields }} = this.props;
    const { editorState } = this.state;

    if(answerId){
      // 完善问题
      validateFields((err, values) => {
        if(!err){
          dispatch({
            type: 'question/perfectAnswer',
            params: {
              answerId,
              reason: formatMessage({id: 'app.setting.user.answer'}),
              perfectAnswer: editorState.toHTML()
            },
          }).then(() => {
            const { question: { pAnswerRes } } = this.props;
            if( pAnswerRes && pAnswerRes.code === 200){
              notificationTip(formatMessage({id: 'app.setting.answer.check'}), true);
              // 跳转到首页
              router.push({
                pathname: '/'
              });
            }
          });
        }
      });
    }else {
      // 回答问题
      if(!editorState.toText()){
        notificationTip(formatMessage({id: 'not_edit_content'}));
        return;
      }
      dispatch({
        type: 'question/answer',
        params: {
          questionId,
          content: editorState.toHTML()
        }
      }).then(() => {
        const { question: { answerRes } } = this.props;
        if(answerRes && answerRes.code === 200) {
          notificationTip(formatMessage({id: 'app.setting.answer.check'}), true);
          // 跳转到首页
          router.push({
            pathname: '/'
          });
        }
        // 跳转到首页
        router.push({
          pathname: '/'
        });
      });
    }
  }

  render() {
    let answer = {}, question = {};
    const { question: { qDetailRes, shareDrawerlVisible }, form: { getFieldDecorator }, global: { otherUserRes }} = this.props;
    const { inputVisible, inputValue, editorState, isFormVisible, agreeCount, againstCount, commentCount, comments, loading, isFocus, isAgree} = this.state;
    const extendControls = [
      {
        key: 'antd-uploader',
        type: 'component',
        component: (
          <Upload
            accept="image/*"
            showUploadList={false}
            customRequest={this.uploadHandler}
          >
            {/* 这里的按钮最好加上type="button"，以避免在表单容器中触发表单提交，用Antd的Button组件则无需如此 */}
            <button type="button" className="control-item button upload-button" data-title="插入图片">
              <Icon type="picture" theme="filled" />
            </button>
          </Upload>
        )
      }
    ]
    const answerAvatar = !otherUserRes || otherUserRes && otherUserRes.code === 200 && otherUserRes.data.uid === 8? bestSrc : otherUserRes.data.avatarFile;
    const answerUser = !otherUserRes || otherUserRes && otherUserRes.code === 200 && otherUserRes.data.uid === 8? '小白考研' : (otherUserRes.data.nickname || otherUserRes.data.userName);
    if(qDetailRes && qDetailRes.code === 200){
      answer = qDetailRes.data.answer,
      question = qDetailRes.data.question;
    }

    return (
      <GridContent>
        <div className={styles.main}>
          <Row>
            <Col {...colLayout}>
              <div className={styles.qdetailInfo}>
                <div className={styles.qtitle}>
                  <Icon type="question" className={styles.qicon} />
                  <span>{question.title}</span>
                </div>
                <div className={styles.qTime}>
                  <span>#提问时间：{moment(question.addTime).format('YYYY-MM-DD')}</span>
                  <span className={styles.view_wrapper} title='浏览量'>
                    <Icon type="eye" className={styles.view}/>{question.viewCount}
                  </span>
                  <span className={styles.heart_wrapper} onClick={() => this.handleFocus(question.id, isFocus?'0':'1')} title={isFocus?'取消关注':'关注'}>
                    <Icon type="heart" className={styles.heart} theme={isFocus?'filled':''}/>
                  </span>
                  <span className={styles.heart_wrapper} onClick={this.handleShare} title='分享'>
                    <Icon type="share-alt" className={styles.heart}/>
                  </span>
                </div>
              </div>
              <div className={styles.qDetail} dangerouslySetInnerHTML={{__html: question.detail}}/>
              <div className={styles.img_wrapper}>
                {question.imgs && question.imgs.map((img => {
                  return <img src={img} />
                }))}
              </div>
            </Col>
            {/*我来回答的情况*/}
            {!answer ? (
              <Row className={styles.answer_btn}>
              <Col span={11} className={styles.answer_center} onClick={() => {this.handlePlease(answer.answerId )}}>
                <Icon type="user-add" className={styles.icon}/>
                {answer && answer.answerId ? formatMessage({ id: 'app.settings.pleasePerfect' }) : formatMessage({ id: 'app.settings.pleaseAnswer' })}
              </Col>
              <Col span={2} className={styles.answer_center}>
                <Divider type="vertical" />
              </Col>
              <Col span={11} className={styles.answer_center} onClick={this.handleClick}>
                <Icon type="form" className={styles.icon}/>
                {answer && answer.answerId ? formatMessage({ id: 'app.settings.perfect' }) : formatMessage({ id: 'app.settings.answer' })}
              </Col>
            </Row>
            ) : null}
            {/*我来完善的情况*/}
            {answer && answer.answerId ? (
              <Col {...colLayout}>
                <div className={styles.title_wrapper}>
                  <img className={styles.answer_avatar} src={answerAvatar} />
                  <h3 className={styles.title}>{answerUser}</h3>
                </div>
                <div className={styles.answer} dangerouslySetInnerHTML={{__html: answer.answerContent}}/>
                <div className={styles.operator}>
                  <span className={styles.icon_wrapper} onClick={() => this.handleVote(1,answer.answerId)}>
                    <Icon type="like" theme={isAgree === 1?'filled':'' } className={isAgree === 1?styles.iconSelected:styles.icon}/>{agreeCount}
                  </span>
                  <span className={styles.icon_wrapper} onClick={() => this.handleVote(-1,answer.answerId)}>
                    <Icon type="dislike" theme={isAgree === -1?'filled':''} className={isAgree === -1?styles.iconSelected:styles.icon}/>{againstCount}
                  </span>
                  <span title='评论' className={styles.icon_wrapper} onClick={() => this.showComment(answer.answerId)}>
                    <Icon type="message" className={styles.icon}/>{commentCount}
                  </span>
                </div>
                <Row className={styles.answer_btn}>
                  <Col span={11} className={styles.answer_center} onClick={() => {this.handlePlease(answer.answerId )}}>
                    <Icon type="user-add" className={styles.icon}/>
                    {answer && answer.answerId ? formatMessage({ id: 'app.settings.pleasePerfect' }) : formatMessage({ id: 'app.settings.pleaseAnswer' })}
                  </Col>
                  <Col span={2} className={styles.answer_center}>
                    <Divider type="vertical" />
                  </Col>
                  <Col span={11} className={styles.answer_center} onClick={this.handleClick}>
                    <Icon type="form" className={styles.icon}/>
                    {answer && answer.answerId ? formatMessage({ id: 'app.settings.perfect' }) : formatMessage({ id: 'app.settings.answer' })}
                  </Col>
                </Row>
                {inputVisible && (
                  <div className={styles.comment_wraper}>
                    <div className={styles.flex_wrapper}>
                      {this.currentUser?<img className={styles.flex_left} src={this.currentUser.avatarFile} />:<Avatar size={32} icon="user" />}
                      <div className={styles.flex_right}>
                        <TextArea
                          className={styles.textarea}
                          ref={this.saveInputRef}
                          type="text"
                          rows={3}
                          value={inputValue}
                          placeholder={formatMessage({id: 'rate_to_best_answer'})}
                          onChange={this.handleInputChange}
                          //onBlur={this.handleInputConfirm}
                          onPressEnter={this.handleInputConfirm}
                        />
                        <div className={styles.comment_btn_wrapper}>
                          <Button 
                            type='primary' 
                            className={styles.comment}
                            onClick={() => this.handleComment(inputValue, answer.answerId)}
                          >
                            评论
                          </Button>
                        </div>
                      </div>
                    </div>
                    <CommentList 
                      listData={comments}
                      loading={loading}
                      onHandleComment={this.handleComment}
                      onHandleModifyComment={this.handleModifyComment}
                      onHandleDeleteComment={this.handleDeleteComment}
                      onGetMoreComment={this.getMoreComment}
                    />
                  </div>
                )}
              </Col>
            ) : null}
          </Row>
          <Row className={styles.form_box} style={{display: isFormVisible? 'block':'none'}}>
            <Col {...colLayout}>
              <Form onSubmit={(e) => this.handleSubmit(e, question.bestAnswer, question.id)}>
                {question.bestAnswer? (<FormItem className={styles.formitem}>
                  {getFieldDecorator('reason', {
                    rules: [
                      {
                        required: true,
                        message: formatMessage({ id: 'validation.reason.required' }),
                      },
                    ],
                  })(
                    <Input
                      size='large'
                      placeholder={formatMessage({ id: 'form.reason.placeholder' })}
                    />
                  )}
                </FormItem>):null
                }
                <FormItem>
                  <BraftEditor
                      value={editorState}
                      placeholder={formatMessage({ id: 'form.answer.placeholder' })}
                      contentClassName={styles.height}
                      className={styles.my_editor}
                      onChange={this.handleChange}
                      controls={controls}
                      extendControls={extendControls}
                    />
                </FormItem>
                <div className={styles.align_right}>
                  <Button htmlType="submit" type="primary" className={styles.submit}>
                    {formatMessage({id: 'app.settings.submit.answer'})}
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </div>
        <Drawer
          width={isMobile()?256:400}
          closable={false}
          visible={shareDrawerlVisible}
          footer={false}
          onClose={this.handleCancleShare}
        >
          <ShareUser/>
        </Drawer>
      </GridContent>
    );
  }
}

export default Answer;
