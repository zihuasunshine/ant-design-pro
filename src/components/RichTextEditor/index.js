import 'braft-editor/dist/index.css';
import React from 'react';
import BraftEditor from 'braft-editor';
import styles from './style.less';

export default class RichTextEditor extends React.Component {
  state = {
    editorState: BraftEditor.createEditorState('<p>Hello <b>World!</b></p>'), // 设置编辑器初始内容
    outputHTML: '<p></p>',
  };

  componentDidMount() {
    this.isLivinig = true;
    // 3秒后更改编辑器内容
    setTimeout(this.setEditorContentAsync, 3000);
  }

  componentWillUnmount() {
    this.isLivinig = false;
  }

  handleChange = editorState => {
    this.setState({
      editorState: editorState,
      outputHTML: editorState.toHTML(),
    });
  };

  setEditorContentAsync = () => {
    this.isLivinig &&
      this.setState({
        editorState: BraftEditor.createEditorState('<p>你好，<b>世界!</b><p>'),
      });
  };

  render() {
    const { editorState, outputHTML } = this.state;
    const controls = [
      'bold',
      'italic',
      'underline',
      'text-color',
      'separator',
      'link',
      'separator',
      'media',
    ];

    return (
      <div>
        <div className={styles.editor_wrapper}>
          <BraftEditor
            contentClassName={styles.height}
            controls={controls}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}
