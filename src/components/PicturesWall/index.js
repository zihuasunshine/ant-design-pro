import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Upload, Icon, Modal } from 'antd';
import './index.less';

class PicturesWall extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
  };
  count = 0;

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };

  handleChange = ({file, fileList}) => {
    this.count = this.count+1;
    this.setState({ fileList });
    if(this.count === 3){
      const { originFileObj } = file;
      const { uploadImg } = this.props;
      uploadImg(originFileObj);
      this.count = 0;
    }
  };

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const { count } = this.props;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix">
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
