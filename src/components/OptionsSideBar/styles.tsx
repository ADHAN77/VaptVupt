import styled from "styled-components";

export const SidebarContainer = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    height: 100vh;
    background-color: rgb(0, 4, 255);
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
    transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease-in-out;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    padding: 20px;
    color: white;

    @media (max-width: 768px) {
        width: 250px;
    }
`;

export const SidebarOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
`;

export const CloseButton = styled.button`
    align-self: flex-end;
    background: none;
    border: none;
    cursor: pointer;
    img {
        width: 24px;
        height: 24px;
        transition: transform 0.2s ease-in-out;
    }

    &:hover img {
        transform: scale(1.2);
    }
`;

export const Title = styled.h2`
    margin: 20px 0;
    font-size: 18px;
    color: white;
`;

export const SidebarContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const OptionItem = styled.div`
    padding: 10px 15px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    color: white;
    transition: background 0.2s;

    &:hover {
        background-color: rgb(0, 245, 192);
        color: rgb(0, 4, 255);
    }
`;

// Estilo para exibir opções apenas no mobile
export const MobileOnlyOption = styled(OptionItem)`
    @media (min-width: 769px) {
        display: none;
    }
`;