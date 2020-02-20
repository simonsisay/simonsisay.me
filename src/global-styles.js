import { createGlobalStyle } from "styled-components";

export const theme = {};

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Dancing+Script|Indie+Flower|Josefin+Sans|Poiret+One&display=swap');

    html{
     background: #040408 ;

    }
    body{
        margin:0px;
         padding:0px;
      overflow: hidden !important;

    }

    #particles canvas{
    position: absolute;
    width: 100vh;
    height: 100vh;
    z-index: -1;
}
`;
