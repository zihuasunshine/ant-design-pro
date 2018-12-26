import React, { Component } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi/locale';
import router from 'umi/router';
import Link from 'umi/link';
import { Form, Input, Button, Select, Row, Col, Popover, Progress, message } from 'antd';
import styles from './Register.less';
import hash from 'hash.js';
import { imgCodeURL } from '@/services/api';
import logo from '@/assets/black_logo.png';

const FormItem = Form.Item;

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
    e.preventDefault();
    const { form, dispatch } = this.props;
    form.validateFields({ force: true }, (err, values) => {
      if (!err) {
        dispatch({
          type: 'findpwd/modifyPwd',
          payload: {
            ...values,
          },
          token: sessionStorage.getItem('access_token'),
        }).then(() => {
          const {
            findpwd: { modifyPwdRes },
          } = this.props;
          if (modifyPwdRes.code === 200) {
            message.success(formatMessage({ id: 'modifypwd_success' }));
            // 密码修改成功跳转到登录页面
            router.push({
              pathname: '/user/login',
            });
          } else {
            const msg = modifyPwdRes.msg;
            const tip = formatMessage({ id: msg })
              ? formatMessage({ id: msg })
              : formatMessage({ id: 'modifypwd_faild' });
            message.error(tip);
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
    const token = hash.sha256().digest('hex');
    this.setState({
      token: token,
      src: imgCodeURL + '?token=' + token,
    });
  };

  render() {
    const { form, submitting } = this.props;
    const { getFieldDecorator } = form;
    const { help, visible } = this.state;
    return (
      <div className={styles.main}>
        <div className={styles.header}>
          <Link to="/">
            <img alt="logo" className={styles.logo} src={logo} />
          </Link>
        </div>
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
            <Button
              className={styles.modify_btn}
              size="large"
              loading={submitting}
              type="primary"
              htmlType="submit"
            >
              <FormattedMessage id="app.modifypwd.modifypwd" />
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default FindPassword;
