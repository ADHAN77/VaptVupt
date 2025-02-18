import React from "react";
import { SalesHistoryContainer, SalesHistoryTitle, SalesHistoryList, SalesHistoryItem } from "./styles";

// Dados fictícios para o histórico de vendas
const salesHistory = [
    { id: 1, product: "Smartphone X", quantity: 2, date: "10/02/2025" },
    { id: 2, product: "Notebook Pro", quantity: 1, date: "09/02/2025" },
    { id: 3, product: "Tênis Esportivo", quantity: 3, date: "08/02/2025" },
];

const HistoricoVendas: React.FC = () => {
    return (
        <SalesHistoryContainer>
            <SalesHistoryTitle>Histórico de Vendas</SalesHistoryTitle>
            <SalesHistoryList>
                {salesHistory.map((item) => (
                    <SalesHistoryItem key={item.id}>
                        {item.quantity}x {item.product} - {item.date}
                    </SalesHistoryItem>
                ))}
            </SalesHistoryList>
        </SalesHistoryContainer>
    );
};

export default HistoricoVendas;
