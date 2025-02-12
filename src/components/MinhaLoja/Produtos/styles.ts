import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
`;

export const Title = styled.h2`
    text-align: center;
    color: #333;
    margin-bottom: 20px;
`;

export const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
`;

export const ProductCard = styled.div`
    background: white;
    border-radius: 10px;
    padding: 15px;
    text-align: center;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    
    img {
        width: 100%;
        height: 120px;
        object-fit: cover;
        border-radius: 10px;
    }

    &:hover {
        transform: scale(1.05);
    }
`;

export const AddProductCard = styled(ProductCard)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    color: #00f5c0;
    background: #ecf0f1;

    @media (max-width: 667px) {
        margin-bottom: 50px;
    }
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 500px;
    text-align: center;

    @media (max-width: 667px) {
        width: 400px;
        margin-bottom: 50px;
    }
`;

export const CloseButton = styled.button`
    background: none;
    border: none;
    font-size: 20px;
    position: absolute;
    top: 10px;
    right: 15px;
    cursor: pointer;
`;

export const Input = styled.input`
    width: 100%;
    padding: 8px;
    margin: 10px 0;
    border: 2px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
    transition: border 0.3s;
    
    &:focus {
        border: 2px solid rgb(0, 245, 192);
        outline: none;
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
    padding: 8px;
    margin: 10px 0;
    border: 2px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
    resize: none;
    height: 80px;
    
    &:focus {
        border: 2px solid rgb(0, 245, 192);
        outline: none;
    }
`;

export const Select = styled.select`
    width: 100%;
    padding: 8px;
    margin: 10px 0;
    border-radius: 5px;
    border: 2px solid #ccc;
`;

export const Button = styled.button<{ deletar?: boolean }>`
    width: 100%;
    padding: 10px;
    background: ${({ deletar }) => (deletar ? "red" : "rgb(0, 4, 255)")};
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    transition: 0.3s;

    &:hover {
        background: ${({ deletar }) => (deletar ? "darkred" : "rgb(0, 245, 192)")};
    }
`;

export const MediaPreviewContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
`;

export const MediaPreview = styled.div`
    position: relative;
    width: 80px;
    height: 80px;
    border-radius: 5px;
    overflow: hidden;
    background: #f0f0f0;

    img, video {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const RemoveMediaButton = styled.button`
    position: absolute;
    top: 2px;
    right: 2px;
    background: red;
    color: white;
    border: none;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
`;