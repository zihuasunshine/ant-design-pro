import React, { Component, Fragment } from 'react';
import { formatMessage, FormattedMessage } from 'umi/locale';
import { Form, Input, Upload, Select, Button, Radio, DatePicker, Icon, message } from 'antd';
import { connect } from 'dva';
import styles from './BaseView.less';
import GeographicView from './GeographicView';
import PhoneView from './PhoneView';
import AvatarView from '@/components/CropImg';
import moment from 'moment';
import { dataURLtoFile } from '@/utils/utils';

const FormItem = Form.Item;
const { Option } = Select;
const { Group: RadioGroup } = Radio;

const validatorGeographic = (rule, value, callback) => {
  const { province, city } = value;
  if (!province.key) {
    callback('Please input your province!');
  }
  if (!city.key) {
    callback('Please input your city!');
  }
  callback();
};

@connect(({ user, baseView }) => ({
  user,
  baseView,
}))
@Form.create()
class BaseView extends Component {
  componentDidMount() {
    this.setBaseInfo();
  }

  // 上传图片
  uploadImg = img => {
    const { dispatch } = this.props;
    dispatch({
      type: 'baseView/uploadAvatar',
      params: {
        token: sessionStorage.getItem('access_token'),
        file: dataURLtoFile(img),
      },
    }).then(() => {
      const {
        baseView: { uploadImgRes },
      } = this.props;
      if (uploadImgRes.code === 200) {
        message.success('头像更换成功');
      } else {
        message.error('头像更换失败');
      }
    });
  };

  // 提交表单
  handleSubmit = e => {
    e.preventDefault();
    const {
      form: { validateFields },
      dispatch,
    } = this.props;
    validateFields((err, values) => {
      if (!err) {
        const {
          email,
          sex,
          birthday,
          nickname,
          urlToken,
          geographic,
          postgraduateTime,
          undergraduateSchool,
          applicationSchool,
          applicationProfession,
        } = values;
        let params = {};
        email ? (params.email = email) : '';
        sex ? (params.sex = sex) : '';
        birthday ? (params.birthday = birthday.format('YYYY-MM-DD')) : '';
        nickname ? (params.nickname = nickname) : '';
        urlToken ? (params.urlToken = urlToken) : '';
        geographic
          ? (params.province = geographic.province.label ? geographic.province.label : '')
          : '';
        geographic ? (params.city = geographic.city.label ? geographic.city.label : '') : '';
        postgraduateTime ? (params.postgraduateTime = postgraduateTime) : '';
        undergraduateSchool ? (params.undergraduateSchool = undergraduateSchool) : '';
        applicationSchool ? (params.applicationSchool = applicationSchool) : '';
        applicationProfession ? (params.applicationProfession = applicationProfession) : '';
        dispatch({
          type: 'baseView/submit',
          payload: {
            ...params,
          },
          token: sessionStorage.getItem('access_token'),
        }).then(() => {
          // 重新获取数据赋值
          dispatch({
            type: 'user/fetchCurrent',
            token: sessionStorage.getItem('access_token'),
          }).then(() => {
            this.setBaseInfo();
          });
        });
      }
    });
  };

  setBaseInfo = () => {
    const {
      form,
    } = this.props;
    const currentUser = sessionStorage.getItem('user');
    if(currentUser){
      const currentUserInfo = JSON.parse(currentUser);
      currentUserInfo.geographic = {
        province: {
          label: currentUserInfo.province || '',
          key: currentUserInfo.provinceCode ||  0,
        },
        city: {
          label: currentUserInfo.city || '',
          key: currentUserInfo.cityCode || 0,
        },
      },
      Object.keys(form.getFieldsValue()).forEach(key => {
        const obj = {};
        obj[key] = currentUserInfo[key] || null;
        if (key === 'birthday') {
          form.setFieldsValue({ [key]: moment(obj[key], 'YYYY-MM-DD') });
        } else {
          form.setFieldsValue(obj);
        }
      });
   
    } else {
      message.info(formatMessage({id: 'not_login'}));
    }
  };

  getAvatarURL() {
    const currentUser = sessionStorage.getItem('user');
    if (currentUser) {
      return JSON.parse(currentUser).avatarFile;
    }
    const url = 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png';
    return url;
  }

  getViewDom = ref => {
    this.view = ref;
  };

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <div className={styles.baseView} ref={this.getViewDom}>
        <div className={styles.left}>
          <Form layout="vertical" onSubmit={this.handleSubmit} hideRequiredMark>
            <FormItem label={formatMessage({ id: 'app.settings.basic.email' })}>
              {getFieldDecorator('email', {
                /*rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'app.settings.basic.email-message' }, {}),
                  },
                ],*/
              })(<Input />)}
            </FormItem>
            <FormItem label={formatMessage({ id: 'app.settings.basic.sex' })}>
              {getFieldDecorator('sex', {
                /*rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'app.settings.basic.sex-message' }, {}),
                  },
                ],*/
              })(
                <RadioGroup>
                  <Radio value='0'>男</Radio>
                  <Radio value='1'>女</Radio>
                </RadioGroup>
              )}
            </FormItem>
            <FormItem label={formatMessage({ id: 'app.settings.basic.birthday' })}>
              {getFieldDecorator('birthday', {
                /*rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'app.settings.basic.birthday-message' }, {}),
                  },
                ],*/
              })(
                <DatePicker
                  placeholder={formatMessage({ id: 'app.settings.basic.birthday-placeholder' })}
                />
              )}
            </FormItem>
            <FormItem label={formatMessage({ id: 'app.settings.basic.nickname' })}>
              {getFieldDecorator('nickname', {
                /*rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'app.settings.basic.nickname-message' }, {}),
                  },
                ],*/
              })(<Input />)}
            </FormItem>
            <FormItem label={formatMessage({ id: 'app.settings.basic.urlToken' })}>
              {getFieldDecorator('urlToken', {
                /*rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'app.settings.basic.urlToken-message' }, {}),
                  },
                ],*/
              })(
                <Input
                  placeholder={formatMessage({ id: 'app.settings.basic.urlToken-placeholder' })}
                />
              )}
            </FormItem>
            <FormItem label={formatMessage({ id: 'app.settings.basic.geographic' })}>
              {getFieldDecorator('geographic', {
                rules: [
                  /*{
                    required: true,
                    message: formatMessage({ id: 'app.settings.basic.geographic-message' }, {}),
                  },
                  {
                    validator: validatorGeographic,
                  },*/
                ],
              })(<GeographicView />)}
            </FormItem>
            <FormItem label={formatMessage({ id: 'app.settings.basic.postgraduateTime' })}>
              {/*mode='year'时 组件有bug*/}
              {getFieldDecorator('postgraduateTime', {
                /*ant design 插件对于年份选择有bug 故使用输入年份的方式*/
                /*rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'app.settings.basic.postgraduateTime-message' }, {}),
                  },
                ],*/
              })(
                <Input
                  placeholder={formatMessage({
                    id: 'app.settings.basic.postgraduateTime-placeholder',
                  })}
                />
              )}
            </FormItem>
            <FormItem label={formatMessage({ id: 'app.settings.basic.undergraduateSchool' })}>
              {getFieldDecorator('undergraduateSchool', {
                /*rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'app.settings.basic.undergraduateSchool-message' }, {}),
                  },
                ],*/
              })(
                <Input
                  placeholder={formatMessage({
                    id: 'app.settings.basic.undergraduateSchool-placeholder',
                  })}
                />
              )}
            </FormItem>
            <FormItem label={formatMessage({ id: 'app.settings.basic.applicationSchool' })}>
              {getFieldDecorator('applicationSchool', {
                /*rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'app.settings.basic.applicationSchool-message' }, {}),
                  },
                ],*/
              })(
                <Input
                  placeholder={formatMessage({
                    id: 'app.settings.basic.applicationSchool-placeholder',
                  })}
                />
              )}
            </FormItem>
            <FormItem label={formatMessage({ id: 'app.settings.basic.applicationProfession' })}>
              {getFieldDecorator('applicationProfession', {
                /*rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'app.settings.basic.applicationProfession-message' }, {}),
                  },
                ],*/
              })(
                <Input
                  placeholder={formatMessage({
                    id: 'app.settings.basic.applicationProfession-placeholder',
                  })}
                />
              )}
            </FormItem>
            <Button type="primary" htmlType="submit">
              <FormattedMessage
                id="app.settings.basic.update"
                defaultMessage="Update Information"
              />
            </Button>
          </Form>
        </div>
        <div className={styles.right}>
          <AvatarView avatar={this.getAvatarURL()} onUploadImg={this.uploadImg} />
        </div>
      </div>
    );
  }
}

export default BaseView;
