import PoppinsBlack from '../fonts/Poppins-Black.ttf';
import PoppinsBlackItalic from '../fonts/Poppins-BlackItalic.ttf';
import PoppinsBold from '../fonts/Poppins-Bold.ttf';
import PoppinsBoldItalic from '../fonts/Poppins-BoldItalic.ttf';
import PoppinsExtraBold from '../fonts/Poppins-ExtraBold.ttf';
import PoppinsExtraBoldItalic from '../fonts/Poppins-ExtraBoldItalic.ttf';
import PoppinsExtraLight from '../fonts/Poppins-ExtraLight.ttf';
import PoppinsExtraLightItalic from '../fonts/Poppins-ExtraLightItalic.ttf';
import PoppinsRegularItalic from '../fonts/Poppins-Italic.ttf';
import PoppinsLight from '../fonts/Poppins-Light.ttf';
import PoppinsLightItalic from '../fonts/Poppins-LightItalic.ttf';
import PoppinsMedium from '../fonts/Poppins-Medium.ttf';
import PoppinsMediumItalic from '../fonts/Poppins-MediumItalic.ttf';
import PoppinsRegular from '../fonts/Poppins-Regular.ttf';
import PoppinsSemiBold from '../fonts/Poppins-SemiBold.ttf';
import PoppinsSemiBoldItalic from '../fonts/Poppins-SemiBoldItalic.ttf';
import PoppinsThin from '../fonts/Poppins-Thin.ttf';
import PoppinsThinItalic from '../fonts/Poppins-ThinItalic.ttf';
import PTSerifBold from '../fonts/PTSerif-Bold.ttf';
import PTSerifBoldItalic from '../fonts/PTSerif-BoldItalic.ttf';
import PTSerifItalic from '../fonts/PTSerif-Italic.ttf';
import PTSerifRegular from '../fonts/PTSerif-Regular.ttf';
import { css } from 'styled-components';

const FontFaces = css`
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsThin}) format('truetype');
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsThinItalic}) format('truetype');
    font-weight: 100;
    font-style: italic;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsExtraLight}) format('truetype');
    font-weight: 200;
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsExtraLightItalic}) format('truetype');
    font-weight: 200;
    font-style: italic;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsLightItalic}) format('truetype');
    font-weight: 300;
    font-style: italic;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsRegularItalic}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsRegularItalic}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsMediumItalic}) format('truetype');
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsSemiBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsSemiBoldItalic}) format('truetype');
    font-weight: 600;
    font-style: italic;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsBoldItalic}) format('truetype');
    font-weight: 700;
    font-style: italic;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsExtraBold}) format('truetype');
    font-weight: 800;
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsExtraBoldItalic}) format('truetype');
    font-weight: 800;
    font-style: italic;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsBlack}) format('truetype');
    font-weight: 900;
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsBlackItalic}) format('truetype');
    font-weight: 900;
    font-style: italic;
  }
  @font-face {
    font-family: 'PT Serif';
    src: url(${PTSerifRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'PT Serif';
    src: url(${PTSerifItalic}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'PT Serif';
    src: url(${PTSerifBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'PT Serif';
    src: url(${PTSerifBoldItalic}) format('truetype');
    font-weight: 700;
    font-style: italic;
  }
`;

export default FontFaces;
