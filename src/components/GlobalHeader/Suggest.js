import React, { Component } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi/locale';
import { Form, Input, Button } from 'antd';
import styles from './index.less';

const FormItem = Form.Item;
const TextArea = Input.TextArea;

@Form.create()
class Suggest extends Component {

  render() {
    const { form: { getFieldDecorator }} = this.props;

    return (
      <Form>
        <FormItem>
          {getFieldDecorator('suggest', {
            rules: [
              {
                required: true,
                message: formatMessage({ id: 'validation.suggest.required' }),
              },
            ],
          })(
            <TextArea
              rows={4}
              placeholder={formatMessage({ id: 'form.suggest.placeholder' })}
            />
          )}
        </FormItem>
        <div className={styles.submit_btn_wrapper}>
          <Button type='primary'>{formatMessage({ id: 'form.submit'})}</Button>
        </div>
      </Form>
    );
  }
}

export default Suggest;