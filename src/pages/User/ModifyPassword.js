import React, { Component } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi/locale';
import router from 'umi/router';
import Link from 'umi/link';
import { Form, Input, Button, Select, Row, Col, Popover, Progress, message } from 'antd';
import PasswordStatus from '@/components/PasswordStatus';
import hash from 'hash.js';
import { notificationTip, generateUUID, isMobile } from '@/utils/utils';
import { imgCodeURL } from '@/services/api';
import styles from './Register.less';
import logo from '@/assets/black_logo.png';

const FormItem = Form.Item;

@connect(({ findpwd, loading }) => ({
  findpwd,
  submitting: loading.effects['findpwd/submit'],
}))
@Form.create()
class FindPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      value: '',
      confirmDirty: false,
      visible: false,
      help: '',
      prefix: '86',
      src: '',
    };
  }

  componentDidMount() {
    this.refreshCode();
  }

  componentDidUpdate() {
    const { form, findpwd } = this.props;
    if (findpwd.status === 'ok') {
      router.push({
        pathname: '/user/findpwd-result',
        state: {
          account,
        },
      });
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleChange = e => {
    const { value } = e.target;
    this.setState({ value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { form, dispatch } = this.props;
    form.validateFields({ force: true }, (err, values) => {
      if (!err) {
        dispatch({
          type: 'findpwd/modifyPwd',
          payload: {
            ...values,
          }
        }).then(() => {
          const {
            findpwd: { modifyPwdRes },
          } = this.props;
          if (modifyPwdRes.code === 200) {
            notificationTip(formatMessage({ id: 'modifypwd_success' }), true);
            // 密码修改成功跳转到首页
            router.push({
              pathname: '/',
            });
          } else {
            console.log("修改密码接口请求失败");
          }
        });
      }
    });
  };

  checkConfirm = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback(formatMessage({ id: 'validation.password.twice' }));
    } else {
      callback();
    }
  };

  checkPassword = (rule, value, callback) => {
    const { visible, confirmDirty } = this.state;
    if (!value) {
      this.setState({
        help: formatMessage({ id: 'validation.password.required' }),
        visible: !!value,
      });
      callback('error');
    } else {
      this.setState({
        help: '',
      });
      if (!visible) {
        this.setState({
          visible: !!value,
        });
      }
      if (value.length < 6 || value.length > 12) {
        callback('error');
      } else {
        const { form } = this.props;
        if (value && confirmDirty) {
          form.validateFields(['confirm'], { force: true });
        }
        callback();
      }
    }
  };

  refreshCode = () => {
    const token = hash.sha256().digest('hex');
    this.setState({
      token: token,
      src: imgCodeURL + '?token=' + token,
    });
  };

  render() {
    const { form, submitting } = this.props;
    const { getFieldDecorator } = form;
    const { help, visible, value } = this.state;
    return (
      <div className={styles.modifypwd_main}>
        <div className={styles.header}>{formatMessage({id: 'app.modifypwd.modifypwd'})} </div>
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('oldPassword', {
              rules: [
                {
                  required: true,
                  message: formatMessage({ id: 'validation.old-password.required' }),
                },
              ],
            })(
              <Input
                size="large"
                type="password"
                placeholder={formatMessage({ id: 'form.old-password.placeholder' })}
              />
            )}
          </FormItem>
          <FormItem help={help}>
            <PasswordStatus visible={visible} value={value}>
              {getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                      message: formatMessage({ id: 'validation.password.required' }),
                    },
                    {
                      validator: isMobile()?'':this.checkPassword   // 移动端不进行检查
                    },
                  ],
                })(
                  <Input
                    size="large"
                    type="password"
                    placeholder={formatMessage({ id: 'form.findpwd.placeholder' })}
                    onChange={this.handleChange}
                  />
                )}
            </PasswordStatus>
          </FormItem>
          <FormItem>
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: formatMessage({ id: 'validation.confirm-password.required' }),
                },
                {
                  validator: this.checkConfirm,
                },
              ],
            })(
              <Input
                size="large"
                type="password"
                placeholder={formatMessage({ id: 'form.confirm-password.placeholder' })}
              />
            )}
          </FormItem>
          <FormItem>
            <Button
              className={styles.submit}
              size="large"
              loading={submitting}
              type="primary"
              htmlType="submit"
            >
              <FormattedMessage id="app.modifypwd.modifypwd" />
            </Button>
            <Link className={styles.login} to="/account/center/myQuestion">
              <FormattedMessage id="app.modifypwd-result.back-center" />
            </Link>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default FindPassword;
