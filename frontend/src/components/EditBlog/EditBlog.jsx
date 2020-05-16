import { Editor } from '@tinymce/tinymce-react';
import React, { Component } from 'react';
import { EDITOR_API_KEY, EDITOR_INIT } from 'utils/editorConstants';

class EditBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorContent: ''
    };
  }

  onEditorChange = content => {
    this.setState({ editorContent: content });
  };

  render() {
    return (
      <div>
        <Editor
          apiKey={EDITOR_API_KEY}
          init={EDITOR_INIT}
          onEditorChange={this.onEditorChange}
        />
      </div>
    );
  }
}

export default EditBlog;
