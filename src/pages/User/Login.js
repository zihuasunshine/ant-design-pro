import React, { Component } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import { formatMessage, FormattedMessage } from 'umi/locale';
import Link from 'umi/link';
import { Checkbox, Alert, Icon, message } from 'antd';
import Login from '@/components/Login';
import { generateUUID } from '@/utils/utils';
import styles from './Login.less';
import { imgCodeURL } from '@/services/api';
import logo from '@/assets/black_logo.png';

const { Tab, UserName, Password, Mobile, ImgCode, Captcha, Submit } = Login;

@connect(({ user, login, loading }) => ({
  user,
  login,
  submitting: loading.effects['login/login'],
}))
class LoginPage extends Component {
  state = {
    type: 'account',
    src:'',
    autoLogin: true,
  };

  componentDidMount() {
    this.refreshCode();
  }

  onTabChange = type => {
    this.setState({ type });
  };

  onGetCaptcha = () => {
    this.loginForm.validateFields(['mobile','resultCode'], {}, (err, values) => {
      if (!err) {
        const { token } = this.state;
        const { dispatch } = this.props;
        dispatch({
          type: 'login/getCaptcha',
          params: {
            ...values,
            token
          }
        })
      }
    });
  };

  refreshCode = () => {
    const token = generateUUID();
    this.setState({
      token: token,
      src: imgCodeURL + '?token=' + token,
    });
  };

  handleSubmit = (err, values) => {
    const { type } = this.state;
    if (!err) {
      const { dispatch, dialogCls } = this.props;
      dispatch({
        type: 'login/login',
        payload: {
          ...values,
          type,
          dialogCls,
        },
      }).then(() => {
        const {
          login: { loginRes },
        } = this.props;
        if (!loginRes.error) {
          dispatch({
            type: 'user/fetchCurrent'
          })
        } 
      })
    }
  };

  // 请求当前用户currentUser
  getCurrentUser = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'user/fetchCurrent',
      token: sessionStorage.getItem('access_token'),
    }).then(() => {
      const {
        user: { currentUserRes },
      } = this.props;
      if (currentUserRes.error) {
        if (currentUserRes.error === 'invalid_token') {
          // token过期, 刷新token
          dispatch({
            type: 'login/refreshToken',
            refresh_token: sessionStorage.getItem('refresh_token'),
          }).then(() => {
            const {
              login: { refreshTokenRes },
            } = this.props;
            if (!refreshTokenRes.error) {
              this.getCurrentUser();
            } else {
              // 跳转到登录页
              router.push('/user/login?redirect=' + window.location.href);
            }
          });
        }
      }
    });
  };

  changeAutoLogin = e => {
    this.setState({
      autoLogin: e.target.checked,
    });
  };

  renderMessage = content => (
    <Alert style={{ marginBottom: 24 }} message={content} type="error" showIcon />
  );

  render() {
    const { login, submitting, style, dialogCls } = this.props;
    const { type, autoLogin, src } = this.state;
    return (
      <div className={dialogCls?styles.dialog_main:styles.main} style={style}>
        <div className={styles.header}>
          <Link to="/">
            <img alt="logo" className={styles.logo} src={logo} />
          </Link>
        </div>
        <Login
          defaultActiveKey={type}
          onTabChange={this.onTabChange}
          onSubmit={this.handleSubmit}
          ref={form => {
            this.loginForm = form;
          }}
        >
          <Tab key="account" tab={formatMessage({ id: 'app.login.tab-login-credentials' })}>
            {login.status === 'error' &&
              login.type === 'account' &&
              !submitting &&
              this.renderMessage(formatMessage({ id: 'app.login.message-invalid-credentials' }))}
            <UserName
              name="userName"
              placeholder={`${formatMessage({ id: 'app.login.userName' })}`}
              rules={[
                {
                  required: true,
                  message: formatMessage({ id: 'validation.userName.required' }),
                },
              ]}
            />
            <Password
              name="password"
              placeholder={`${formatMessage({ id: 'app.login.password' })}`}
              rules={[
                {
                  required: true,
                  message: formatMessage({ id: 'validation.password.required' }),
                },
              ]}
              onPressEnter={() => this.loginForm.validateFields(this.handleSubmit)}
            />
          </Tab>
          <Tab key="mobile" tab={formatMessage({ id: 'app.login.tab-login-mobile' })}>
            {login.status === 'error' &&
              login.type === 'mobile' &&
              !submitting &&
              this.renderMessage(
                formatMessage({ id: 'app.login.message-invalid-verification-code' })
              )}
            <Mobile
              name="mobile"
              placeholder={formatMessage({ id: 'form.phone-number.placeholder' })}
              rules={[
                {
                  required: true,
                  message: formatMessage({ id: 'validation.phone-number.required' }),
                },
                {
                  pattern: /^1\d{10}$/,
                  message: formatMessage({ id: 'validation.phone-number.wrong-format' }),
                },
              ]}
            />
            <ImgCode
              name="resultCode"
              placeholder={formatMessage({ id: 'form.resultCode.placeholder' })}
              src={src}
              onFreshcode={this.refreshCode}
              rules={[
                {
                  required: true,
                  message: formatMessage({ id: 'validation.resultCode.required' }),
                },
              ]}
            />
            <Captcha
              name="captcha"
              placeholder={formatMessage({ id: 'form.verification-code.placeholder' })}
              countDown={120}
              onGetCaptcha={this.onGetCaptcha}
              getCaptchaButtonText={formatMessage({ id: 'form.get-captcha' })}
              getCaptchaSecondText={formatMessage({ id: 'form.captcha.second' })}
              rules={[
                {
                  required: true,
                  message: formatMessage({ id: 'validation.verification-code.required' }),
                },
              ]}
            />
          </Tab>
          {/*<div>
            <Checkbox checked={autoLogin} onChange={this.changeAutoLogin}>
              <FormattedMessage id="app.login.remember-me" />
            </Checkbox>
            <Link style={{ float: 'right' }} to="/user/findpwd">
              <FormattedMessage id="app.login.forgot-password" />
            </Link>
          </div>*/}
          <Submit loading={submitting}>
            <FormattedMessage id="app.login.login" />
          </Submit>
          <div className={styles.other}>
            {/*<FormattedMessage id="app.login.sign-in-with" />
            <Icon type="alipay-circle" className={styles.icon} theme="outlined" />
            <Icon type="taobao-circle" className={styles.icon} theme="outlined" />
            <Icon type="weibo-circle" className={styles.icon} theme="outlined" />*/}
            <Link style={{ float: 'left' }} to="/user/findpwd">
              <FormattedMessage id="app.login.forgot-password" />
            </Link>
            <Link className={styles.register} to="/user/register">
              <FormattedMessage id="app.login.signup" />
            </Link>
          </div>
        </Login>
      </div>
    );
  }
}

export default LoginPage;
