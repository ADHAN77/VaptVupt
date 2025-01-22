import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    height: 80px;
    width: 100vw;
    box-sizing: border-box;

    /* Esconde o SearchBar em telas pequenas */
    @media (max-width: 819px) {
        display: none;
    }
`;

export const Categories = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap: 10px;
    justify-content: center;
    padding: 0 10px;
    background-color: transparent;
    position: relative;
    z-index: 5;

    &::-webkit-scrollbar {
        display: none;
    }
    scrollbar-width: none;
    width: 100%;
    max-width: 100%;

    @media (min-width: 1024px) {
        margin-left: auto;
        margin-right: auto;
    }

    @media (max-width: 1024px) {
        justify-content: flex-start;
        gap: 8px;
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
    transform: all 1s esase;
    transition-duration: .2s;

    &:hover {
        transform: translateY(-5px);
        background-color: rgb(0, 245, 192);
        border: 1px solid rgb(0, 4, 255);
        color: rgb(0, 4, 255);
    }

    &:active {
        transform: translateY(2px);
    }

    @media (max-width: 1024px) {
        padding: 12px 12px;
        font-size: 13px;
    }

    @media (max-width: 768px) {
        padding: 10px 10px;
        font-size: 12px;
    }

`;

export const CategoryWrapper = styled.div`
    position: relative; /* Necessário para que a lista de subcategorias seja posicionada corretamente */
    display: inline-block;
`;

export const SubcategoryList = styled.ul`
    position: absolute;
    top: calc(100% + 5px);
    left: 0;
    z-index: 10;
    margin: 0;
    padding: 10px;
    list-style: none;
    background-color: rgb(0, 4, 255);
    border: 1px solid rgb(0, 245, 192);
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-height: 200px;
    overflow-y: auto;
    width: max-content;
`;

export const SubcategoryItem = styled.li`
    padding: 5px 10px;
    cursor: pointer;
    transition: background-color 0.2s;
    border-radius: 4px;

    &:hover {
        background-color: rgb(0, 245, 192);
        color: rgb(0, 4, 255);
    }

    @media (max-width: 768px) {
        padding: 4px 8px; /* Reduz o padding no mobile */
        font-size: 12px; /* Menor tamanho de fonte no mobile */
    }
`;
