import React, { Fragment, PureComponent } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import RichTextEditor from '@/components/RichTextEditor';
import CommentList from '@/components/CommentList';
import BraftEditor from 'braft-editor';
import { ContentUtils } from 'braft-utils'
import { ImageUtils } from 'braft-finder'
import { notificationTip } from  '@/utils/utils';
import { formatMessage, FormattedMessage } from 'umi/locale';
import { Row, Col, Icon, Button, Input, Avatar, message, Form, Divider, Upload } from 'antd';
import styles from './Answer.less';
import bestSrc from '@/assets/best.png';

//const colLayout = { xs: 24, sm: 24, md: 24, lg: 16, xl: 16, xxl: 16 };
const colLayout = { xs: 24, sm: 24, md: 24, lg: 24, xl: 24, xxl: 24 };
const FormItem = Form.Item;
const controls = [
  'bold',
  'italic',
  'underline',
  'text-color',
  'separator',
  'link',
  'separator',
];

@connect(({ question }) => ({
  question,
}))
@Form.create()
class Answer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      inputVisible: false,
      inputValue: '',
      editorState: BraftEditor.createEditorState(null),
      likeCount: 0,       // 点赞数
      dislikeCount: 0,    // 点踩数
      commentCount: 0,    // 评论数
      messages: [],    // 评论列表
    }
    this._comments = [];
    this.count = 0;
    this.commentId = -1;
    this.id = props.match.params.id;
  }

  extendControls = [
    {
      key: 'antd-uploader',
      type: 'component',
      component: (
        <Upload
          accept="image/*"
          showUploadList={false}
          //onChange = {}
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

  componentDidMount(){
    this.getQuestionDetail();
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

  getQuestionDetail = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'question/getDetail',
      id: this.id,
    }).then(() => {
      const { question: { qDetailRes }} = this.props;
      if(qDetailRes && qDetailRes.code == 200) {
        const { data: { answer }} = qDetailRes;
        if(answer) this.isVote(answer.answerId);
        if(answer) this.getComment(answer.answerId);
      }else{
        setTimeout(() => {
          router.push('/'); // 返回到首页
        }, 500);
        return;
      }
    });
  }

  isVote = (answerId) => {
    if(sessionStorage.getItem('access_token')){
      const { dispatch } = this.props;
      dispatch({
        type: 'question/isVote',
        params:{
          answerId
        }
      });
    }else{
      // 未登录
    }

  }

  getComment = (answerId) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'question/getComment',
      params:{
        answerId
      }
    });
  }

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
        const { messages } = this.state;
        let _messages = [...messages];
        _messages.forEach(item => {
          if(item.id === this.commentId){
            item.commentlist = moreCommentRes.data;
          }
        });
        this.setState({messages: _messages});
      }
    });
  }

  handleVote = (voteValue, answerId) => {
    const { dispatch, question: { isVoteRes } } = this.props;
    // 先查询是否点过赞 点过踩
    if(isVoteRes){
      // 登陆过
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
          let { likeCount, dislikeCount } = this.state;
          if(voteValue == 1) {
            likeCount = likeCount+1;
            this.setState({ likeCount: likeCount});
          }else {
            dislikeCount++;
            this.setState({ dislikeCount: dislikeCount++});
          }
          this.isVote(answerId);
        }
      });
    }
  }

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
      token: sessionStorage.getItem('access_token')
    }).then(() =>{
      const { question: { commentRes }} = this.props;
      if(commentRes && commentRes.code === 200) {
        // 前端追加数据
        const user = JSON.parse(sessionStorage.getItem('user'));
        const { messages, commentCount } = this.state;
        let _commentCount = commentCount;
        let _messages = [...messages];
        if(commentId){
          // 二级评论追加数据
          _messages.forEach(item => {
            if(item.id === commentId){
              ++item.commentsCount;
              item.commentlist.unshift({
                addTime: new Date().getTime(),
                answerId: answerId,
                userName: user.userName,
                avatarFile: user.avatarFile,
                commentsCount: 0,
                message: inputValue,
              });
            }
          });
        }else{
          // 一级评论追加数据
          _messages.unshift({
            addTime: new Date().getTime(),
            answerId: answerId,
            userName: user.userName,
            avatarFile: user.avatarFile,
            commentsCount: 0,
            message: inputValue,
          });
        }
        this.setState({messages:_messages, inputValue: '', commentCount: ++_commentCount});
      }
    });

  }

  handleChange = (editorState) => {
    this.setState({ editorState })
  }

  uploadHandler = (param) => {
    if (!param.file) {
      return false;
    }
    const { dispatch } = this.props;
    dispatch({
      type: 'question/upload',
      payload: {
        type: 'answer',
        file: param.file
      }
    }).then(()=> {
      const { question: {uploadRes: { data } } } = this.props;
      this.setState({
        editorState: ContentUtils.insertMedias(this.state.editorState, [{
          type: 'IMAGE',
          url: data.url
        }])
      })
    });
  }

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
              reason: values.reason,
              perfectAnswer: editorState.toHTML()
            },
          }).then(() => {
            // 跳转到首页
            router.push({
              pathname: '/'
            });
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
        // 跳转到首页
        router.push({
          pathname: '/'
        });
      });
    }
  }

  render() {
    const { question: { qDetailRes, isVoteRes, commentRes, moreCommentRes }, form: { getFieldDecorator }} = this.props;
    const { likeCount, dislikeCount, commentCount, messages} = this.state;
    let answer = {}, question = {};
    if (this.count === 0) {
      if (qDetailRes && qDetailRes.code === 200 && commentRes && commentRes.code === 200) {
        const as = qDetailRes.data.answer;
        const comments = commentRes.data;
        this.state.likeCount = as.agreeCount;
        this.state.dislikeCount = as.againstCount;
        this.state.commentCount = as.commentCount;
        this.state.messages = commentRes.data;
        this.count = 1;
      }
    }
    const agreeCount = likeCount == 0? (qDetailRes && qDetailRes.data? qDetailRes.data.answer.agreeCount : likeCount) : likeCount;
    const disagreeCount = dislikeCount == 0? (qDetailRes && qDetailRes.data? qDetailRes.data.answer.againstCount : dislikeCount) : dislikeCount;
    const commentsCount = commentCount == 0? (qDetailRes && qDetailRes.data? qDetailRes.data.answer.commentCount : commentCount) : commentCount;
    const messageList = messages.length == 0?(commentRes && commentRes.data? commentRes.data : messages) : messages;


    const isLiked = isVoteRes && isVoteRes.data == 1; // 点过赞
    const isNotCare = isVoteRes && isVoteRes.data == 0; // 没点赞也没有点踩 
    const isDislike = isVoteRes && isVoteRes.data == -1; // 点过踩
    if(qDetailRes && qDetailRes.code === 200){
      answer = qDetailRes.data.answer,
      question = qDetailRes.data.question;
    }
    if(commentRes && commentRes.code === 200){
      this._comments = commentRes.data;
    }
    const { inputVisible, inputValue, editorState } = this.state;
    return (
      <GridContent>
        <div className={styles.main}>
          <Row>
            <Col {...colLayout}>
              <h4>
                {question.category_f_name &&
                  question.category_f_name +
                    '>' +
                    question.category_s_name +
                    '>' +
                    question.category_t_name}
              </h4>
            </Col>
            <Col {...colLayout}>
              <div className={styles.qtitle}>
                <Icon type="question-circle" className={styles.qicon} />
                <span>{question.title}</span>
              </div>
              <div className={styles.qDetail}>{question.detail}</div>
            </Col>
            {answer && answer.answerId ? (
              <Col {...colLayout}>
                <div className={styles.title_wrapper}>
                  <img alt="best" src={bestSrc} />
                  <h3 className={styles.title}>最佳答案</h3>
                </div>
                <div className={styles.answer} dangerouslySetInnerHTML={{__html: answer.answerContent}}></div>
                <div className={styles.operator}>
                  <span className={styles.icon_wrapper} onClick={() => this.handleVote(1,answer.answerId)}>
                    <Icon type="like" theme={isLiked?'filled':'' } className={styles.icon}/>{agreeCount}
                  </span>
                  <span className={styles.icon_wrapper} onClick={() => this.handleVote(-1,answer.answerId)}>
                    <Icon type="dislike" theme={isDislike?'filled':''} className={styles.icon}/>{disagreeCount}
                  </span>
                  <span title='评论' className={styles.icon_wrapper} onClick={this.showInput}>
                    <Icon type="message" className={styles.icon}/>{commentsCount}
                  </span>
                </div>
                {inputVisible && (
                  <div className={styles.comment_wraper}>
                    <Row>
                      <Col span={22}>
                        <Input
                          ref={this.saveInputRef}
                          type="text"
                          size="large"
                          style={{ width: '98%' }}
                          value={inputValue}
                          placeholder={formatMessage({id: 'rate_to_best_answer'})}
                          onChange={this.handleInputChange}
                          //onBlur={this.handleInputConfirm}
                          onPressEnter={this.handleInputConfirm}
                        />
                      </Col>
                      <Col span={2}>
                        <Button type='primary' size='large' onClick={() => this.handleComment(inputValue, answer.answerId)}>评论</Button>
                      </Col>
                    </Row>
                    <CommentList 
                      listData={messageList}
                      onHandleComment={this.handleComment}
                      onGetMoreComment={this.getMoreComment}
                    />
                  </div>
                )}
              </Col>
            ) : null}
          </Row>
          <Row>
            <Col {...colLayout} className={styles.btn_wrapper}>
              <Divider dashed={true}>
                <div className={styles.answer_btn}>
                  <Icon type="edit" className={styles.icon}/>
                  <span className={styles.text}>
                    {answer && answer.answerId ? formatMessage({ id: 'app.settings.perfect' }) : formatMessage({ id: 'app.settings.answer' })}
                  </span>
                </div>
             </Divider>
            </Col>
          </Row>
          <Row className={styles.form_box}>
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
                      extendControls={this.extendControls}
                    />
                </FormItem>
                <div className={styles.align_right}>
                  <Button htmlType="submit" type="primary">{formatMessage({id: 'app.settings.submit.answer'})}</Button>
                </div>
              </Form>
            </Col>
          </Row>
        </div>
      </GridContent>
    );
  }
}

export default Answer;
