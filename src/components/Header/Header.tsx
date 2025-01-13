import React from "react";
import { HeaderContainer, MenuIcon, CartIcon } from "./styles";
import Menu from "../../assets/icons/menu.png";
import Cart from "../../assets/icons/cart.png";
import logo from "../../assets/VaptVupt-Logo.png";

const Header: React.FC = () => {
    return (
        <>
            <HeaderContainer>
                <div className="inner-container">
                    {/* Menu Hamburguer */}
                    <MenuIcon>
                    <img src={Menu} alt="Menu" />
                    </MenuIcon>

                    {/* Logo */}
                    <img src={logo} alt="Logo" style={{ height: "40px" }} />

                    {/* Ícone de perfil */}
                    <CartIcon>
                    <img src={Cart} alt="Carrinho" />
                    </CartIcon>
                </div>
            </HeaderContainer>
        </>
    );
};

export default Header;