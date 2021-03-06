import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

 *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
 }

 body {
   color: #a8a8b3;
   background-color: #121214;
   margin: 0px;
 }

 body, input button {
   font-family: 'Roboto', sans-serif;
   font-size: 16px;
 }

 button {
   cursor: pointer;
 }

`;
