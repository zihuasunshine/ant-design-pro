import React, { Component } from 'react';
import { formatMessage, FormattedMessage } from 'umi/locale';
import { render } from 'react-dom';
import ImageCrop from 'react-image-crop-component';
import { Upload, Button, Modal } from 'antd';
import { connect } from 'dva';
import 'react-image-crop-component/style.css';
import styles from './index.less';
//import src from './demo.jpg';

class AvatarView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      src: props.avatar,
      cropedImg: '',
    };
  }

  handleChange = params => {
    const {
      file: { originFileObj },
    } = params;
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.setState({ src: reader.result, cropedImg: reader.result });
    });
    reader.readAsDataURL(originFileObj);
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleOK = () => {
    // 上传剪裁过的图片
    const { cropedImg } = this.state;
    const { onUploadImg } = this.props;
    typeof onUploadImg === 'function' && onUploadImg(cropedImg);
    this.handleCancel();
  };

  watch = res => {
    const img = document.getElementById('cropedImg');
    img.src = res.image;
  };
  onCrop = res => {
    const img = document.getElementById('cropedImg');
    img.src = res.image;
    this.setState({ cropedImg: res.image });
  };
  onReset = () => {
    const { src } = this.state;
    const img = document.getElementById('cropedImg');
    img.src = src;
  };

  render() {
    const { cropedImg, src, visible } = this.state;
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
          <img src={src} alt="avatar" />
        </div>
        <Upload {...uploadProp}>
          <div>
            <Button icon="upload">
              <FormattedMessage
                id="app.settings.basic.change-avatar"
                defaultMessage="Change avatar"
              />
            </Button>
          </div>
        </Upload>
        <Modal width={920} visible={visible} onCancel={this.handleCancel} onOk={this.handleOK}>
          <div className={styles.images}>
            <div className={styles.cropBlock}>
              <ImageCrop
                src={src}
                maxHeight="300px"
                square={true}
                watch={this.watch}
                onCrop={this.onCrop}
                onReset={this.onReset}
              />
            </div>
            <div className={styles.resultBlock}>
              <img id="cropedImg" src={cropedImg} />
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default AvatarView;
