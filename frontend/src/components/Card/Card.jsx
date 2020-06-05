import React from 'react';
import Styled from 'styled-components';

const StyledCard = Styled.div`
    background: #c4c4c4;
    border-radius: 8px;
    inset: 0.9% 0% 0% 0%;
    text-decoration: none;
    color: #444;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    min-height: 100%;
    position: relative;
    top: 0;
    transition: all 0.2s ease-in;
    &:hover {
        top: -2px;
        box-shadow: 0 4px 5px rgba(0,0,0,0.2);
    }
`;

const StyledArticle = Styled.article`
    padding: 20px;
`;

const StyledHeader = Styled.h3`
    inset: 61.4% 7.27% 7.27% 30.47%;
    font-family: PT Serif;
    font-weight: bold;
    font-style: normal;
    font-size: 24px;
    line-height: 36px;
    color: #000000;
`;

const StyledP = Styled.p`
    width: 282px;
    height: 95px;
    left: 24px;
    top: 324px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    color: #000000;

`;

const StyledImg = Styled.div`
    background-image: url(${props => props.imgUrl});
    inset: 0% 0% 0% 44.02%;
    border-radius: 8px 8px 0 0;
    padding-bottom: 62%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center center;

`;

const Card = ({ imgurl, blogTitle, blogDescription }) => {
  return (
    <React.Fragment>
      <StyledCard>
        <StyledImg imgUrl={imgurl} />
        <StyledArticle>
          <StyledHeader>{blogTitle}</StyledHeader>
          <StyledP>{blogDescription}</StyledP>
        </StyledArticle>
      </StyledCard>
    </React.Fragment>
  );
};

export default Card;
