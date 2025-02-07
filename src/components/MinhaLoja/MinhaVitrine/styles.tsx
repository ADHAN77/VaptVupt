import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.459);
`;

export const Title = styled.h2`
    text-align: center;
    color: #333;
    margin-bottom: 20px;
`;

export const LogoContainer = styled.div`
    text-align: center;
    margin-bottom: 20px;
`;

export const Logo = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 2px solid rgb(0, 245, 192);
`;

export const FileInput = styled.input`
    display: block;
    margin: 10px auto;
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
    color: #666666;
`;

export const Input = styled.input`
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 5px;
    font-size: 14px; /* Igual ao Label */
    font-weight: bold; /* Igual ao Label */
    color: #666666; /* Igual ao Label */
    transition: border 0.3s;

    &:focus {
        border: 2px solid rgb(0, 245, 192);
        outline: none;
    }

    &:disabled {
        background: rgb(177, 177, 177);
        color: #ffffff;
    }
`;

export const TextArea = styled.textarea`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px; /* Igual ao Label */
    font-weight: bold; /* Igual ao Label */
    color: #666666; /* Igual ao Label */
    transition: border 0.3s;
    resize: none; /* Impede redimensionamento */
    height: 120px;

    &:focus {
        border: 1px solid rgb(0, 245, 192);
        outline: none;
    }
`;

export const Button = styled.button<{ editando: boolean }>`
    width: 100%;
    padding: 10px 15px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    background-color: rgb(0, 4, 255);
    border: 1px solid rgb(0, 245, 192);
    color: white;
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

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: #fff;
    color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.589);
    margin-bottom: 10px;
`;

