import React, { Component } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi/locale';
import Link from 'umi/link';
import router from 'umi/router';
import { Form, Input, Button, Select, Row, Col, Popover, Progress, message } from 'antd';
import styles from './Register.less';
import hash from 'hash.js';
import { imgCodeURL } from '@/services/api';
import { notificationTip, generateUUID } from '@/utils/utils';
import logo from '@/assets/black_logo.png';

const FormItem = Form.Item;
const { Option } = Select;
const InputGroup = Input.Group;

const passwordStatusMap = {
  ok: (
    <div className={styles.success}>
      <FormattedMessage id="validation.password.strength.strong" />
    </div>
  ),
  pass: (
    <div className={styles.warning}>
      <FormattedMessage id="validation.password.strength.medium" />
    </div>
  ),
  poor: (
    <div className={styles.error}>
      <FormattedMessage id="validation.password.strength.short" />
    </div>
  ),
};

const passwordProgressMap = {
  ok: 'success',
  pass: 'normal',
  poor: 'exception',
};

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

  getPasswordStatus = () => {
    const { form } = this.props;
    const value = form.getFieldValue('password');
    if (value && value.length > 9) {
      return 'ok';
    }
    if (value && value.length > 5) {
      return 'pass';
    }
    return 'poor';
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

          }
        });
      }
    });
  };

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

  changePrefix = value => {
    this.setState({
      prefix: value,
    });
  };

  renderPasswordProgress = () => {
    const { form } = this.props;
    const value = form.getFieldValue('password');
    const passwordStatus = this.getPasswordStatus();
    return value && value.length ? (
      <div className={styles[`progress-${passwordStatus}`]}>
        <Progress
          status={passwordProgressMap[passwordStatus]}
          className={styles.progress}
          strokeWidth={6}
          percent={value.length * 10 > 100 ? 100 : value.length * 10}
          showInfo={false}
        />
      </div>
    ) : null;
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
    const { count, prefix, help, visible, src } = this.state;
    return (
      <div className={styles.findpwd_main}>
        <div className={styles.header}>{formatMessage({id: 'app.findpwd.findpwd'})} </div>
        <Form onSubmit={this.handleSubmit}>
          <FormItem help={help}>
            <Popover
              getPopupContainer={node => node.parentNode}
              content={
                <div style={{ padding: '4px 0' }}>
                  {passwordStatusMap[this.getPasswordStatus()]}
                  {this.renderPasswordProgress()}
                  <div style={{ marginTop: 10 }}>
                    <FormattedMessage id="validation.password.strength.msg" />
                  </div>
                </div>
              }
              overlayStyle={{ width: 240 }}
              placement="right"
              visible={visible}
            >
              {getFieldDecorator('password', {
                rules: [
                  {
                    validator: this.checkPassword,
                  },
                ],
              })(
                <Input
                  size="large"
                  type="password"
                  placeholder={formatMessage({ id: 'form.findpwd.placeholder' })}
                />
              )}
            </Popover>
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
