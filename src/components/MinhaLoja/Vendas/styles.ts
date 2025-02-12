import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 10px;
`;

export const SummaryPanel = styled.div`
    display: flex;
    justify-content: space-between;
    background: #fff;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

export const SummaryItem = styled.div`
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: rgb(0, 4, 255);

    span {
        display: block;
        font-size: 16px;
        font-weight: normal;
        color: #666;
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
        height: 200px; /* Reduz altura no mobile */
    }
`;

export const SalesHistoryContainer = styled.div`
    background: #fff;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

export const SalesHistoryTitle = styled.h3`
    margin-bottom: 10px;
    color: rgb(0, 4, 255);
`;

export const SalesHistoryList = styled.ul`
    list-style: none;
    padding: 0;
`;

export const SalesHistoryItem = styled.li`
    padding: 10px;
    border-bottom: 1px solid #ddd;
    
    &:last-child {
        border-bottom: none;
    }
`;
