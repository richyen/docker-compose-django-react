import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';

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

const RenderBlog = () => {
  return <BlogContainer>{ReactHtmlParser(test2)}</BlogContainer>;
};

export default RenderBlog;
