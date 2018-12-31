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
    }
    this.id = props.match.params.id
  }

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
      if(qDetailRes.code !== 200) {
        message.error(formatMessage({id:qDetailRes.msg})+',即将跳转到首页');
        setTimeout(() => {
          router.push('/'); // 返回到首页
        }, 500);
        return;
      }else{
        const { data: { answer }} = qDetailRes;
        if(answer) this.isVote(answer.answerId);
        if(answer) this.getComment(answer.answerId);
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

  handleVote = (voteValue, answerId) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'question/vote',
      params: {
        answerId, 
        voteValue
      },
    }).then(() => {
      
    });
  }

  handleComment = (answerId) => {
    const { inputValue } = this.state;
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
      },
      token: sessionStorage.getItem('access_token')
    }).then(() =>{
      const { question: { commentRes }} = this.props;
      if(commentRes && commentRes.code === 200) {
        this.getComment(answerId);
        this.setState({inputValue: ''});
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
    const extendControls = [
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
    const { question: { qDetailRes, isVoteRes, commentRes }, form: { getFieldDecorator }} = this.props;
    const isLiked = isVoteRes && isVoteRes.data == 1; // 点过赞
    const isNotCare = isVoteRes && isVoteRes.data == 0; // 没点赞也没有点踩 
    const isDislike = isVoteRes && isVoteRes.data == -1; // 点过踩
    let answer = {}, question = {};
    if(qDetailRes && qDetailRes.code === 200){
      answer = qDetailRes.data.answer,
      question = qDetailRes.data.question;
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
                  <span className={styles.icon_wrapper} onClick={isNotCare?() => {this.handleVote(1,answer.answerId)}:()=>{}}>
                    <Icon type="like" theme={isLiked?'filled':'' } className={styles.icon}/>{answer.agreeCount}
                  </span>
                  <span className={styles.icon_wrapper} onClick={isNotCare? () => {this.handleVote(-1,answer.answerId)}:()=>{}}>
                    <Icon type="dislike" theme={isDislike?'filled':''} className={styles.icon}/>{answer.againstCount}
                  </span>
                  <span title='评论' className={styles.icon_wrapper} onClick={this.showInput}>
                    <Icon type="message" className={styles.icon}/>{answer.commentCount}
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
                        <Button type='primary' size='large' onClick={() => this.handleComment(answer.answerId)}>评论</Button>
                      </Col>
                    </Row>
                    <CommentList listData={commentRes && commentRes.code===200?commentRes.data:[]}/>
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
                      extendControls={extendControls}
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
