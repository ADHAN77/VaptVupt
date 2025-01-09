import styled from "styled-components";

export const PageContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background: linear-gradient(to top,rgb(0, 245, 192),rgb(0, 4, 255));
    background-size: cover;
    margin: 0;
    padding: 0;
    overflow: hidden; 

    /* Adicionando responsividade */
    @media (max-width: 768px) {
        padding: 10px;
    }
`;

export const Logo = styled.img`
    position: absolute;
    top: 20px; /* Ajuste a distância que você deseja do topo */
    left: 50%;
    transform: translateX(-50%);
    max-width: 380px;
    width: 100%; /* Garante que a logo seja redimensionada em telas menores */

    @media (max-width: 768px) {
        max-width: 200px; /* Ajuste o tamanho da logo em dispositivos móveis */
    }
`;

export const LoginContainer = styled.div`
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    width: 100%;
    max-width: 400px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-top: 80px; /* Deixa um espaço entre a logo e o formulário */
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;

    h1 {
        text-align: center;
        font-weight: bold;
    }

    /* Ajustando para telas menores */
    @media (max-width: 768px) {
        padding: 20px;
        max-width: 90%; /* Deixa o container mais estreito em dispositivos móveis */
        margin-top: 40px;
    }
`;

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
`;

export const Input = styled.input`
    padding: 0.75rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;

    &:focus {
        border-color: #007bff;
    }

    /* Ajustes para telas menores */
    @media (max-width: 768px) {
        padding: 0.5rem;
        font-size: 0.9rem;
    }
`;

export const Button = styled.button`
    padding: 0.75rem;
    font-size: 1rem;
    color: #fff;
    background: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background: #0056b3;
    }

    /* Ajustes para telas menores */
    @media (max-width: 768px) {
        padding: 0.6rem;
        font-size: 0.9rem;
    }
`;
