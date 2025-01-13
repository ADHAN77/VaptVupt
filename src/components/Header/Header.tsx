import React from "react";
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

const Header: React.FC = () => {
    const handleExit = () => {
        window.location.href = "/"; // Redireciona para a página de login
    };

    return (
        <HeaderContainer>
            <div className="inner-container">
                {/* Exit (Desktop) / Menu (Mobile) */}
                <ExitIcon onClick={handleExit}>
                    <img src={Exit} alt="Sair" />
                </ExitIcon>
                <MenuIcon>
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
        </HeaderContainer>
    );
};

export default Header;
