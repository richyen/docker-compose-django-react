import { createGlobalStyle } from 'styled-components';

import FontFaces from './fonts';
import media from './media';
// import mixins from './mixins';
import theme from './theme';

const { colors, fontSizes, fonts } = theme;

const GlobalStyle = createGlobalStyle`
  ${FontFaces};

  html {
    box-sizing: border-box;
    font-size: 87.5%; // Set 1em = 14px
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${colors.white};
    color: ${colors.black};
    line-height: 1.5;
    font-family: ${fonts.Poppins};
    font-size: ${fontSizes.md};
    ${media.tablet`font-size: ${fontSizes.sm};`}

    &.hidden {
      overflow: hidden;
    }
    &.blur {
      overflow: hidden;
      #root > #content > * {
        filter: blur(5px) brightness(0.7);
        transition: ${theme.transition};
        pointer-events: none;
        user-select: none;
      }
    }
  }

  h1 {
    font-family: ${fonts.Poppins};
    font-size: ${fontSizes.xxl};
  }

  h2 {
    font-family: ${fonts.Poppins};
    font-size: ${fontSizes.xl};
  }

  h3 {
    font-family: ${fonts.Poppins};
    font-size: ${fontSizes.lg};
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  img[alt=""],
  img:not([alt]) {
    filter: blur(5px);
  }
`;

export default GlobalStyle;
