import React from "react";
import { ChartContainer } from "./styles";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

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

const TabelaVendas: React.FC = () => {
    return (
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
    );
};

export default TabelaVendas;
