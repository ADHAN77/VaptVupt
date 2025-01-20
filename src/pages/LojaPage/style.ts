import styled from "styled-components";

// Container principal da loja
export const LojaContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f0f4f8;
    width: 100%;
`;

// Container geral para alinhar os três blocos horizontalmente
export const LojaContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    gap: 20px;
`;

// Estilo base para os containers azuis
export const BaseContainer = styled.div`
    background: linear-gradient(to top, rgb(0, 245, 192), rgb(0, 4, 255));
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    color: white;
`;

// Container da foto e nome da loja
export const LojaHeaderContainer = styled(BaseContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
`;

// Nome da loja
export const LojaTitle = styled.h2`
    font-size: 24px;
    text-align: center;
    margin-top: 10px;
`;

// Placeholder para a imagem da loja
export const LojaImagePlaceholder = styled.div`
    width: 180px;
    height: 180px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    margin-bottom: 15px;
`;

// Container de informações da loja
export const LojaInfoContainer = styled(BaseContainer)`
    display: flex;
    flex-direction: column;
    width: 35%;
`;

// Informações individuais da loja
export const LojaInfoItem = styled.p`
    font-size: 16px;
    margin: 10px 0;
    strong {
        font-weight: bold;
    }
`;

// Container "Meus Produtos"
export const MeusProdutosContainer = styled(BaseContainer)`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

// Título "Meus Produtos"
export const MeusProdutosTitle = styled.h3`
    font-size: 24px;
    margin-bottom: 15px;
    text-align: center;
`;

// Container para os produtos (com scroll)
export const ProdutosContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    width: 100%;
    height: 400px;
    overflow-y: auto;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 15px;
`;

// Botão para adicionar produto
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

// Botão para voltar
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
