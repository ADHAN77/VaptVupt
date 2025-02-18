import React from "react";
import { Container } from "./styles";
import Pedidos from "./Pedidos";
import ResumoVendas from "./ResumoVendas";
import TabelaVendas from "./TabelaVendas";
import HistoricoVendas from "./HistoricoVendas";

const Vendas: React.FC = () => {
    return (
        <Container>
            <Pedidos />
            <ResumoVendas />
            <TabelaVendas />
            <HistoricoVendas />
        </Container>
    );
};

export default Vendas;
