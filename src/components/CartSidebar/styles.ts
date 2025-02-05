    import styled from "styled-components";

    export const SidebarContainer = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    right: 0;
    width: 500px;
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
    `;

    export const ItemImage = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 8px;
    object-fit: cover;
    `;

    export const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1; /* Faz ocupar o espaço entre a imagem e os controles */
    color: white;
    font-size: 14px;
    `;

    export const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;
    `;

    export const QuantityWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
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
    margin-top: 16px;
    img {
        width: 30px;
        height: 30px;
        transition: transform 0.2s ease-in-out;
    }

    &:hover {
        transform: scale(1.1);
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
