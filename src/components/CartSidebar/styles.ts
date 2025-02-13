    import styled from "styled-components";


    export const SidebarContainer = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    right: 0;
    width: 700px;
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
    overflow-x: hidden; /* Impede a barra de rolagem lateral */

    @media (max-width: 768px) {
        width: 330px;
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
    font-size: 18px;
    margin-top: 20px;
    color: white;
    `;

export const CartList = styled.div`
    flex: 1;
    overflow-y: auto;
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 100%;
    overflow-x: hidden; /* Garante que nada vaze horizontalmente */

    @media (max-width: 480px) {
        overflow-x: hidden;
    }
`;

export const CartItem = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 0;
    border-bottom: 1px solid rgb(0, 245, 192);
    font-size: 14px;
    position: relative;
    width: 100%;
    overflow-x: hidden;

    @media (max-width: 480px) {
        font-size: 12px;
        gap: 6px;
        padding: 6px 0;
    }
`;

export const ItemImage = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 8px;
    object-fit: cover;

    @media (max-width: 480px) {
        width: 45px;
        height: 45px;
    }
`;

export const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    color: white;
    font-size: 14px;

    @media (max-width: 480px) {
        font-size: 12px;
    } 
`;

    export const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;
    `;

export const QuantityWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    @media (max-width: 480px) {
        gap: 6px;
    }
`;

export const QuantityControl = styled.div`
display: flex;
align-items: center;
gap: 8px;
margin-right: 210px;

button {
    padding: 6px 12px;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: white;
    font-weight: bold;
    transition: all 0.3s ease;

    &:hover {
        background: rgb(0, 245, 192);
        color: rgb(0, 4, 255);
    }

    @media (max-width: 480px) {
        padding: 4px 8px;
        font-size: 12px;
    }
}
`;

export const RemoveButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    color: red;
    font-size: 8px;
    cursor: pointer;

    img {
        width: 30px;
        height: 30px;
        transition: transform 0.2s ease-in-out;
    }

    &:hover {
        transform: scale(1.1);
    }

    @media (max-width: 480px) {
        top: 5px;
        right: 5px;
        img {
            width: 20px;
            height: 20px;
        }
    }
`;
    export const Footer = styled.div`
    border-top: 1px solid rgb(0, 245, 192);
    padding-top: 16px;
    text-align: center;
    `;

    export const TotalText = styled.p`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
    color: white;
    `;

    export const CheckoutButton = styled.button`
    padding: 10px 15px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    color: white;
    font-weight: 600;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
    overflow: hidden;
    margin-bottom: 50px;
    border: none;

    &::before {
        content: '';
    position: absolute;
    inset: 0;
    margin: auto;
    width: 90px;
    height: 15px;
    border-radius: inherit;
    scale: 0;
    z-index: -1;
    background-color: rgb(0, 245, 192);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
    }

    &:hover::before {
        scale: 3;
        background-color: rgb(0, 245, 192);
        color: rgb(0, 4, 255);
    }

    &:hover {
        color: rgb(0, 4, 255);
        scale: 1.1;
    }

    &:active {
        scale: 1;
    }
    `;

    export const EmptyCartMessage = styled.p`
    text-align: center;
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
    `;

export const TitlePriceWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 8px;
    overflow-x: hidden; /* Impede estouros */

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
    }
`;

export const ProductTitle = styled.p`
    font-size: 16px;
    font-weight: bold;
    color: white;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 80%;

    @media (max-width: 480px) {
        font-size: 14px;
        max-width: 120px;
    }
`;

export const ProductPrice = styled.p`
    font-size: 14px;
    font-weight: bold;
    color: rgb(0, 245, 192);
    white-space: nowrap; /* Evita que o preço quebre linha */

    @media (max-width: 480px) {
        font-size: 12px;
    }
`;