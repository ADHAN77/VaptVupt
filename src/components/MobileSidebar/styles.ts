import styled from "styled-components";

// Menu Overlay
export const MenuOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 5;
`;

// Sidebar
export const Sidebar = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100vh;
    background-color: rgb(0, 4, 255); /* Azul de fundo */
    padding: 20px;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
    transform: ${(props) => (props.isOpen ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 0.3s ease-in-out;
    z-index: 10;

    /* Responsividade para a sidebar */
    @media (max-width: 768px) {
        width: 250px;
    }
`;

// Título
export const Title = styled.h2`
    color: white;
    font-size: 18px;
    margin-top: 50px;
    margin-bottom: 20px;
`;

export const IconWrapper = styled.div`
    width: 24px;
    height: 24px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

// Categoria (texto, não botão)
export const CategoryButton = styled.div`
    display: flex; /* Alinha ícone e texto horizontalmente */
    align-items: center; /* Alinha verticalmente no centro */
    color: white;
    font-size: 16px;
    margin: 10px 0;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
        color: rgb(0, 245, 192);
    }

    /* Espaço entre ícone e texto */
    ${IconWrapper} {
        margin-right: 10px;
    }
`;


// Lista de Subcategorias
export const SubcategoryList = styled.ul`
    margin: 0;
    padding: 10px;
    list-style: none;
    background-color: rgb(0, 4, 255);
    border-radius: 5px;
    border: 1px solid rgb(0, 245, 192);
`;

// Item da Subcategoria
export const SubcategoryItem = styled.li`
    color: white;
    padding: 5px 10px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: rgb(0, 245, 192);
        color: rgb(0, 4, 255);
        border-radius: 5px;
    }
`;

export const CategoryWrapper = styled.div`
    margin-bottom: 20px;
`;


export const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    
    img {
        width: 24px;
        height: 24px;
        transition: transform 0.2s ease-in-out;
    }
`;