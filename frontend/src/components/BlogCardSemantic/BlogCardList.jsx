import React from 'react';
import BlogCard from './BlogCard';
import cardInfo from './BlogInfo';

const BlogCardList = () => {
  const cards = cardInfo.slice(0, 3).map((card, index) => {
    return (
      <div key={index}>
        <BlogCard
          imgurl={card.imgUrl}
          blogTitle={card.title}
          blogDescription={card.description}
        />
      </div>
    );
  });

  return <React.Fragment>{cards}</React.Fragment>;
};

export default BlogCardList;
