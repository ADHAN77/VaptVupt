import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
    `;

export const CategoriaH1 = styled.h1`
    margin-bottom: 10px;
    text-align: center;

    @media (max-width: 480px) {
        text-align: center;
        display: flex;
        margin-left: 18px;
    }
`

export const SearchBar = styled.div`
    margin-bottom: 20px;
    width: 100%;

    input {
        width: 100%;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
        box-sizing: border-box;
    }

    @media (max-width: 480px) {
margin-left: 8px;
    }
`;

export const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin: 0 auto 30px;
    width: 100%;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        width: 90%;
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
        width: 100%;
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
    height: 100%;

    @media (max-width: 480px) {
        width: 340px; /* Aumenta a largura do card no mobile */
    }
`;

export const Image = styled.img`
    width: 240px;
    height: 240px;
    object-fit: cover;
    border-radius: 10px;
    margin: 0 auto 15px;
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
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    padding: 20px;
    height: 300px;

    .image {
        background-color: #e0e0e0;
        height: 250px;
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
