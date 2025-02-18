import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 15px; /* Aumenta o espaçamento entre os containers */

    @media (max-width: 768px) {
        padding: 15px; /* Reduz o padding no mobile */
        gap: 10px;
    }
`;

export const SummaryPanel = styled.div`
    display: flex;
    justify-content: space-between;
    background: #fff;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    gap: 15px; /* Mantém espaço entre os itens */

    @media (max-width: 768px) {
        flex-wrap: wrap; /* Permite que os itens quebrem linha se necessário */
        justify-content: center; /* Centraliza os itens */
        padding: 10px;
    }
`;

export const SummaryItem = styled.div`
    text-align: center;
    font-size: 16px; /* Tamanho ajustado */
    font-weight: bold;
    color: rgb(0, 4, 255);
    flex: 1; /* Faz os itens ocuparem o mesmo espaço */

    span {
        display: block;
        font-size: 14px;
        font-weight: normal;
        color: #666;
    }

    @media (max-width: 768px) {
        font-size: 14px;
        span {
            font-size: 8px;
        }
    }
`;

export const ChartContainer = styled.div`
    width: 100%;
    height: 400px;
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

    @media (max-width: 768px) {
        height: 250px; /* Ajusta altura no mobile */
        padding: 15px;
    }
`;

export const SalesHistoryContainer = styled.div`
    background: #fff;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    margin-bottom: 50px;

    @media (max-width: 768px) {
        padding: 10px; /* Reduz padding no mobile */
    }
`;

export const SalesHistoryTitle = styled.h3`
    margin-bottom: 10px;
    color: rgb(0, 4, 255);
    font-size: 18px; /* Reduz tamanho da fonte */

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const SalesHistoryList = styled.ul`
    list-style: none;
    padding: 0;
`;

export const SalesHistoryItem = styled.li`
    padding: 10px;
    border-bottom: 1px solid #ddd;
    font-size: 14px; /* Reduz tamanho da fonte */

    &:last-child {
        border-bottom: none;
    }

    @media (max-width: 768px) {
        font-size: 12px;
        padding: 8px;
    }
`;

export const OrdersPanel = styled.div`
    width: 100%;
    margin-bottom: 20px;
    padding: 15px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const OrderCard = styled.div`
    display: flex;
    flex-direction: row; /* No desktop a direção é linha */
    justify-content: space-between; /* Alinha os itens com espaçamento no desktop */
    background: #f8f8f8;
    padding: 10px;
    border-radius: 8px;
    margin-top: 10px;

    img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 5px;
    }

    p {
        flex: 1;
    }

    @media (max-width: 768px) {
        flex-direction: column; /* No celular muda para coluna */
        height: auto; /* Deixa a altura automática no celular */
        justify-content: flex-end; /* Coloca os botões e inputs na parte inferior */
    }
`;


export const OrderButton = styled.button`
    padding: 8px 12px;
    border: none;
    background-color: #00c851;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    width: 100%; /* Faz com que o botão ocupe toda a largura disponível no celular */

    &:hover {
        background-color: #009432;
    }

    @media (min-width: 769px) {
        width: auto; /* No desktop o botão fica com largura automática */
    }
`;

export const CodeInput = styled.input`
    padding: 6px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%; /* Faz com que o input ocupe toda a largura disponível no celular */
    margin-bottom: 10px; /* Espaço entre o input e o botão */
    margin-right: 8px;
    margin-top: 10px;

    @media (min-width: 769px) {
        width: auto; /* No desktop o input fica com largura automática */
    }
`;


export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000; /* Garante que a modal fique na frente de tudo */
`;

export const ModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 400px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    position: relative;
    z-index: 1001; /* Maior que o overlay para garantir visibilidade */
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
`;