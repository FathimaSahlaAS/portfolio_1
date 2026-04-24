import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
    
  body {
  
    background-color: ${({ theme }) => theme.background};  /* Apply theme background */
    color: ${({ theme }) => theme.color};  /* Apply theme color */
    transition: all 0.3s ease-in-out;
  }

 


  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.headingColor};  /* Apply theme heading color */
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  nav {
    background-color: ${({ theme }) => theme.navbarBackground};  /* Apply theme navbar background */
    transition: background-color 0.3s ease-in-out;
  }
`;

  
export default GlobalStyles;




  

  

 

 
