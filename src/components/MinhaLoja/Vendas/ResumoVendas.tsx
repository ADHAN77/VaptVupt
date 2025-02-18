import React from "react";
import { SummaryPanel, SummaryItem } from "./styles";

const ResumoVendas: React.FC = () => {
    return (
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
    );
};

export default ResumoVendas;
