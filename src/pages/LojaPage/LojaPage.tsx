import React, { useState } from "react";
import {
    LojaContainer,
    LojaContent,
    LojaHeaderContainer,
    LojaImagePlaceholder,
    LojaTitle,
    LojaInfoContainer,
    LojaInfoItem,
    MeusProdutosContainer,
    ProdutosContainer,
    AddProductButton,
    BackButton
} from "./style";

const LojaPage: React.FC = () => {
    const [, setIsAddingProduct] = useState(false);

    const toggleAddProduct = () => {
        setIsAddingProduct((prev) => !prev);
    };

    const handleBackToProfile = () => {
        window.location.href = "/home";
    };

    return (
        <LojaContainer>
            <LojaContent>
                {/* Container da foto e nome da loja */}
                <LojaHeaderContainer>
                    <LojaImagePlaceholder />
                    <LojaTitle>Nome da Loja</LojaTitle>
                </LojaHeaderContainer>

                {/* Container das informações */}
                <LojaInfoContainer>
                    <LojaInfoItem><strong>Nome da Loja:</strong> Loja Exemplo</LojaInfoItem>
                    <LojaInfoItem><strong>Endereço:</strong> Rua das Flores, 123</LojaInfoItem>
                    <LojaInfoItem><strong>CNPJ/CPF:</strong> 12.345.678/0001-90</LojaInfoItem>
                    <LojaInfoItem><strong>Email:</strong> loja@exemplo.com</LojaInfoItem>
                    <LojaInfoItem><strong>Telefone:</strong> (11) 98765-4321</LojaInfoItem>
                    <LojaInfoItem><strong>Descrição:</strong> Loja de exemplo com variedade de produtos.</LojaInfoItem>
                </LojaInfoContainer>

                {/* Container "Meus Produtos" */}
                <MeusProdutosContainer>
                    <h3>Meus Produtos</h3>
                    <ProdutosContainer>
                        <div>Produto 1</div>
                        <div>Produto 2</div>
                        <div>Produto 3</div>
                        <div>Produto 4</div>
                    </ProdutosContainer>
                    <AddProductButton onClick={toggleAddProduct}>Adicionar Produto</AddProductButton>
                </MeusProdutosContainer>
            </LojaContent>

            {/* Botão para voltar */}
            <BackButton onClick={handleBackToProfile}>Voltar</BackButton>
        </LojaContainer>
    );
};

export default LojaPage;
