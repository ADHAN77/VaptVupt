import styled from "styled-components";

// Container principal da loja
export const LojaContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

// Header da loja (Imagem e Nome)
export const LojaHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`;

// Placeholder para a imagem da loja
export const LojaImagePlaceholder = styled.div`
    width: 360px;
    height: 360px;
    background-color: #ddd;
    border-radius: 50%;
    margin-bottom: 15px;
`;

// Nome da loja
export const LojaTitle = styled.h2`
    font-size: 30px;
    margin: 10px 0;
`;

// Informações da loja
export const LojaInfo = styled.div`
    width: 100%;
    max-width: 600px;
    margin-bottom: 30px;
    text-align: left;
`;

export const LojaInfoItem = styled.p`
    font-size: 16px;
    margin: 5px 0;

    strong {
        font-weight: bold;
    }
`;

// Seção Meus Produtos
export const MeusProdutosSection = styled.section`
    width: 100%;
    max-width: 600px;
    margin-bottom: 30px;
    h3 {
        font-size: 24px;
        margin-bottom: 20px;
    }
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

// Container de produtos (3 produtos por linha no desktop, 2 produtos por linha no mobile)
export const ProdutosContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr); // 2 produtos por linha (default)
    gap: 20px;
    width: 100%;
    max-width: 600px;
    overflow-y: auto;
    max-height: 500px; // Tamanho fixo para o container de produtos
    padding: 10px 0;
    background: linear-gradient(to top, rgb(0, 245, 192), rgb(0, 4, 255));
    background-size: cover;
    border-radius: 8px;

    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr); // 3 produtos por linha no desktop
    }
`;

// Card do Produto
export const ProdutoCard = styled.div`
    margin-left: 10px;
    width: 150px;
    height: 200px;
    background-color: #f8f8f8;
    border-radius: 8px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease; /* Adiciona transição suave */

    &:hover {
        transform: scale(1.05); /* Aumenta o tamanho levemente */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Aumenta a sombra ao passar o mouse */
        cursor: pointer; /* Muda o cursor para indicar que é clicável */
    }
`;


export const ProdutoImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
`;

export const ProdutoName = styled.p`
    font-size: 16px;
    margin: 10px 0;
    text-align: center;
`;

export const ProdutoPrice = styled.p`
    font-size: 14px;
    color: #888;
    text-align: center;
`;

// Botões de ação
export const AddProductButton = styled.button`
    background-color: #28a745;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 20px;

    &:hover {
        background-color: #218838;
    }
`;

export const BackButton = styled.button`
    background-color: #f0f0f0;
    color: #333;
    padding: 10px;
    border: 1px solid #ddd;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 20px;

    &:hover {
        background-color: #e2e2e2;
    }
`;

// Botão de Editar Informações
export const EditButton = styled.button`
    background-color: rgb(0, 4, 255);
    color: white;
    padding: 10px;
    border: solid 1px rgb(0, 245, 192);
    cursor: pointer;
    border-radius: 5px;
    margin-top: 10px; /* Reduzido para aproximar do conteúdo */
    align-self: flex-start; /* Alinha à esquerda junto com as informações */

    &:hover {
        background-color: rgb(0, 245, 192);
        border: solid 1px rgb(0, 4, 255);
        color: rgb(0, 4, 255);
    }
`;


// Seção de Edição de Informações
export const EditSection = styled.section`
    width: 100%;
    max-width: 600px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    h3 {
        font-size: 24px;
        margin-bottom: 10px;
    }

    label {
        font-size: 16px;
        display: block;
        margin-bottom: 5px;
    }

    input, textarea {
        font-size: 14px;
        padding: 8px;
        margin-bottom: 15px;
        border-radius: 5px;
        border: 1px solid #ddd;
        width: 100%;
    }

    textarea {
        width: 100%; /* Garante que ocupe 100% da largura disponível */
    max-width: 600px; /* Limita a largura máxima */
    height: 100px; /* Define uma altura fixa */
    resize: none; /* Impede que o usuário redimensione o textarea */
    font-size: 14px;
    padding: 8px;
    margin-bottom: 15px;
    border-radius: 5px;
    border: 1px solid #ddd;
    }
`;
