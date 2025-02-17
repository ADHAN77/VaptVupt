import { useState } from "react";
import Seguranca from "./Seguranca/Seguranca";
import Informacoes from "./Informacoes/InformacoesPessoais";
import MeusPedidos from "./Pedidos/MeusPedidos";
import { Container, Sidebar, Content, MenuItem } from "./styles";
import segurancaIcon from "../../assets/icons/seguranca.png";
import informacoesIcon from "../../assets/icons/informacoes.png";
import pedidosIcon from "../../assets/icons/compras.png";

const PerfilSidebar = () => {
    const [activeTab, setActiveTab] = useState<string>("Meus Pedidos");

    const renderContent = () => {
        switch (activeTab) {
            case "Segurança":
                return <Seguranca />;
            case "Informações Pessoais":
                return <Informacoes />;
            case "Meus Pedidos":
                return <MeusPedidos />;
            default:
                return <MeusPedidos />;
        }
    };

    return (
        <Container>
            <Sidebar>
                <MenuItem
                    active={activeTab === "Meus Pedidos"}
                    onClick={() => setActiveTab("Meus Pedidos")}
                >
                    <img src={pedidosIcon} alt="Meus Pedidos" />
                    Meus Pedidos
                </MenuItem>
                <MenuItem
                    active={activeTab === "Informações Pessoais"}
                    onClick={() => setActiveTab("Informações Pessoais")}
                >
                    <img src={informacoesIcon} alt="Informações Pessoais" />
                    Informações Pessoais
                </MenuItem>
                <MenuItem
                    active={activeTab === "Segurança"}
                    onClick={() => setActiveTab("Segurança")}
                >
                    <img src={segurancaIcon} alt="Segurança" />
                    Segurança
                </MenuItem>
            </Sidebar>
            <Content>{renderContent()}</Content>
        </Container>
    );
};

export default PerfilSidebar;
