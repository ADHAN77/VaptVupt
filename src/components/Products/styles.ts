import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;

    h1 {
        margin-bottom: 10px;
        text-align: center;
    }
`;

export const SearchBar = styled.div`
    margin-bottom: 20px;

    input {
        width: 100%;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
        margin-left: 4px
    }
`;

export const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px; /* Reduzimos o espaço entre os cards */
    margin-left: 10px;
    margin-bottom: 30px;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;

export const Card = styled.div`
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%; /* Garante que o card ocupe toda a altura disponível */
`;

export const Image = styled.img`
    width: 240px;
    height: 240px;
    object-fit: cover; /* Garante que a imagem seja cortada para preencher a área definida */
    border-radius: 10px;
    margin: 0 auto 15px; /* Centraliza horizontalmente e adiciona espaçamento inferior */
`;

export const Info = styled.div`
    text-align: center;

    h3 {
        margin: 0 0 10px;
        font-size: 20px;
    }

    p {
        font-size: 18px;
        font-weight: bold;
        margin: 0 0 10px;
    }
`;

export const Description = styled.p`
    font-size: 16px;
    color: #555;
    margin-bottom: 15px;
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
`;

export const BuyButton = styled.button`
    flex: 1;
    background-color: rgb(0, 4, 255);
    border: 1px solid rgb(0, 245, 192);
    color: white;
    padding: 10px 15px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: rgb(0, 245, 192);
        color: rgb(0, 4, 255);
        border: 1px solid rgb(0, 4, 255);
    }
`;

export const CartButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: rgb(0, 4, 255);
    border: 1px solid rgb(0, 245, 192);
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: rgb(0, 245, 192);
        border: 1px solid rgb(0, 4, 255);
    }

    img {
        width: 20px;
        height: 20px;
    }
`;

export const NoProducts = styled.div`
    text-align: center;
    font-size: 18px;
    color: #777;
    margin-top: 20px;
`;

export const Placeholder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color:rgb(255, 255, 255);
    border-radius: 10px;
    padding: 20px;
    height: 300px; /* Aumenta o tamanho do placeholder */

    .image {
        background-color: #e0e0e0;
        height: 250px; /* Ajusta a altura da imagem no placeholder */
        border-radius: 10px;
        margin-bottom: 15px;
    }

    .text {
        background-color: #d0d0d0;
        height: 20px;
        border-radius: 5px;
        margin-bottom: 10px;
    }

    .button {
        background-color: #c0c0c0;
        height: 40px;
        border-radius: 5px;
    }
`;
