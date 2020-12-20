import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
  }
  body {
    background: #F5F5F5;
  }
  .app {
        position: absolute; 
        top: 60px;
        left: 50%;
        transform: translateX(-50%);
        width: 500px;
        
        h1 {
            font-size: 60px;
            font-weight: 100;
            text-align: center;
            color: rgba(175, 47, 47, 0.3);
        }
  }
`;

export default GlobalStyle;
