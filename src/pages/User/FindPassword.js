import React, { Component } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi/locale';
import Link from 'umi/link';
import router from 'umi/router';
import { Form, Input, Button, Select, Row, Col, Popover, Progress, message } from 'antd';
import PasswordStatus from '@/components/PasswordStatus';
import hash from 'hash.js';
import styles from './Register.less';
import { imgCodeURL } from '@/services/api';
import { notificationTip, generateUUID, isMobile } from '@/utils/utils';
import logo from '@/assets/black_logo.png';

const FormItem = Form.Item;
const { Option } = Select;
const InputGroup = Input.Group;

@connect(({ register, findpwd, loading }) => ({
  register,
  findpwd,
  submitting: loading.effects['findpwd/submit'],
}))
@Form.create()
class FindPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      value: 0,
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

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // 获取手机短信验证码
  onGetCaptcha = () => {
    const {
      form: { validateFields },
      dispatch,
    } = this.props;
    const { token } = this.state;
    validateFields(['resultCode', 'mobile'], (err, values) => {
      if (!err) {
        let count = 59;
        this.setState({ count });
        this.interval = setInterval(() => {
          count -= 1;
          this.setState({ count });
          if (count === 0) {
            clearInterval(this.interval);
          }
        }, 1000);
        dispatch({
          type: 'findpwd/getSMSCode',
          payload: {
            ...values,
            token,
          },
        }).then(() => {
          const {
            findpwd: { codeRes },
          } = this.props;
          if (codeRes.code === 200) {
            notificationTip(formatMessage({ id: 'get_code_success' }), true);
          } else {
            this.setState({ count: 0 });
            clearInterval(this.interval);
          }
        });
      }
    });
  };

  handleSubmit = e => {
    debugger;
    e.preventDefault();
    const { form, dispatch } = this.props;
    form.validateFields({ force: true }, (err, values) => {
      if (!err) {
        const { prefix } = this.state;
        dispatch({
          type: 'findpwd/submit',
          payload: {
            ...values,
          },
        }).then(() => {
          const {
            findpwd: { findpwdRes },
          } = this.props;
          if (findpwdRes.code === 200) {
            notificationTip(formatMessage({ id: 'findpwd_success' }), true);
            router.push({
              pathname: '/',
            });
          } else {
            console.log("找回密码接口请求失败");
          }
        });
      }
    });
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ value });
  }

  handleConfirmBlur = e => {
    const { value } = e.target;
    const { confirmDirty } = this.state;
    this.setState({ confirmDirty: confirmDirty || !!value });
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
    const token = generateUUID();
    this.setState({
      token: token,
      src: imgCodeURL + '?token=' + token,
    });
  };

  render() {
    const { form, submitting } = this.props;
    const { getFieldDecorator } = form;
    const { count, value, prefix, help, visible, src } = this.state;
    return (
      <div className={styles.findpwd_main}>
        <div className={styles.header}>{formatMessage({id: 'app.findpwd.findpwd'})} </div>
        <Form onSubmit={this.handleSubmit}>
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
            <Row gutter={8}>
              <Col span={16}>
                {getFieldDecorator('resultCode', {
                  rules: [
                    {
                      required: true,
                      message: formatMessage({ id: 'validation.resultCode.required' }),
                    },
                  ],
                })(
                  <Input
                    size="large"
                    placeholder={formatMessage({ id: 'form.resultCode.placeholder' })}
                  />
                )}
              </Col>
              <Col span={8}>
                <img className={styles.imgCode} src={src} onClick={this.refreshCode} />
              </Col>
            </Row>
          </FormItem>
          <FormItem>
            <InputGroup compact>
              {getFieldDecorator('mobile', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'validation.phone-number.required' }),
                  },
                  {
                    pattern: /^\d{11}$/,
                    message: formatMessage({ id: 'validation.phone-number.wrong-format' }),
                  },
                ],
              })(
                <Input
                  size="large"
                  style={{ width: '100%' }}
                  placeholder={formatMessage({ id: 'form.phone-number.placeholder' })}
                />
              )}
            </InputGroup>
          </FormItem>
          <FormItem>
            <Row gutter={8}>
              <Col span={16}>
                {getFieldDecorator('verifycode', {
                  rules: [
                    {
                      required: true,
                      message: formatMessage({ id: 'validation.verification-code.required' }),
                    },
                  ],
                })(
                  <Input
                    size="large"
                    placeholder={formatMessage({ id: 'form.verification-code.placeholder' })}
                  />
                )}
              </Col>
              <Col span={8}>
                <Button
                  size="large"
                  disabled={count}
                  className={styles.getCaptcha}
                  onClick={this.onGetCaptcha}
                >
                  {count
                    ? `${count} s`
                    : formatMessage({ id: 'app.register.get-verification-code' })}
                </Button>
              </Col>
            </Row>
          </FormItem>
          <FormItem>
            <Button
              size="large"
              loading={submitting}
              className={styles.submit}
              type="primary"
              htmlType="submit"
            >
              <FormattedMessage id="app.findpwd.findpwd" />
            </Button>
            <Link className={styles.login} to="/">
              <FormattedMessage id="app.register-result.back-home" />
            </Link>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default FindPassword;
