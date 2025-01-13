import React, { useState } from "react";
import cartIcon from "../../assets/icons/cart.png"; // Importando o ícone do carrinho
import {
    Container,
    SearchBar,
    ProductGrid,
    Card,
    Image,
    Info,
    Description,
    Buttons,
    BuyButton,
    CartButton,
    Placeholder,
    CategoriaH1,
} from "./styles";

const Products: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const products = [
        {
            id: 1,
            name: "Produto A",
            price: "R$ 100,00",
            description: "Descrição do Produto A",
            category: "Eletrônicos",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 2,
            name: "Produto B",
            price: "R$ 200,00",
            description: "Descrição do Produto B",
            category: "Eletrônicos",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 1,
            name: "Produto A",
            price: "R$ 100,00",
            description: "Descrição do Produto A",
            category: "Eletrônicos",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 1,
            name: "Produto A",
            price: "R$ 100,00",
            description: "Descrição do Produto A",
            category: "Eletrônicos",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 3,
            name: "Produto C",
            price: "R$ 150,00",
            description: "Descrição do Produto C",
            category: "Roupas",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 4,
            name: "Produto D",
            price: "R$ 150,00",
            description: "Descrição do Produto D",
            category: "Roupas",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 3,
            name: "Produto C",
            price: "R$ 150,00",
            description: "Descrição do Produto C",
            category: "Roupas",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 3,
            name: "Produto C",
            price: "R$ 150,00",
            description: "Descrição do Produto C",
            category: "Roupas",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 5,
            name: "Produto E",
            price: "R$ 150,00",
            description: "Descrição do Produto E",
            category: "Livros",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 6,
            name: "Produto F",
            price: "R$ 150,00",
            description: "Descrição do Produto F",
            category: "Livros",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 6,
            name: "Produto F",
            price: "R$ 150,00",
            description: "Descrição do Produto F",
            category: "Livros",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 6,
            name: "Produto F",
            price: "R$ 150,00",
            description: "Descrição do Produto F",
            category: "Livros",
            image: "https://via.placeholder.com/150",
        },
    ];

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Agrupar produtos por categoria
    const groupedProducts = filteredProducts.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
    }, {} as Record<string, typeof products>);

    return (
        <div className="inner-container">
            <Container>
                {/* Barra de Pesquisa */}
                <SearchBar>
                    <input
                        type="text"
                        placeholder="Pesquisar produtos..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </SearchBar>

                {/* Lista de Produtos por Categoria */}
                {Object.entries(groupedProducts).map(([category, products]) => (
                    <section key={category}>
                        <CategoriaH1>{category}</CategoriaH1>
                        <ProductGrid>
                            {products.map((product) => (
                                <Card key={product.id}>
                                    <Image src={product.image} alt={product.name} />
                                    <Info>
                                        <h3>{product.name}</h3>
                                        <p>{product.price}</p>
                                        <Description>{product.description}</Description>
                                        <Buttons>
                                            <BuyButton>Comprar</BuyButton>
                                            <CartButton>
                                                <img
                                                    src={cartIcon}
                                                    alt="Carrinho"
                                                    style={{ width: "20px", height: "20px" }}
                                                />
                                            </CartButton>
                                        </Buttons>
                                    </Info>
                                </Card>
                            ))}
                        </ProductGrid>
                    </section>
                ))}
                {/* Placeholder para nenhum produto encontrado */}
                {filteredProducts.length === 0 && (
                    <Placeholder>
                        <p>Nenhum produto encontrado.</p>
                    </Placeholder>
                )}
            </Container>
        </div>
    );
};

export default Products;
