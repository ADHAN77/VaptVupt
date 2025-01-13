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
    height: 80px; /* Garante que o container ocupe a altura total da viewport */
`;

export const Categories = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px; /* Define um espaço maior entre os botões */
    justify-content: center;
    margin-left: 120px;
`;

export const CategoryButton = styled.button`
    padding: 15px 15px; /* Aumenta o tamanho dos botões para uma aparência mais consistente */
    border: none;
    border-radius: 5px;
    font-size: 14px; /* Texto um pouco maior */
    background-color: rgb(0, 4, 255);
    border: 1px solid rgb(0, 245, 192);
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: rgb(0, 245, 192);
        border: 1px solid rgb(0, 4, 255);
        color: rgb(0, 4, 255);
    }
`;

