import React, { Component } from 'react';
import { formatMessage, FormattedMessage } from 'umi/locale';
import { render } from 'react-dom';
import Cropper from '@/plugin/Cropper'
import { Upload, Button, Modal } from 'antd';
import { connect } from 'dva';
import styles from './index.less';

class AvatarView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      imgSrc: '',         // 裁剪前的图片
      image: '',          // 裁剪后的图片
      imageLoaded: false,
    };
  }

  handleChange = params => {
    const {
      file: { originFileObj },
    } = params;
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.setState({ imgSrc: reader.result });
    });
    reader.readAsDataURL(originFileObj);
    this.setState({ visible: true });
  };

  handleImageLoaded (state) {
    this.setState({
      [state + 'Loaded']: true
    })
  }

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleOK = (state) => {
    // 上传剪裁过的图片
    let node = this[state]
    this.setState({
      [state]: node.crop()
    }, () => {
      const { image } = this.state;
      const { onUploadImg } = this.props;
      typeof onUploadImg === 'function' && onUploadImg(image);
      this.handleCancel();
    })
  };

  render() {
    const { avatar } = this.props;
    const { visible } = this.state;
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
        <Modal 
          width={920} 
          visible={visible} 
          destroyOnClose={true}
          onCancel={this.handleCancel} 
          onOk={() => this.handleOK('image')}
        >
         <Cropper 
            src={this.state.imgSrc}
            ref={ref => { this.image = ref }}
            onImgLoad={() => this.handleImageLoaded('image')}
          />
        </Modal>
      </div>
    );
  }
}

export default AvatarView;
