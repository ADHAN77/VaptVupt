import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import {
    Container,
    SummaryPanel,
    SummaryItem,
    ChartContainer,
    SalesHistoryContainer,
    SalesHistoryTitle,
    SalesHistoryList,
    SalesHistoryItem,
} from "./styles";

// Dados fictícios para o gráfico de vendas
const data = [
    { day: "01", sales: 10 },
    { day: "02", sales: 15 },
    { day: "03", sales: 7 },
    { day: "04", sales: 20 },
    { day: "05", sales: 12 },
    { day: "06", sales: 30 },
    { day: "07", sales: 25 },
    { day: "08", sales: 18 },
    { day: "09", sales: 22 },
    { day: "10", sales: 19 },
];

// Dados fictícios para o histórico de vendas
const salesHistory = [
    { id: 1, product: "Smartphone X", quantity: 2, date: "10/02/2025" },
    { id: 2, product: "Notebook Pro", quantity: 1, date: "09/02/2025" },
    { id: 3, product: "Tênis Esportivo", quantity: 3, date: "08/02/2025" },
];

const SalesDashboard: React.FC = () => {
    return (
        <Container>
            {/* Painel de Resumo */}
            <SummaryPanel>
                <SummaryItem>
                    <strong>R$ 12.500</strong>
                    <span>Total de Vendas</span>
                    <span>📦 150 pedidos</span>
                </SummaryItem>

                <SummaryItem>
                    <strong>R$ 3.200</strong>
                    <span>Vendas do Mês</span>
                    <span>📦 40 pedidos</span>
                </SummaryItem>

                <SummaryItem>
                    <strong>R$ 890</strong>
                    <span>Vendas na Semana</span>
                    <span>📦 12 pedidos</span>
                </SummaryItem>
            </SummaryPanel>

            {/* Gráfico de Vendas */}
            <ChartContainer>
                <h3>Vendas no Mês</h3>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="sales" stroke="rgb(0, 245, 192)" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </ChartContainer>

            {/* Histórico de Vendas */}
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
        </Container>
    );
};

export default SalesDashboard;
