import React, { Component } from 'react';
import { formatMessage, FormattedMessage } from 'umi/locale';
import { render } from 'react-dom';
import { ZxImageProcess } from 'image-process'
import { Upload, Button, Modal } from 'antd';
import { connect } from 'dva';
import styles from './index.less';

class AvatarView extends Component {

  componentDidMount(){
    const { onUploadImg } = this.props;
    const imgWrapper = document.querySelector('#imgWrapper');
    const img = document.querySelector('#cropImg');
    const zxImageProcess = new ZxImageProcess({
      // 触发文件选择的元素
      selector: '#imgWrapper',
      // 限制宽度缩放，则只需设置width值
      // 限制高度缩放，则只需设置height值
      // 同时设置了width、height值，则会对图片按尺寸裁剪
      width: 375,
      height: 375,
      submitText: '提交',
      rotateText: '旋转',
      success: function (result) {
        typeof onUploadImg === 'function' && onUploadImg(result.base64);
      },
      error: function (err) {
        console.error(err);
        if (err.code === 9 || err.code === 22) return
      }
    })
  }

  render() {
    const { avatar } = this.props;
    const uploadProp = {
      showUploadList: false,
      onChange: this.handleChange,
    };
    return (
      <div className={styles.avatar_wrapper} style={{ width: '144px' }}>
        <div className={styles.avatar_title}>
          <FormattedMessage id="app.settings.basic.avatar" defaultMessage="Avatar" />
        </div>
        <div className={styles.avatar}>
          <img src={avatar} alt="avatar" />
        </div>
        <div id='imgWrapper' className={styles.img_wrapper}> </div>
      </div>
    );
  }
}

export default AvatarView;
