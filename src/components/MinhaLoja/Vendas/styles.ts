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
