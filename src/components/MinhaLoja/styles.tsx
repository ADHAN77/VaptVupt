import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
    }
`;

export const Sidebar = styled.nav`
    width: 200px;
    background-color: rgb(0, 4, 255);
    display: flex;
    flex-direction: column;
    padding: 20px;
    z-index: 9999; /* Garante que a sidebar fique sempre acima de tudo */
    height: 1080px;

    @media (max-width: 768px) {
        width: 100%;
        flex-direction: row;
        justify-content: space-around;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 10px;
        box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.2); /* Adiciona um leve sombreado para destaque */
        height: 88px;
    }
`;

export const MenuItem = styled.button<{ active: boolean }>`
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid ${({ active }) => (active ? "rgb(0, 245, 192)" : "rgb(0, 4, 255)")};
    background-color: rgb(0, 4, 255);
    color: #fff;
    padding: 10px 20px;
    text-align: left;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    margin-bottom: 10px;
    transition: 0.3s;

    img {
        width: 24px;
        height: 24px;
        display: block;
    }

    &:hover {
        border: 1px solid rgb(0, 245, 192);
    }

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        font-size: 14px;
        margin-bottom: 0;
    }
`;

export const Content = styled.div`
    flex: 1;
    padding: 20px;
    background: #ecf0f1;

    @media (max-width: 768px) {
        padding-bottom: 60px; /* Evita que o conteúdo fique atrás da barra inferior */
    }
`;
