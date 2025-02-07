import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import styled from "styled-components";

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
    // Adicione mais dias conforme necessário
];

const ChartContainer = styled.div`
    width: 100%;
    height: 400px;
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const SalesChart: React.FC = () => {
    return (
        <ChartContainer>
            <h3>Vendas no Mês</h3>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="sales" stroke="rgb(0, 4, 255)" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </ChartContainer>
    );
};

export default SalesChart;
