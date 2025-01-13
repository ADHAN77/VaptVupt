import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80px;

    @media (max-width: 1024px) {
        padding: 15px;
        height: 70px;
    }

    @media (max-width: 768px) {
        padding: 10px;
        height: 60px;
    }
`;

export const Categories = styled.div`
    display: flex;
    flex-wrap: nowrap; /* Impede a quebra de linha */
    gap: 10px; /* Espaço entre os botões */
    justify-content: center; /* Centraliza as categorias no desktop */
    overflow-x: auto; /* Habilita o scroll horizontal se necessário */
    padding: 0 10px;
    background-color: transparent;

    /* Ocultar a barra de rolagem */
    &::-webkit-scrollbar {
        display: none; /* Remove a barra de rolagem no WebKit */
    }
    scrollbar-width: none; /* Remove a barra de rolagem no Firefox */

    /* Aumenta a largura no desktop */
    width: 100%; /* A largura é 100% para desktop */
    max-width: 100%; /* Garante que não ultrapasse o limite da tela */

    /* No desktop, centralizamos o conteúdo */
    @media (min-width: 1024px) {
        margin-left: auto;
        margin-right: auto;
    }

    /* Para mobile, as categorias começam do lado esquerdo e rolam horizontalmente */
    @media (max-width: 1024px) {
        justify-content: flex-start;
        gap: 8px;
    }

    @media (max-width: 768px) {
        gap: 6px;
    }
`;

export const CategoryButton = styled.button`
    padding: 15px 15px;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    background-color: rgb(0, 4, 255);
    border: 1px solid rgb(0, 245, 192);
    color: white;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;

    &:hover {
        background-color: rgb(0, 245, 192);
        border: 1px solid rgb(0, 4, 255);
        color: rgb(0, 4, 255);
    }

    @media (max-width: 1024px) {
        padding: 12px 12px;
        font-size: 13px;
    }

    @media (max-width: 768px) {
        padding: 10px 10px;
        font-size: 12px;
    }

    @media (max-width: 480px) {
        padding: 8px 8px;
        font-size: 11px;
    }
`;
