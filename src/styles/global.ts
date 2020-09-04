import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #5dbcd2;
    color: #FFF9FB;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family:'Fira Sans', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }


  .react-datepicker-wrapper {
    width: 100% !important;
  }
  .react-datepicker__input-container {
    width: 100% !important;
  }
`;
