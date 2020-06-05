import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';
import { requests } from '../../utils/agent';

const test2 = `<h1>testing<h1>`;
const BlogContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const RenderBlog = ({ blogpostcontent_id, initial_content }) => {
  return <BlogContainer>{ReactHtmlParser(initial_content)}</BlogContainer>;
};

export default RenderBlog;
