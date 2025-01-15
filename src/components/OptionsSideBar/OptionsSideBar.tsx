import React from "react";
import {
    SidebarContainer,
    SidebarOverlay,
    SidebarContent,
    CloseButton,
    Title,
    OptionItem,
    MobileOnlyOption,
} from "./styles";
import CloseIcon from "../../assets/icons/fechar.png"; // Ícone de fechar
import { useNavigate } from "react-router-dom"; // Importação para navegação

interface OptionsSidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const OptionsSidebar: React.FC<OptionsSidebarProps> = ({ isOpen, toggleSidebar }) => {
    const navigate = useNavigate();

    const handleOptionClick = (option: string) => {
        if (option === "Perfil") {
            navigate("/perfil"); // Redireciona para a página de perfil
        } else if (option === "Minha Loja") {
            navigate("/minha-loja"); // Substitua pelo caminho correto, se necessário
        } else if (option === "Suporte") {
            navigate("/suporte"); // Substitua pelo caminho correto, se necessário
        } else if (option === "Sair da Conta") {
            window.location.href = "/"; // Redireciona para a página de login
        }
    };

    return (
        <>
            {/* Overlay para fechar o sidebar */}
            {isOpen && <SidebarOverlay onClick={toggleSidebar} />}
            
            {/* Sidebar */}
            <SidebarContainer isOpen={isOpen}>
                <CloseButton onClick={toggleSidebar}>
                    <img src={CloseIcon} alt="Fechar" />
                </CloseButton>
                <Title>Configurações</Title>
                <SidebarContent>
                    <OptionItem onClick={() => handleOptionClick("Perfil")}>
                        Perfil
                    </OptionItem>
                    <OptionItem onClick={() => handleOptionClick("Minha Loja")}>
                        Minha Loja
                    </OptionItem>
                    <OptionItem onClick={() => handleOptionClick("Suporte")}>
                        Suporte
                    </OptionItem>
                    {/* Sair da Conta exibido apenas no mobile */}
                    <MobileOnlyOption onClick={() => handleOptionClick("Sair da Conta")}>
                        Sair da Conta
                    </MobileOnlyOption>
                </SidebarContent>
            </SidebarContainer>
        </>
    );
};

export default OptionsSidebar;
