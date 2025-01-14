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
import MobileSidebar from "../../components/MobileSidebar/MobileSideBar"; // Importando o MobileSidebar

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar a visibilidade do menu

    const handleExit = () => {
        window.location.href = "/"; // Redireciona para a página de login
    };

    const handleMenuToggle = () => {
        setIsMenuOpen((prevState) => !prevState); // Alterna a visibilidade do menu
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
                    <SettingsIcon>
                        <img src={Settings} alt="Configurações" />
                    </SettingsIcon>
                </RightIcons>
            </div>

            {/* Exibe o MobileSidebar quando o menu for clicado */}
            <MobileSidebar 
                isOpen={isMenuOpen} 
                toggleSidebar={handleMenuToggle} 
                onCategorySelect={(category) => console.log(category)} // Ação ao selecionar categoria
            />
        </HeaderContainer>
    );
};

export default Header;
