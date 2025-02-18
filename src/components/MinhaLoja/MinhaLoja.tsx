import React, { useState, useEffect } from "react";
import Vitrine from "./MinhaVitrine/MinhaVitrine";
import Produtos from "./Produtos/Produtos";
import Vendas from "./Vendas/Vendas";
import { Container, Sidebar, Content, MenuItem } from "./styles";
import vitrine from "../../assets/icons/vitrine.png";
import produtos from "../../assets/icons/produtos.png";
import vendas from "../../assets/icons/vendas.png";

const MinhaLoja: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>("Vendas");

    // Sempre rola para o topo quando a aba mudar
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activeTab]);

    const renderContent = () => {
        switch (activeTab) {
            case "Vitrine":
                return <Vitrine />;
            case "Produtos":
                return <Produtos />;
            case "Vendas":
                return <Vendas />;
            default:
                return <Vendas />;
        }
    };

    return (
        <Container>
            <Sidebar>
                <MenuItem
                    active={activeTab === "Vitrine"}
                    onClick={() => setActiveTab("Vitrine")}
                >
                    <img src={vitrine} alt="vitrine" />
                    Vitrine
                </MenuItem>
                <MenuItem
                    active={activeTab === "Produtos"}
                    onClick={() => setActiveTab("Produtos")}
                >
                    <img src={produtos} alt="produtos" />
                    Produtos
                </MenuItem>
                <MenuItem
                    active={activeTab === "Vendas"}
                    onClick={() => setActiveTab("Vendas")}
                >
                    <img src={vendas} alt="vendas" />
                    Vendas
                </MenuItem>
            </Sidebar>
            <Content>{renderContent()}</Content>
        </Container>
    );
};

export default MinhaLoja;