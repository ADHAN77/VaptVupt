import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 600px;
    margin: 0 auto;

    h2 {
        font-size: 24px;
        margin-bottom: 20px;
    }
    `;

    export const Label = styled.label`
    display: block;
    margin-bottom: 8px;
    font-size: 16px;
    `;

    export const Input = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 20px;
    outline: none;

    &:focus {
        border-color: #0c72fa;
    }
    `;

    export const Button = styled.button`
    width: 100%;
    padding: 12px;
    font-size: 16px;
    color: #fff;
    background-color: #0c72fa;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0850a4;
    }
`;

