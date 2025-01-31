import React, { useEffect, useState } from "react";
import cartIcon from "../../assets/icons/cart.png"; // Ícone do carrinho
import {
    Container, StoreHeader, StoreInfo, StoreLogo, ProductGrid,
    Card, Image, Info, Title, Description, BuyButton, CartButton, Buttons,
    CategoriaH2, ModalOverlay, ModalContent, QuantitySelect, SizeSelect,
    SelectContainer,
    SelectLabel
} from "./styles";
import g29 from "../../assets/Eletronicos/Logitech-G29.webp";
import moletom from "../../assets/Roupas/Moletom.avif"

// Mock de dados da loja
const storeData = {
    logo: "https://via.placeholder.com/80",
    name: "Loja Exemplo",
    sales: 120,
    address: "Rua Exemplo, 123 - São Paulo, SP",
    contact: "(11) 99999-9999",
    bio: "Bem-vindo à nossa loja! Oferecemos os melhores produtos com qualidade garantida."
};

// Mock de produtos exclusivos da loja
const mockProducts = [
    { id: 1, name: "Produto 1", price: "R$ 99,90", image: g29, description: "Volante Logitech G29 para PC e PlayStation.", category: "Eletrônicos" },
    { id: 2, name: "Camiseta Preta", price: "R$ 49,90", image: moletom, description: "Camiseta básica preta, confortável e estilosa.", category: "Roupas" },
    { id: 3, name: "Produto 1", price: "R$ 99,90", image: g29, description: "Volante Logitech G29 para PC e PlayStation.", category: "Eletrônicos" },
    { id: 4, name: "Camiseta Preta", price: "R$ 49,90", image: moletom, description: "Camiseta básica preta, confortável e estilosa.", category: "Roupas" },
    { id: 5, name: "Produto 1", price: "R$ 99,90", image: g29, description: "Volante Logitech G29 para PC e PlayStation.", category: "Eletrônicos" },
    { id: 6, name: "Camiseta Preta", price: "R$ 49,90", image: moletom, description: "Camiseta básica preta, confortável e estilosa.", category: "Roupas" },
];

// Tipagem correta para os produtos
interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
    description: string;
    category: string;
}

const Vitrine: React.FC = () => {
    const [products] = useState<Product[]>(mockProducts);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0); // Faz a página rolar para o topo ao carregar
    }, []);

    const openModal = (product: Product) => setSelectedProduct(product);
    const closeModal = () => setSelectedProduct(null);

    return (
        <Container>
            {/* Cabeçalho da loja */}
            <StoreHeader>
                <StoreLogo src={storeData.logo} alt={storeData.name} />
                <StoreInfo>
                    <h2>{storeData.name}</h2>
                    <p><strong>Vendas:</strong> {storeData.sales}</p>
                    <p><strong>Endereço:</strong> {storeData.address}</p>
                    <p><strong>Contato:</strong> {storeData.contact}</p>
                    <p><strong>Bio:</strong> {storeData.bio}</p>
                </StoreInfo>
            </StoreHeader>

            {/* Seção de produtos */}
            <CategoriaH2>Produtos</CategoriaH2>
            <ProductGrid>
                {products.map((product) => (
                    <Card
                        key={product.id}
                        onClick={() => openModal(product)} 
                        // Não vamos mudar essa parte, pois ela abre o modal quando clica no card
                    >
                        <Image src={product.image} alt={product.name} />
                        <Info>
                            <Title>{product.name}</Title>
                            <Description>{product.description}</Description>
                            <p>{product.price}</p>
                            <Buttons>
                                <BuyButton onClick={(e) => e.stopPropagation()}>Comprar</BuyButton>
                                <CartButton onClick={(e) => e.stopPropagation()}>
                                    <img src={cartIcon} alt="Carrinho" />
                                </CartButton>
                            </Buttons>
                        </Info>
                    </Card>
                ))}
            </ProductGrid>

            {/* Modal de detalhes do produto */}
            {selectedProduct && (
                <ModalOverlay onClick={closeModal}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <Image src={selectedProduct.image} alt={selectedProduct.name} />
                        <Title>{selectedProduct.name}</Title>
                        <Description>{selectedProduct.description}</Description>
                        <p>{selectedProduct.price}</p>

                        {/* Opção de quantidade */}
                        <SelectContainer>
                            <SelectLabel>Quantidade:</SelectLabel>
                            <QuantitySelect>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </QuantitySelect>

                            {/* Opção de tamanho para roupas */}
                            {selectedProduct.category === "Roupas" && (
                                <>
                                    <SelectLabel>Tamanho:</SelectLabel>
                                    <SizeSelect>
                                        <option value="P">P</option>
                                        <option value="M">M</option>
                                        <option value="G">G</option>
                                        <option value="GG">GG</option>
                                    </SizeSelect>
                                </>
                            )}
                        </SelectContainer>
                        <BuyButton>Comprar</BuyButton>
                    </ModalContent>
                </ModalOverlay>
            )}
        </Container>
    );
};

export default Vitrine;
