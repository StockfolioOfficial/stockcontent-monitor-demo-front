import { createGlobalStyle } from 'styled-components';

import PretendardB from '../assets/fonts/Pretendard-Bold.woff2';
import PretendardM from '../assets/fonts/Pretendard-Medium.woff2';
import PretendardR from '../assets/fonts/Pretendard-Regular.woff2';

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    src: local('Pretendard Bold'), url(${PretendardB}) format('woff2');
  }
  
  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    src: local('Pretendard Medium'), url(${PretendardM}) format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    src: local('Pretendard Regular'), url(${PretendardR}) format('woff2');
  }
`;

export default GlobalFonts;
