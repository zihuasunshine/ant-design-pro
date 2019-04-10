import React, { PureComponent } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import { formatMessage, FormattedMessage } from 'umi/locale';
import { Form, Input, Button, Card, message, Divider, Icon } from 'antd';
import { notificationTip } from  '@/utils/utils';
import PicturesWall from '@/components/PicturesWall';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './Ask.less';

const FormItem = Form.Item;
const { TextArea } = Input;

@connect(({ question, loading }) => ({
  question,
  submitting: loading.effects['question/submit'],
}))
@Form.create()
class AskForms extends PureComponent {
  constructor(props) {
    super(props);
    this.imgs = [];
  }

  handleSubmit = e => {
    e.preventDefault();
    const { dispatch, form } = this.props;
      form.validateFieldsAndScroll((err, values) => {
        const { detail } = values;
        if (this.imgs.length > 0) values.imgs = this.imgs;
        if (!detail) delete values.detail;
        if (!err) {
          dispatch({
            type: 'question/submit',
            payload: values,
            token: sessionStorage.getItem('access_token'),
          }).then(() => {
            const { question: { addQuestionRes }} = this.props;
            if(addQuestionRes && addQuestionRes.code === 200){
              notificationTip(formatMessage({id: 'app.setting.user.ask.success'}), true);
              router.push('/');
            }else{
  
            }
          });
        }
      });
    
  };

  // 上传图片
  uploadImg = file => {
    const { dispatch } = this.props;
    return dispatch({
      type: 'question/upload',
      payload: {
        type: 'question',
        file: file,
      },
    }).then(() => {
      const {
        question: { uploadRes },
      } = this.props;
      if (uploadRes.code === 200) {
        this.imgs.push(uploadRes.data.id);
      }
    });
  };

  render() {
    const { submitting } = this.props;
    const {
      form: { getFieldDecorator, getFieldValue },
    } = this.props;

    const formItemLayout = {
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 24 },
        md: { span: 24 },
      },
    };

    const submitFormLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 7 },
      },
    };

    return (
      <GridContent>
        <Card className={styles.ask_wrapper} bordered={false}>
          <div className={styles.title_wrapper}>
            <Icon type="question-circle" className={styles.icon}/>
            <span className={styles.text}>{formatMessage({id: 'form.question'})}</span>
          </div>
          <Form onSubmit={this.handleSubmit} hideRequiredMark style={{ marginTop: 8 }}>
            <FormItem
              {...formItemLayout}
              //label={<FormattedMessage id="form.question.title.label" />}
            >
              {getFieldDecorator('title', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'validation.question.title.required' }),
                  },
                ],
              })(<Input size='large' placeholder={formatMessage({ id: 'form.question.title.placeholder' })} />)}
            </FormItem>
            <div className={styles.detail_wrapper}>
              <FormItem
                {...formItemLayout}
                //label={<FormattedMessage id="form.question.detail.label" />}
              >
                {getFieldDecorator('detail', {
                  rules: [
                    /*{
                      required: true,
                      message: formatMessage({ id: 'validation.goal.required' }),
                    },*/
                  ],
                })(
                  <TextArea
                    className={styles.textArea}
                    placeholder={formatMessage({ id: 'form.question.detail.placeholder' })}
                    autosize={false}
                    rows={6}
                  />
                )}
              </FormItem>
              <Divider dashed/>
              <FormItem
                {...formItemLayout}
                //label={<FormattedMessage id="form.question.imgs.label" />}
              >
                {getFieldDecorator('imgs', {})(
                  <div className={styles.picture_wrapper}>
                    <PicturesWall count={5} uploadImg={this.uploadImg} />
                  </div>
                )}
              </FormItem>
            </div>
            <div className={styles.submit_btn_wrapper}>
              <Button type="primary" htmlType="submit" loading={submitting}>
                {localStorage.getItem('access_token')? <FormattedMessage id="form.submit"/>: <FormattedMessage id="form.login.submit"/>}
              </Button>
            </div>
          </Form>
        </Card>
      </GridContent>
    );
  }
}

export default AskForms;
