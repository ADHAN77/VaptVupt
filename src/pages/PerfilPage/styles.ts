import styled from "styled-components";

// Container principal do perfil
export const ProfileContainer = styled.div`
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
`;

// Cabeçalho do perfil
export const ProfileHeader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

// Imagem do perfil
export const ProfileImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-right: 20px;
`;

// Nome do usuário
export const ProfileName = styled.h2`
    color: #333;
    font-size: 24px;
`;

// Conteúdo principal do perfil
export const ProfileContent = styled.div`
    margin-top: 20px;
`;

// Seção de informações e configurações
export const Section = styled.div`
    margin-bottom: 20px;
`;

// Título das seções
export const SectionTitle = styled.h3`
    font-size: 20px;
    color: #444;
    margin-bottom: 10px;
`;

// Item de informação (label + valor)
export const InfoItem = styled.div`
    display: flex;
    margin-bottom: 10px;
`;

// Label das informações
export const InfoLabel = styled.span`
    font-weight: bold;
    margin-right: 10px;
`;

// Valor das informações
export const InfoValue = styled.span`
    color: #555;
`;

// Botões de opções
export const OptionButton = styled.button`
    background-color: rgb(0, 4, 255);
    color: #fff;
    border: solid 1px rgb(0, 245, 192);
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
    transition: background-color 0.3s;

    &:hover {
        background-color: rgb(0, 245, 192);
        color: rgb(0, 4, 255);
        border: solid 1px rgb(0, 4, 255);
    }
`;

// Seção para editar informações ou senha
export const EditSection = styled.div`
    margin-top: 20px;
    background-color: #f9f9f9;
    padding: 15px;
    border-radius: 8px;

    h3 {
        margin-bottom: 10px;
        color: #333;
    }

    label {
        display: block;
        margin-bottom: 10px;
        font-size: 16px;
    }

    input {
        width: 100%;
        padding: 8px;
        margin-top: 5px;
        font-size: 16px;
        border-radius: 4px;
        border: 1px solid #ccc;
        background-color: #fff;
    }
`;

// Botão de voltar para a home
export const BackButton = styled.button`
    background-color: #ccc;
    color: #333;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    margin-top: 20px;
    text-align: center;
    transition: background-color 0.3s;

    &:hover {
        background-color: #bbb;
    }
`;
