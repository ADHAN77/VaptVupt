import React, { useState } from "react";
import {
    Container,
    Title,
    ProductGrid,
    ProductCard,
    AddProductCard,
    ModalOverlay,
    ModalContent,
    CloseButton,
    Input,
    TextArea,
    Select,
    Button
} from "./styles";

interface Produto {
    id: number;
    foto: string;
    titulo: string;
    descricao: string;
    preco: string;
    categoria: string;
}

const Produtos: React.FC = () => {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [modalAberto, setModalAberto] = useState(false);
    const [produtoAtual, setProdutoAtual] = useState<Produto | null>(null);

    const categorias = ["Eletrônicos", "Roupas", "Computadores", "Calçados", "Bijuterias", "Eletrodomésticos", "Livros", "Esportes"];

    const abrirModal = (produto?: Produto) => {
        setProdutoAtual(produto || { id: Date.now(), foto: "", titulo: "", descricao: "", preco: "", categoria: "" });
        setModalAberto(true);
    };

    const fecharModal = () => {
        setModalAberto(false);
        setProdutoAtual(null);
    };

    const salvarProduto = () => {
        if (produtoAtual) {
            if (produtos.some(p => p.id === produtoAtual.id)) {
                setProdutos(produtos.map(p => (p.id === produtoAtual.id ? produtoAtual : p)));
            } else {
                setProdutos([...produtos, produtoAtual]);
            }
            fecharModal();
        }
    };

    const deletarProduto = () => {
        if (produtoAtual) {
            setProdutos(produtos.filter(p => p.id !== produtoAtual.id));
            fecharModal();
        }
    };

    return (
        <Container>
            <Title>Produtos</Title>
            <ProductGrid>
                {produtos.map(produto => (
                    <ProductCard key={produto.id} onClick={() => abrirModal(produto)}>
                        <img src={produto.foto || "https://via.placeholder.com/150"} alt={produto.titulo} />
                        <h3>{produto.titulo}</h3>
                        <p>{produto.preco}</p>
                    </ProductCard>
                ))}
                <AddProductCard onClick={() => abrirModal()}>
                    <span>+</span>
                </AddProductCard>
            </ProductGrid>

            {modalAberto && (
                <ModalOverlay>
                    <ModalContent>
                        <CloseButton onClick={fecharModal}>×</CloseButton>
                        <h2>{produtoAtual?.id ? "Editar Produto" : "Adicionar Produto"}</h2>
                        <Input
                            type="text"
                            placeholder="Foto (URL)"
                            value={produtoAtual?.foto || ""}
                            onChange={(e) => setProdutoAtual({ ...produtoAtual!, foto: e.target.value })}
                        />
                        <Input
                            type="text"
                            placeholder="Título"
                            value={produtoAtual?.titulo || ""}
                            onChange={(e) => setProdutoAtual({ ...produtoAtual!, titulo: e.target.value })}
                        />
                        <TextArea
                            placeholder="Descrição"
                            value={produtoAtual?.descricao || ""}
                            onChange={(e) => setProdutoAtual({ ...produtoAtual!, descricao: e.target.value })}
                        />
                        <Input
                            type="text"
                            placeholder="Preço"
                            value={produtoAtual?.preco || ""}
                            onChange={(e) => setProdutoAtual({ ...produtoAtual!, preco: e.target.value })}
                        />
                        <Select
                            value={produtoAtual?.categoria || ""}
                            onChange={(e) => setProdutoAtual({ ...produtoAtual!, categoria: e.target.value })}
                        >
                            <option value="">Selecione uma categoria</option>
                            {categorias.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </Select>
                        <Button onClick={salvarProduto}>Salvar</Button>
                        {produtoAtual?.id && <Button onClick={deletarProduto} deletar>Excluir</Button>}
                    </ModalContent>
                </ModalOverlay>
            )}
        </Container>
    );
};

export default Produtos;

