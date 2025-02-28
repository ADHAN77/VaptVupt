import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    html, body {
    height: 100%;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    background-color: #f4f4f4; /* Ajuste a cor de fundo conforme necessário */
    color: #333; /* Ajuste a cor do texto conforme necessário */
    }

    .inner-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 1200px; /* Define a largura máxima */
        margin: 0 auto; /* Centraliza horizontalmente */
    }
`;

export default GlobalStyle;