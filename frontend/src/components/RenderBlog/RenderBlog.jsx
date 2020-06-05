import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';

const BlogContainer = styled.div`
  width: 500px;
  height: 100%;
  border: 1px red solid;
  color: green;
`;

const RenderBlog = ({ blogpostcontent_id, initial_content }) => {
  return <BlogContainer>{ReactHtmlParser(initial_content)}</BlogContainer>;
};

export default RenderBlog;
