import React, { Fragment, PureComponent } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import RichTextEditor from '@/components/RichTextEditor';
import BraftEditor from 'braft-editor';
import { notificationTip } from  '@/utils/utils';
import { formatMessage, FormattedMessage } from 'umi/locale';
import { Row, Col, Icon, Button, Input, Avatar, message, Form, Divider } from 'antd';
import styles from './Answer.less';
import bestSrc from '@/assets/best.png';

const colLayout = { xs: 24, sm: 24, md: 24, lg: 16, xl: 16, xxl: 16 };
const FormItem = Form.Item;
const controls = [
  'bold',
  'italic',
  'underline',
  'text-color',
  'separator',
  'link',
  'separator',
  'media',
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
    }
    this.id = props.match.params.id
  }

  componentDidMount(){
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
        this.isVote(answer.answerId);
      }
    });
  }

  showInput = () => {
    const { inputVisible } = this.state;
    if(inputVisible){
      return;
    }
    this.setState({ inputVisible: true }, () => this.input.focus());
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

  handleVote = (voteValue, answerId) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'question/vote',
      params: {
        answerId, 
        voteValue
      },
    });
  }

  handleComment = (answerId) => {
    const { inputValue } = this.state;
    const { dispatch } = this.props;
    dispatch({
      type: 'question/comment',
      params: {
        answerId, 
        message: inputValue,
      },
      token: sessionStorage.getItem('access_token')
    });

  }

  handleSubmit = (e, answerId) =>{
    e.preventDefault();
    const { dispatch, form: { validateFields }} = this.props;
    validateFields((err, values) => {
      if(!err){
        dispatch({
          type: 'question/perfectAnswer',
          params: {
            answerId,
            reason: values.reason,
            perfectAnswer: values.answer.toHTML()
          },
          token: sessionStorage.getItem('access_token')
        });
      }
    });
  }

  render() {
    const { question: { qDetailRes }, form: { getFieldDecorator }} = this.props;
    let answer = {}, question = {};
    if(qDetailRes && qDetailRes.code === 200){
      answer = qDetailRes.data.answer,
      question = qDetailRes.data.question;
    }
    const { inputVisible, inputValue } = this.state;
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
            {answer.answerId ? (
              <Col {...colLayout}>
                <div className={styles.title_wrapper}>
                  <img alt="best" src={bestSrc} />
                  <h3 className={styles.title}>最佳答案</h3>
                </div>
                <div className={styles.answer} dangerouslySetInnerHTML={{__html: answer.answerContent}}></div>
                <div className={styles.operator}>
                  <span className={styles.icon_wrapper} onClick={() => {this.handleVote(1,answer.answerId)}}>
                    <Icon type="like" className={styles.icon}/>{answer.agreeCount}
                  </span>
                  <span className={styles.icon_wrapper} onClick={() => {this.handleVote(-1,answer.answerId)}}>
                    <Icon type="dislike" className={styles.icon}/>{answer.againstCount}
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
                          onBlur={this.handleInputConfirm}
                          onPressEnter={this.handleInputConfirm}
                        />
                      </Col>
                      <Col span={2}>
                        <Button type='primary' size='large' onClick={() => this.handleComment(answer.answerId)}>评论</Button>
                      </Col>
                    </Row>
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
                    {answer.answerId ? formatMessage({ id: 'app.settings.perfect' }) : formatMessage({ id: 'app.settings.answer' })}
                  </span>
                </div>
             </Divider>
            </Col>
          </Row>
          <Row className={styles.form_box}>
            <Col {...colLayout}>
              <Form onSubmit={(e) => this.handleSubmit(e, question.bestAnswer)}>
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
                  {getFieldDecorator('answer', {
                    validateTrigger: 'onBlur',
                    rules: [{
                      required: true,
                      validator: (_, value, callback) => {
                        if (value.isEmpty()) {
                          callback(formatMessage({ id: 'validation.answer.required' }))
                        } else {
                          callback()
                        }
                      }
                    }]
  
                  })(
                    <BraftEditor
                      contentClassName={styles.height}
                      className={styles.my_editor}
                      controls={controls}
                      placeholder={formatMessage({ id: 'form.answer.placeholder' })}
                    />
                  )}
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
