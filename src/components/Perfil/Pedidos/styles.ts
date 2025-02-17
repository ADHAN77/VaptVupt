import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    margin-bottom: 50px;
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
`;

export const Card = styled.div`
    background-color: #fff;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

export const Button = styled.button`
    background-color: rgb(0, 4, 255);
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: rgb(0, 245, 192);
    }
`;

export const ProductImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
`;

export const InputCode = styled.input`
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 200px;
    margin-top: 10px;
`;

export const CodeDisplay = styled.div`
    background-color: #f4f4f4;
    padding: 10px;
    color: #333;
    border-radius: 5px;
    font-weight: bold;
    text-align: center;
`;