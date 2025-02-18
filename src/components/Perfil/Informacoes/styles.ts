import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
    margin-bottom: 50px;
`;

export const InfoContainer = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-family: 'Arial', sans-serif;
    max-width: 600px;
    margin: 0 auto;
`;

export const InfoItem = styled.div`
    margin-bottom: 15px;
    font-size: 16px;

    strong {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
    }

    span {
        font-size: 16px;
        color: #333;
    }
`;

export const Input = styled.input`
    padding: 10px;
    font-size: 16px;
    width: 100%;
    margin-top: 5px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9;
    box-sizing: border-box;

    &:focus {
        outline: none;
        border-color: rgb(0, 4, 255);
    }
`;

export const Textarea = styled.textarea`
    padding: 10px;
    font-size: 16px;
    width: 100%;
    height: 100px;
    margin-top: 5px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9;
    resize: none;
    box-sizing: border-box;

    &:focus {
        outline: none;
        border-color: rgb(0, 4, 255);
    }
`;

export const EditButton = styled.button`
    width: 100%;
    padding: 12px;
    font-size: 16px;
    flex: 1;
    background-color: rgb(0, 4, 255);
    border: 1px solid rgb(0, 245, 192);
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transform: all 1s esase;
    transition-duration: .2s;

    &:hover {
        transform: translateY(-5px);
        background-color: rgb(0, 245, 192);
        color: rgb(0, 4, 255);
        border: 1px solid rgb(0, 4, 255);
    }

    &:active {
        transform: translateY(2px);
    }
`;

export const SaveButton = styled.button`
    width: 100%;
    padding: 12px;
    font-size: 16px;
    flex: 1;
    background-color: rgb(0, 4, 255);
    border: 1px solid rgb(0, 245, 192);
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transform: all 1s esase;
    transition-duration: .2s;

    &:hover {
        transform: translateY(-5px);
        background-color: rgb(0, 245, 192);
        color: rgb(0, 4, 255);
        border: 1px solid rgb(0, 4, 255);
    }

    &:active {
        transform: translateY(2px);
    }
`;
