import React from 'react';
import './Quote.css';

const Quote = ({ quote, author }) => {
  return (
    <>
      <div class="quote">{quote}</div>
      <div class="author">- {author}</div>
    </>
  );
};
export default Quote;
