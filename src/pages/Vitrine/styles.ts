import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center; /* Centraliza os elementos horizontalmente */
    
    @media (max-width: 480px) {
        background-color: rgb(0, 4, 255);
        color: #fff;
    }
`;

export const StoreHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
    border-bottom: 2px solid #ddd;
    padding-bottom: 15px;
    justify-content: center; /* Garante que a logo e as informações fiquem centralizadas */
`;

export const StoreLogo = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    background-color: #ddd;

    @media (max-width: 480px) {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-bottom: 110px;
    }
`;

export const StoreInfo = styled.div`
    display: flex;
    flex-direction: column;

    h2 {
        margin: 0;
        font-size: 22px;
    }

    p {
        margin: 5px 0;
        font-size: 14px;

        @media (max-width: 480px) {
            color: #fff;
        }
    }
`;

export const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin: 0 auto 30px;
    width: 100%;
    
    /* Centraliza o conteúdo da grid */
    justify-items: center; 

    @media (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(2, 1fr); /* Agora exibe 2 cards por linha */
        width: 100%;
    }
`;

export const Card = styled.div`
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: auto;
    cursor: pointer;
    transition: box-shadow 0.3s ease-in-out, transform 0.2s ease-in-out;
    width: 100%;

    &:focus {
        outline: none; /* Remove o outline do card quando ele recebe foco */
        box-shadow: none; /* Remove o box-shadow quando o card recebe foco */
    }

    &:active {
        background-color: rgb(255, 255, 255); /* Mantém o fundo normal ao clicar */
    }

    &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
        transform: translateY(-3px);
    }
`;

export const Image = styled.img`
    width: 100%;
    max-height: 180px; /* Reduz um pouco a altura para evitar que o card fique muito comprido */
    object-fit: contain; /* Garante que a imagem inteira seja visível dentro do espaço */
    border-radius: 10px;
`;

export const Info = styled.div`
    margin-top: 10px;
    text-align: center; /* Centraliza o conteúdo dentro do card */
`;

export const Title = styled.h3`
    font-size: 18px;
    font-weight: bold;
    color: #333;
    width: 100%;
    max-height: 48px; /* Altura para garantir o corte */
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

export const Description = styled.p`
    font-size: 14px;
    color: #666;
    margin-top: 5px;
    width: 100%;
    max-height: 40px; /* Altura fixa para impedir overflow */
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

export const Buttons = styled.div`
    display: flex;
    gap: 10px; /* Adiciona espaço entre os botões */
    margin-top: 10px; /* Se necessário, você pode adicionar uma margem superior */
`;

export const BuyButton = styled.button`
    flex: 1;
    background-color: rgb(0, 4, 255);
    border: 1px solid rgb(0, 245, 192);
    color: white;
    padding: 8px 10px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition-duration: 0.2s;

    &:hover {
        background-color: rgb(0, 245, 192);
        color: rgb(0, 4, 255);
        border: 1px solid rgb(0, 4, 255);
        transform: translateY(-5px);
    }

    &:active {
        transform: translateY(2px);
    }
`;

export const CartButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    background-color: rgb(0, 4, 255);
    border: 1px solid rgb(0, 245, 192);
    border-radius: 5px;
    cursor: pointer;
    transition-duration: 0.2s;

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

export const CategoriaH2 = styled.h2`
    margin-bottom: 10px;
    text-align: center;

    @media (max-width: 480px) {
        margin-left: 0; /* Ajuste o alinhamento para o celular */
    }
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;


export const ModalContent = styled.div`
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
    
    export const SelectContainer = styled.div`
        display: flex;
        gap: 10px;
        justify-content: center;
        align-items: center;
        margin: 10px 0;
        width: 100%;
        
        @media (max-width: 480px) {
            display: flex;
            flex-direction: row; /* Mantém os itens lado a lado */
            justify-content: center; /* Centraliza na tela */
            align-items: center;
            color: #666;
        }
    `;

export const SelectLabel = styled.label`
    font-size: 14px;
    text-align: left;
    font-weight: bold;
`;

export const QuantitySelect = styled.select`
    width: 80px;
    padding: 6px;
    text-align: center;
    border-radius: 5px;
    border: 1px solid #ccc;
`;

export const SizeSelect = styled.select`
    width: 80px;
    padding: 6px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
`;