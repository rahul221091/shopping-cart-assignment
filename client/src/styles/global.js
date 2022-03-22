import { createGlobalStyle } from "styled-components";
import { devices } from "./breakpoints";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: 'Dosis', sans-serif;
}

html {
    
    font-size: 62.5%;
    @media ${devices.tablet} {
        font-size: 52%;
  }
}

body {
    font-family: 'Dosis', sans-serif;
    margin: 0;
}

a {
    text-decoration: none;;
}

h1 {
    font-size: 3.2rem;
    margin: 0;
    margin-bottom: 2.2rem;
}

h2 {
    font-size: 3rem;
    text-align: center;
    margin: 0;
    margin-bottom: 2rem;
}
h3 {
    font-size: 2rem;
    text-align: center;
    margin: 0;
    margin-bottom: 1.8rem;
}

p {
    font-size: 1.6rem;
}
`;

export default GlobalStyles;
