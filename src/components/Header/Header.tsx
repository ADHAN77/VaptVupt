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
import OptionsSidebar from "../../components/OptionsSideBar/OptionsSideBar";
import CartSidebar from "../../components/CartSidebar/CartSidebar"; // Importando a Sidebar do Carrinho

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false); // Estado do carrinho

    const handleExit = () => {
        window.location.href = "/";
    };

    const handleMenuToggle = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    const handleOptionsToggle = () => {
        setIsOptionsOpen((prevState) => !prevState);
    };

    const handleCartToggle = () => {
        setIsCartOpen((prevState) => !prevState);
    };

    return (
        <HeaderContainer>
            <div className="inner-container">
                <ExitIcon onClick={handleExit}>
                    <img src={Exit} alt="Sair" />
                </ExitIcon>
                <MenuIcon onClick={handleMenuToggle}>
                    <img src={Menu} alt="Menu" />
                </MenuIcon>

                <img src={logo} alt="Logo" style={{ height: "40px" }} />

                <RightIcons>
                    <CartIcon onClick={handleCartToggle}>
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
            onCategorySelect={(category) => console.log(category)} // Corrigindo o erro
            />
            <OptionsSidebar isOpen={isOptionsOpen} toggleSidebar={handleOptionsToggle} />
            <CartSidebar isOpen={isCartOpen} onClose={handleCartToggle} /> {/* Sidebar do carrinho */}
        </HeaderContainer>
    );
};

export default Header;
