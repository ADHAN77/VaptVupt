import styled from "styled-components";

// Estilos do container do cabeçalho
export const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    background-color: rgb(0, 4, 255);
    color: #fff;
    z-index: 1000;

    /* Media query para dispositivos móveis */
    @media (max-width: 768px) {
        height: 50px;
        padding: 0 10px;

        .inner-container {
            flex-direction: row;
        }
    }
`;

// Estilo para o ícone do menu hamburguer
export const MenuIcon = styled.div`
    width: 24px;
    height: 24px;
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        transition: transform 0.3s ease;
    }

    &:hover img {
        transform: scale(1.2); /* Aumenta o tamanho em 20% ao passar o mouse */
    }

    @media (max-width: 768px) {
        width: 20px;
        height: 20px;
    }
`;

export const Logo = styled.img`
    height: 40px;
    object-fit: contain;

    @media (max-width: 768px) {
        height: 30px;
    }
`;

// Estilo para o ícone do carrinho
export const CartIcon = styled.div`
    width: 24px;
    height: 24px;
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        transition: transform 0.3s ease;
    }

    &:hover img {
        transform: scale(1.2); /* Aumenta o tamanho em 20% ao passar o mouse */
    }

    @media (max-width: 768px) {
        width: 20px;
        height: 20px;
    }
`;
