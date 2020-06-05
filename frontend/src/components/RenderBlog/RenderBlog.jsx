import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';
import { requests } from '../../utils/agent';

const test2 = `<h1>testing<h1>`;
const BlogContainer = styled.div`
  height: 100%;
`;

const RenderBlog = () => {
  return <BlogContainer>{ReactHtmlParser(test2)}</BlogContainer>;
};

export default RenderBlog;
