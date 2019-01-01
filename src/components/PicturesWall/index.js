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

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };

  handleChange = ({ file, fileList, event }) => {
    this.setState({ fileList });
    const { originFileObj } = file;
    const { uploadImg } = this.props;
    uploadImg(originFileObj);
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
