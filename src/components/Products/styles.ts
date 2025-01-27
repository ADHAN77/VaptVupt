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
        margin-left: 5px;
        width: 340px;
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
    cursor: pointer;
    transition: box-shadow 0.3s ease-in-out, transform 0.2s ease-in-out;

    &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
        transform: translateY(-3px);
    }

    @media (max-width: 480px) {
        width: 340px;
        margin-left: 5px;
    }
`;

export const Title = styled.h3`
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    height: 50px; /* Altura fixa para manter os títulos alinhados */
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* Limita a 2 linhas */
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`;

export const Image = styled.img`
    width: 240px;
    height: 240px;
    object-fit: cover;
    border-radius: 10px;
    margin: 0 auto 15px;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;

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
    font-size: 14px;
    text-align: center;
    height: 40px; /* Altura fixa para alinhar as descrições */
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* Limita a 2 linhas */
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
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
    transform: all 1s esase;
    transition-duration: .2s;

    &:hover {
        transform: translateY(-5px);
        background-color: rgb(0, 245, 192);
        color: rgb(0, 4, 255);
        border: 1px solid rgb(0, 4, 255);
    }

    &:active {
        transform: translateY(2px);
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
    transform: all 1s esase;
    transition-duration: .2s;

    &:hover {
        background-color: rgb(0, 245, 192);
        border: 1px solid rgb(0, 4, 255);
        transform: translateY(-5px);
    }

    &:active {
        transform: translateY(2px);
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

// Estilos do Modal
export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const Modal = styled.div`
    background-color: white;
    padding: 20px;
    width: 90%;
    max-width: 500px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;

    h2 {
        margin-bottom: 5px;
    }

    p {
        margin-bottom: 5px;
    }
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
`;

export const QuantityInput = styled.input`
    width: 60px;
    padding: 6px;
    text-align: center;
    border-radius: 5px;
    border: 1px solid #ccc;
`

export const SizeSelect = styled.select`
    padding: 5px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
`;

export const OptionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 15px;
    width: 100%;
    margin-top: 10px;
`;

export const OptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;