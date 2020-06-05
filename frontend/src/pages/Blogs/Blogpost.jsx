import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { requests } from 'utils/agent';

import RenderBlog from 'components/RenderBlog';

class Blogpost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content:
        'This is the blogpost page for blogpostcontent id ' +
        props.match.params.id,
      blogpostcontent_id: props.match.params.id,
      blogpostcontent: {}
    };
  }

  componentDidMount() {
    requests
      .get('blogpostcontent/' + this.state.blogpostcontent_id + '/')
      .then(result => {
        this.setState({
          blogpostcontent: result,
          content: result.body_content
        });
      });
  }

  render() {
    return (
      <RenderBlog
        blogpostcontent_id={this.state.blogpostcontent_id}
        initial_content={this.state.content}
      />
    );
  }
}

export default withRouter(Blogpost);
