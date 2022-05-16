import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    }

  html, body, #root {
    height: 100%;
    overflow-y: hidden;
  } 

  body {
    font-family: 'Pretendard';
    font-weight: ${({ theme }) => theme.fonts.weight.light};
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  input, textarea, select, button {
    outline: none;
  }
  
  input:focus, textarea:focus, select:focus {
    outline: none;
  }
  
  a{
    color: inherit;
    text-decoration: none;
  }
  
  ul, li {
    list-style: none;
  }

  textarea {
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    resize: none;
  }
`;

export default GlobalStyle;
