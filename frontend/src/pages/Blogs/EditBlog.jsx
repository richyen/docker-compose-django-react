import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import Styled from 'styled-components';
import { Editor } from '@tinymce/tinymce-react';
import parse from 'html-react-parser';

import EditBlogModal from '../../components/EditBlog/EditBlogModal';
import { EDITOR_API_KEY, EDITOR_INIT } from '../../utils/editorConstants';

// Styles
const Container = Styled.div`
  margin: 0 10%;
`;

const BlogContainer = Styled.div`
  margin: 5% 0;
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
  font-family: ${props => props.theme.fonts.Poppins};
  font-weight: bold;
  margin: 0;
`;

const Category = Styled(Heading)`
  font-size: ${props => props.theme.fontSizes.h2};
`;

const ActionButtonContainer = Styled.div`
  display: flex;
  flex-direction: row;
`;

const InputContainer = Styled.div`
  margin: 10px 0;
`;

const TitleInput = Styled(Input)`
  width: 100%;
  font-size: ${props => props.theme.fontSizes.h2};
`;

const TagsInput = Styled(Input)`
  width: 100%;
  font-size: ${props => props.theme.fontSizes.p};
`;

const ActionButton = Styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.lightPurple};
  font-size: ${props => props.theme.fontSizes.p};
  font-family: ${props => props.theme.fonts.Poppins};
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
  font-family: ${props => props.theme.fonts.Poppins};
`;

const PublishButtonContainer = Styled.div`
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fonts.Poppins};

`;

const PreviewBlogTitle = Styled.p`
  font-size: ${props => props.theme.fontSizes.h1};
  font-weight: bold;
  margin-bottom: 16px;
`;

const Tag = Styled.p`
  font-size: ${props => props.theme.fontSizes.p};
  font-family: ${props => props.theme.fonts.Poppins};
`;

class EditBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      action: 'save-image',
      blogTitle: '',
      coverPhoto: '',
      editorContent: '',
      modalOpen: false,
      isEditing: true,
      tags: ''
    };
    this.editor = React.createRef();
  }

  /* MODAL CALLBACKS */

  onPressSave = () => {
    this.setState({ modalOpen: false });
  };

  onPressCancel = () => {
    this.setState({ modalOpen: false });
  };

  /* CLASS FUNCTIONS */
  onEditorChange = content => {
    this.setState({ editorContent: content });
  };

  onTagsChange = (tags) => {
    this.setState({tags: tags.target.value});
  }

  onPressUploadImage = () => {
    this.setState({
      modalOpen: true,
      action: 'save-image'
    });
  };

  onTitleChange = title => {
    this.setState({ blogTitle: title.target.value });
  };

  onPressPreview = () => {
    this.setState({isEditing: false});
  };

  onPublishBlog = () => {
    this.setState({
      modalOpen: true,
      action: 'publish'
    })
  };

  onPressKeepEditing = () => {
    this.setState({isEditing: true});
  }

  getActionFunction() {
    switch (this.state.action) {
      case 'save-image':
        return this.onPressSave;
      case 'publish':
        return this.onPublishBlog;
      default:
        return this.onPublishBlog;
    }
  }

  getModalContent() {
    let modalContent = {};
    switch (this.state.action) {
      case 'save-image':
        modalContent.title = 'Upload Cover Image';
        modalContent.description = this.renderUploadImageModal();
        break;
      case 'publish':
        modalContent.title = 'Publish Blog';
        modalContent.description = this.renderPublishModal();
        break;
      default:
        return modalContent;
    }
    return modalContent;
  }

  renderUploadImageModal() {
    return '<div>This will be used as the cover photo for your blog.</div>';
  }

  renderPublishModal() {
    return '<div>Are you sure you want to publish this blog now?</div>';
  }

  renderEditActionButtons() {
    return (
      <ActionButtonContainer>
        <ActionButton
          style={{ marginRight: '8px' }}
        >
          Save Draft
        </ActionButton>
        <ActionButton
          onClick={this.onPressPreview}
        >
          Preview
        </ActionButton>
      </ActionButtonContainer>
    )
  }

  renderPreviewActionButtons() {
    return (
      <ActionButtonContainer>
        <ActionButton style={{ marginRight: '8px' }} onClick={this.onPublishBlog}>Publish Now</ActionButton>
        <ActionButton style={{ marginRight: '8px' }}>Schedule</ActionButton>
        <ActionButton>Save Draft</ActionButton>
      </ActionButtonContainer>
    )
  }

  renderEditFields() {
    return (
      <BlogContainer>
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
            <TagsInput size="mini" placeholder="Tags" value={this.state.tags} onChange={this.onTagsChange}/>
          </InputContainer>
        </InputContainer>
        <Editor
          ref={this.editor}
          id={'blogEditor'}
          apiKey={EDITOR_API_KEY}
          init={EDITOR_INIT}
          initialValue={this.state.editorContent}
          onEditorChange={this.onEditorChange}
          value={this.state.editorContent}
      />
      </BlogContainer>
    )
  }

  renderPreview() {
    return (
      <BlogContainer>
        <PreviewBlogTitle>{this.state.blogTitle ? this.state.blogTitle: 'No Title'}</PreviewBlogTitle>
       { this.state.editorContent === '' ? 'No Blog Content' : parse(`${this.state.editorContent}`) }
       <Tag>{this.state.tags}</Tag>
      </BlogContainer>
    )
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
          { this.props.location.state.category && <Category>{this.props.location.state.category}</Category>}
          { this.state.isEditing ? this.renderEditActionButtons() : this.renderPreviewActionButtons() }
        </HeaderContainer>
        { !this.state.isEditing && <hr/>}
        { this.state.isEditing ? this.renderEditFields() : this.renderPreview() }
        { 
          !this.state.isEditing && 
          <PublishButtonContainer>
            <ActionButton onClick={this.onPressKeepEditing}>Keep Editing</ActionButton>
          </PublishButtonContainer>
        }
      </Container>
    );
  }
}

export default EditBlog;
