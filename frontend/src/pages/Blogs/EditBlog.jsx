import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import Styled from 'styled-components';
import { Editor } from '@tinymce/tinymce-react';

import EditBlogModal from '../../components/EditBlog/EditBlogModal';
import { EDITOR_API_KEY, EDITOR_INIT } from '../../utils/editorConstants';

// Styles
const Container = Styled.div`
  margin: 0 10%;
`;

const HeaderContainer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

const Heading = Styled.p`
  font-size: ${props => props.theme.fontSizes.h1};
  font-weight: bold;
  margin: 0;
`;

const InputContainer = Styled.div`
  margin: 10px 0;
`;

const TitleInput = Styled(Input)`
  width: 100%;
  font-size: ${props => props.theme.fontSizes.h3};
`;

const TagsInput = Styled(Input)`
  width: 100%;
  font-size: ${props => props.theme.fontSizes.p};
`;

const ActionButton = Styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.lightPurple};
  font-size: ${props => props.theme.fontSizes.p};
  color: ${props => props.theme.colors.white};
  padding: 15px 40px;
  cursor: pointer;
  max-width: 250px;
  max-height: 75px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: bold;
  margin: 10px 0;

  &:hover {
    opacity: 70%;
  }
`;

const UploadButtonText = Styled.p`
  color: ${props => props.theme.colors.white};
  font-size ${props => props.theme.fontSizes.p};
  font-weight: bold;
`;

const PublishButtonContainer = Styled.div`
  display: flex;
  justify-content: flex-end;
`;

class EditBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      action: 'save',
      blogTitle: '',
      coverPhoto: '',
      editorContent: '',
      modalOpen: false
    };
  }

  /* MODAL CALLBACKS */

  onPressSave = () => {
    this.setState({modalOpen: false});
  };

  onPressCancel = () => {
    this.setState({modalOpen: false});
  };

  /* CLASS FUNCTIONS */
  onEditorChange = (content) => {
    this.setState({ editorContent: content });
  };

  onPressUploadImage = () => {
    this.setState({
      modalOpen: true,
      action: 'save'
    });
  };

  onTitleChange = (title) => {
    this.setState({blogTitle: title.target.value});
  };

  onPressPreview = () => {
    this.setState({
      action: 'publish',
      modalOpen: true
    });
  };

  onPublishBlog = () => {
    // TODO: logic for publishing a blog
  }

  getActionFunction() {
    switch(this.state.action) {
      case 'save':
        return this.onPressSave;
        break;
      case 'publish':
        return this.onPublishBlog;
        break;
      default:
        return this.onPublishBlog;
        break;
    }
  }

  getModalContent() {
    let modalContent = {};
    switch(this.state.action) {
      case 'save':
        modalContent.title = 'Upload Cover Image';
        modalContent.description = this.renderUploadImageModal();
        break;
      case 'publish':
        modalContent.title = 'Preview Blog';
        modalContent.description = this.renderPreview();
        break;
      default:
        return modalContent;
        break;
    }
    console.log('modal content: ', modalContent);
    return modalContent;
  }

  renderUploadImageModal() {
    return '<div>\
              This will be used as the cover photo for your blog.\
            </div>';
  };

  renderPreview() {
    return(
      `<div><h2>${this.state.blogTitle}</h2><div>${this.state.editorContent}</div></div>`
    );
  }

  render() {
    return (
      <Container>
        <EditBlogModal 
          modalOpen={this.state.modalOpen}
          action={this.state.action}
          onPressAction={this.getActionFunction()}
          onPressCancel={this.onPressCancel}
          modalContent={this.getModalContent()}
        />
        <HeaderContainer>
          <Heading>Edit Blog Post</Heading>
          <ActionButton onClick={this.onPressPreview}>Preview</ActionButton>
        </HeaderContainer>
        <InputContainer>
          <TitleInput 
            size="mini" 
            placeholder="Enter Title..." 
            value={this.state.blogTitle}
            onChange={this.onTitleChange}
          />
        </InputContainer>
        <InputContainer>
          <ActionButton onClick={this.onPressUploadImage}>
              <UploadButtonText>Upload a Header Image</UploadButtonText>
          </ActionButton>
        <InputContainer>
          <TagsInput size="mini" placeholder="Tags"/>
        </InputContainer>
        </InputContainer>
        <Editor
          apiKey={EDITOR_API_KEY}
          init={EDITOR_INIT}
          onEditorChange={this.onEditorChange}
        />
        <PublishButtonContainer>
          <ActionButton>Publish</ActionButton>
        </PublishButtonContainer>
      </Container>
    );
  }
}

export default EditBlog;