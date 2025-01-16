import styled from "styled-components";

export const BannerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    overflow: hidden; /* Garante que o banner não transborde */
`;

export const BannerItem = styled.img`
    width: 100%;
    max-width: 1200px; /* Define um tamanho máximo para o banner */
    height: auto; /* Mantém a proporção da imagem */
    border-radius: 8px;

    @media (max-width: 768px) {
        /* Estilo para dispositivos móveis */
        max-width: 100%; /* Faz o banner ocupar 100% da largura */
        border-radius: 4px; /* Opcional: diminui o arredondamento no mobile */
    }
`;