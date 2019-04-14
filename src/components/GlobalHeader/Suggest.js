import React, { Component } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi/locale';
import { notificationTip } from  '@/utils/utils';
import { Form, Input, Button, Divider } from 'antd';
import PicturesWall from '@/components/PicturesWall';
import styles from './index.less';

const FormItem = Form.Item;
const TextArea = Input.TextArea;
const formItemLayout = {
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 24 },
  },
};
@connect(({ global }) => ({
  global,
}))
@Form.create()
class Suggest extends Component {

  imgs = [];

  // 上传图片
  uploadImg = file => {
    const { dispatch } = this.props;
    return dispatch({
      type: 'global/upload',
      payload: {
        type: 'feedback',
        file: file,
      },
    }).then(() => {
      const {
        global: { uploadRes },
      } = this.props;
      if (uploadRes.code === 200) {
        this.imgs.push(uploadRes.data.url);
      }
    });
  };

  feedback = (e) => {
    e.preventDefault();
    const { dispatch, form } = this.props;
    form.validateFieldsAndScroll((err, values) => {
      if (this.imgs.length > 0) values.fileimages = this.imgs.join('#');
      if (!err) {
        dispatch({
          type: 'global/feedback',
          payload: values
        }).then(() => {
          const { global: { feedbackRes }} = this.props;
          if(feedbackRes && feedbackRes.code === 200) {
            notificationTip(formatMessage({id: 'response.feedback.success'}), true);
            dispatch({
              type: 'global/setSuggestModal',
              suggestModalVisible: false,
            });
          } else {
            notificationTip(formatMessage({id: 'server_error'}));
          }
        });
      }
    });
  }

  render() {
    const { form: { getFieldDecorator }} = this.props;

    return (
      <Form onSubmit={this.feedback}>
        <div className={styles.content_wrapper}>
          <FormItem
            {...formItemLayout}
          >
            {getFieldDecorator('content', {
              rules: [
                {
                  required: true,
                  message: formatMessage({ id: 'validation.suggest.required' }),
                },
              ],
            })(
              <TextArea
                className={styles.textArea}
                placeholder={formatMessage({ id: 'form.suggest.placeholder' })}
                autosize={false}
                rows={6}
              />
            )}
          </FormItem>
          <Divider dashed/>
          <FormItem
            {...formItemLayout}
          >
            <div className={styles.picture_wrapper}>
              <PicturesWall count={5} uploadImg={this.uploadImg} />
            </div>
          </FormItem>
        </div>
        <div className={styles.submit_btn_wrapper}>
          <Button type='primary' htmlType='submit'>{formatMessage({ id: 'form.submit'})}</Button>
        </div>
      </Form>
    );
  }
}

export default Suggest;