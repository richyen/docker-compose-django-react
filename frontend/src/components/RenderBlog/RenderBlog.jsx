import React, { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';
import { requests } from 'utils/agent';

const test1 = '<div>Example HTML string</div>';
const test2 = `
<p>This is a test.</p>
<p>This is an <a href="http://example.com/" target="_blank" rel="noopener">example</a> link. It will open a new tab.</p>
<p><img src="https://i.picsum.photos/id/203/500/500.jpg" alt="bike picture" width="500" height="500" /></p>
<p>&nbsp;</p>
`;

const BlogContainer = styled.div`
  width: 500px;
  height: 100%;
  border: 1px red solid;
  color: green;
`;

requests.get('blogpostcontent/2/').then(result => console.log(result));

const RenderBlog = ({ blogpostcontent_id, initial_content }) => {
  const [content, setContent] = useState('<div>hi2</div>');
  requests
    .get('blogpostcontent/' + blogpostcontent_id + '/')
    .then(result => setContent(result.body_content));
  return <BlogContainer>{ReactHtmlParser(content)}</BlogContainer>;
};

export default RenderBlog;
