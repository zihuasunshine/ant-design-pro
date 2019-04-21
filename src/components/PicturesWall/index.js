import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Upload, Icon, Modal } from 'antd';
import styles from './index.less';

class PicturesWall extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      previewVisible: false,
      previewImage: '',
    }
    this.count = 0;
  }
  
  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };

  handleChange = ({file, fileList}) => {
    const { originFileObj } = file;
    const { uploadImg } = this.props;
    uploadImg(originFileObj);
    // this.count = this.count+1;
    // console.log(this.count);
    // if(this.count === 3){
    //   const { originFileObj } = file;
    //   const { uploadImg } = this.props;
    //   uploadImg(originFileObj);
    //   this.count = 0;
    // }
  };

  render() {
    const { previewVisible, previewImage } = this.state;
    const { count, imgs } = this.props;
    console.log(imgs);
    const fileList = imgs.map((img, index) => {
      return {
        uid: index+'',
        url: img
      }
    });
    console.log(fileList);
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className={styles.picture}>
        <Upload
          action=''
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= count ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="picture" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

PicturesWall.propTypes = {
  count: PropTypes.number.isRequired,
  uploadImg: PropTypes.func.isRequired,
};

export default PicturesWall;
