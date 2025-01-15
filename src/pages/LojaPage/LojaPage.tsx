import React, { useState } from "react";
import {
    LojaContainer,
    LojaHeader,
    LojaImagePlaceholder,
    LojaTitle,
    LojaInfo,
    LojaInfoItem,
    MeusProdutosSection,
    ProdutosContainer,
    ProdutoCard,
    ProdutoImage,
    ProdutoName,
    ProdutoPrice,
    AddProductButton,
    BackButton,
    EditSection,
    EditButton
} from "./style";

const LojaPage: React.FC = () => {
    const [isEditingInfo, setIsEditingInfo] = useState(false);
    const [, setIsAddingProduct] = useState(false);

    const toggleEditInfo = () => {
        setIsEditingInfo((prev) => !prev);
    };

    const toggleAddProduct = () => {
        setIsAddingProduct((prev) => !prev);
    };

    const handleBackToProfile = () => {
        window.location.href = "/home"; // Redireciona para a página de perfil
    };

    return (
        <LojaContainer>
            <LojaHeader>
                {/* Placeholder para a imagem da loja */}
                <LojaImagePlaceholder />
                <LojaTitle>Nome da Loja</LojaTitle>
            </LojaHeader>

            {/* Informações da loja */}
            <LojaInfo>
                <LojaInfoItem>
                    <strong>Nome da Loja:</strong> Loja Exemplo
                </LojaInfoItem>
                <LojaInfoItem>
                    <strong>Endereço:</strong> Rua das Flores, 123
                </LojaInfoItem>
                <LojaInfoItem>
                    <strong>CNPJ/CPF:</strong> 12.345.678/0001-90
                </LojaInfoItem>
                <LojaInfoItem>
                    <strong>Email:</strong> loja@exemplo.com
                </LojaInfoItem>
                <LojaInfoItem>
                    <strong>Telefone:</strong> (11) 98765-4321
                </LojaInfoItem>
                <LojaInfoItem>
                    <strong>Descrição:</strong> Loja de exemplo com uma grande variedade de produtos.
                </LojaInfoItem>
                 {/* Botão de Editar Informações */}
            <EditButton onClick={toggleEditInfo}>Editar Informações</EditButton>
                {/* Seção de Edição de Informações (aparece quando isEditingInfo for true) */}
                {isEditingInfo && (
                    <EditSection>
                        <h3>Editar Informações da Loja</h3>
                        <label>
                            Nome da Loja:
                            <input type="text" defaultValue="Loja Exemplo" />
                        </label>
                        <label>
                            Endereço:
                            <input type="text" defaultValue="Rua das Flores, 123" />
                        </label>
                        <label>
                            CNPJ/CPF:
                            <input type="text" defaultValue="12.345.678/0001-90" />
                        </label>
                        <label>
                            Email:
                            <input type="email" defaultValue="loja@exemplo.com" />
                        </label>
                        <label>
                            Telefone:
                            <input type="tel" defaultValue="(11) 98765-4321" />
                        </label>
                        <label>
                            Descrição:
                            <textarea defaultValue="Loja de exemplo com uma grande variedade de produtos." />
                        </label>
                        <AddProductButton>Salvar Alterações</AddProductButton>
                    </EditSection>
                )}
            </LojaInfo>
            {/* Seção Meus Produtos */}
            <MeusProdutosSection>
                <h3>Meus Produtos</h3>
                <ProdutosContainer>
                    <ProdutoCard>
                        <ProdutoImage src="/assets/icons/produto1.png" alt="Produto 1" />
                        <ProdutoName>Produto 1</ProdutoName>
                        <ProdutoPrice>R$ 99,99</ProdutoPrice>
                    </ProdutoCard>
                    <ProdutoCard>
                        <ProdutoImage src="/assets/icons/produto2.png" alt="Produto 2" />
                        <ProdutoName>Produto 2</ProdutoName>
                        <ProdutoPrice>R$ 49,99</ProdutoPrice>
                    </ProdutoCard>
                    <ProdutoCard>
                        <ProdutoImage src="/assets/icons/produto3.png" alt="Produto 3" />
                        <ProdutoName>Produto 3</ProdutoName>
                        <ProdutoPrice>R$ 79,99</ProdutoPrice>
                    </ProdutoCard>
                    <ProdutoCard>
                        <ProdutoImage src="/assets/icons/produto4.png" alt="Produto 4" />
                        <ProdutoName>Produto 4</ProdutoName>
                        <ProdutoPrice>R$ 129,99</ProdutoPrice>
                    </ProdutoCard>
                    <ProdutoCard>
                        <ProdutoImage src="/assets/icons/produto4.png" alt="Produto 4" />
                        <ProdutoName>Produto 4</ProdutoName>
                        <ProdutoPrice>R$ 129,99</ProdutoPrice>
                    </ProdutoCard>
                    <ProdutoCard>
                        <ProdutoImage src="/assets/icons/produto4.png" alt="Produto 4" />
                        <ProdutoName>Produto 4</ProdutoName>
                        <ProdutoPrice>R$ 129,99</ProdutoPrice>
                    </ProdutoCard>
                    <ProdutoCard>
                        <ProdutoImage src="/assets/icons/produto4.png" alt="Produto 4" />
                        <ProdutoName>Produto 4</ProdutoName>
                        <ProdutoPrice>R$ 129,99</ProdutoPrice>
                    </ProdutoCard>
                    <ProdutoCard>
                        <ProdutoImage src="/assets/icons/produto4.png" alt="Produto 4" />
                        <ProdutoName>Produto 4</ProdutoName>
                        <ProdutoPrice>R$ 129,99</ProdutoPrice>
                    </ProdutoCard>
                    <ProdutoCard>
                        <ProdutoImage src="/assets/icons/produto4.png" alt="Produto 4" />
                        <ProdutoName>Produto 4</ProdutoName>
                        <ProdutoPrice>R$ 129,99</ProdutoPrice>
                    </ProdutoCard>
                    {/* Mais produtos podem ser adicionados conforme necessário */}
                </ProdutosContainer>
            </MeusProdutosSection>

            {/* Botão para adicionar produto */}
            <AddProductButton onClick={toggleAddProduct}>Adicionar Produto</AddProductButton>

            {/* Botão para voltar ao perfil */}
            <BackButton onClick={handleBackToProfile}>Voltar</BackButton>
        </LojaContainer>
    );
};

export default LojaPage;
