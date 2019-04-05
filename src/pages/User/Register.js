import React, { Component } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi/locale';
import Link from 'umi/link';
import router from 'umi/router';
import { Form, Input, Button, Select, Row, Col, Popover, Progress, message } from 'antd';
import styles from './Register.less';
import { generateUUID, notificationTip, isMobile } from '@/utils/utils';
import { imgCodeURL } from '@/services/api';
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
  long: (
    <div className={styles.error}>
      <FormattedMessage id="validation.password.strength.long" />
    </div>
  ),
};

const passwordProgressMap = {
  ok: 'success',
  pass: 'normal',
  poor: 'exception',
  long: 'exception',
};

@connect(({ register, loading }) => ({
  register,
  submitting: loading.effects['register/submit'],
}))
@Form.create()
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      confirmDirty: false,
      visible: false,
      help: '',
      prefix: '86',
      src: '',
      isNextStep: false,
    };
  }

  componentDidMount() {
    this.refreshCode();
  }

  // componentDidUpdate() {
  //   const { form, register } = this.props;
  //   const account = form.getFieldValue('mail');
  //   if (register.status === 'ok') {
  //     router.push({
  //       pathname: '/user/register-result',
  //       state: {
  //         account,
  //       },
  //     });
  //   }
  // }

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
    // 检测手机号是否已经注册过
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
          type: 'register/getSMSCode',
          payload: {
            ...values,
            token,
          },
        }).then(() => {
          const {
            register: { codeRes },
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
    e.preventDefault();
    const { form, dispatch } = this.props;
    form.validateFields({ force: true }, (err, values) => {
      if (!err) {
        const { prefix } = this.state;
        dispatch({
          type: 'register/submit',
          payload: {
            ...values,
          },
        }).then(() => {
          const {
            register: { registerRes },
          } = this.props;
          if (registerRes.code === 200) {
            notificationTip(formatMessage({ id: 'register_success' }),true);
            router.push({
              pathname: '/user/register-result',
            });
          } else {
            
          }
        });
      }
    });
  };

  getPasswordStatus = () => {
    const { form } = this.props;
    const value = form.getFieldValue('password');
    if (value && value.length > 9 && value.length < 13) {
      return 'ok';
    }
    if (value && value.length > 5 && value.length < 13) {
      return 'pass';
    }
    if (value && value.length > 12) {
      return 'long';
    }
    return 'poor';
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

  checkUserName = (rule, value, callback) => {
    const { dispatch } = this.props;
    if(value && /([a-zA-Z0-9\u4e00-\u9fa5]){4,20}$/.test(value)){
      debugger;
      dispatch({
        type: 'register/checkUserNameExisted',
        payload:{
          userName: value
        }
      })/*.then(() => {
        const { register: {checkUserNameRes} } = this.props;
        if(checkUserNameRes && checkUserNameRes.code === 200){
          if(checkUserNameRes.data){
            callback(formatMessage({id: 'user_name_already_exist'}));
          }else {
            callback();
          }
        }else {
          callback(formatMessage({id: 'request_faild'}));
        }
      });*/
    }
  }

  checkMobile = (rule, value, callback) => {
    const { dispatch } = this.props;
    if(value && /\d{11}$/.test(value)){
      dispatch({
        type: 'register/checkUserMobileExisted',
        payload:{
          mobile: value
        }
      }).then(() => {
        const { register: {checkMobileRes} } = this.props;
        if(checkMobileRes && checkMobileRes.code === 200){
          if(checkMobileRes.data){
            callback(formatMessage({id: 'mobile_already_exist'}));
          }else {
            callback();
          }
        }else {
          callback(formatMessage({id: 'request_faild'}));
        }
      });
    }
  }

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

  // 登录
  handleLogin = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'login/setModalType',
      visible: true,
      modalType: 'login'
    });
  }

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
    const { count, prefix, help, visible, src, isNextStep } = this.state;

    return (
      <div className={styles.main}>
        <div className={styles.header}>{formatMessage({id: 'app.login.signup'})}</div>
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [
                {
                  required: true,
                  message: formatMessage({ id: 'validation.userName.required' }),
                },
                {
                  pattern: /([a-zA-Z0-9\u4e00-\u9fa5]){4,20}$/,
                  message: formatMessage({ id: 'validation.userName.wrong-format' }),
                },
                {
                  validator: this.checkUserName
                }
              ],
            })(
              <Input
                size="large"
                placeholder={formatMessage({ id: 'form.userName.placeholder' })}
              />
            )}
          </FormItem>
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
                />
              )}
            </Popover>
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
                <img title={formatMessage({id: 'change_img_code'})} className={styles.imgCode} src={src} onClick={this.refreshCode} />
              </Col>
            </Row>
          </FormItem>
          <FormItem>
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
                {
                  validator: this.checkMobile
                }
              ],
            })(
              <Input
                size="large"
                placeholder={formatMessage({ id: 'form.phone-number.placeholder' })}
              />
            )}
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
              <FormattedMessage id="app.register.register" />
            </Button>
            <span className={styles.login} onClick={this.handleLogin}>
              <FormattedMessage id="app.register.sign-in" />
            </span>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default Register;
