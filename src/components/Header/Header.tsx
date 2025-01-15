import React, { useState } from "react";
import {
    HeaderContainer,
    MenuIcon,
    ExitIcon,
    CartIcon,
    SettingsIcon,
    RightIcons,
} from "./styles";
import Menu from "../../assets/icons/menu.png";
import Cart from "../../assets/icons/cart.png";
import Exit from "../../assets/icons/exit.png";
import Settings from "../../assets/icons/opcoes.png";
import logo from "../../assets/VaptVupt-Logo.png";
import MobileSidebar from "../../components/MobileSidebar/MobileSideBar";
import OptionsSidebar from "../../components/OptionsSideBar/OptionsSideBar"; // Importando o novo componente

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para o menu de categorias
    const [isOptionsOpen, setIsOptionsOpen] = useState(false); // Estado para o menu de opções

    const handleExit = () => {
        window.location.href = "/"; // Redireciona para a página de login
    };

    const handleMenuToggle = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    const handleOptionsToggle = () => {
        setIsOptionsOpen((prevState) => !prevState);
    };

    return (
        <HeaderContainer>
            <div className="inner-container">
                {/* Exit (Desktop) / Menu (Mobile) */}
                <ExitIcon onClick={handleExit}>
                    <img src={Exit} alt="Sair" />
                </ExitIcon>
                <MenuIcon onClick={handleMenuToggle}>
                    <img src={Menu} alt="Menu" />
                </MenuIcon>

                {/* Logo */}
                <img src={logo} alt="Logo" style={{ height: "40px" }} />

                {/* Ícones à direita: Carrinho e Configurações */}
                <RightIcons>
                    <CartIcon>
                        <img src={Cart} alt="Carrinho" />
                    </CartIcon>
                    <SettingsIcon onClick={handleOptionsToggle}>
                        <img src={Settings} alt="Configurações" />
                    </SettingsIcon>
                </RightIcons>
            </div>

            {/* Sidebars */}
            <MobileSidebar
                isOpen={isMenuOpen}
                toggleSidebar={handleMenuToggle}
                onCategorySelect={(category) => console.log(category)} // Ação ao selecionar categoria
            />
            <OptionsSidebar isOpen={isOptionsOpen} toggleSidebar={handleOptionsToggle} />
        </HeaderContainer>
    );
};

export default Header;
