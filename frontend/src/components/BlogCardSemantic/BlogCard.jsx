import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const BlogCard = ({ imgurl, blogTitle, blogDescription }) => {
  return (
    <Card>
      <Image src={imgurl} wrapped />
      <Card.Content>
        <Card.Header>{blogTitle}</Card.Header>
        <Card.Description>{blogDescription}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default BlogCard;
