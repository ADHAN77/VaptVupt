import React, { useState } from "react";
import cartIcon from "../../assets/icons/cart.png"; // Ícone do carrinho
import { 
    Container, StoreHeader, StoreInfo, StoreLogo, ProductGrid, 
    Card, Image, Info, Title, Description, BuyButton, CartButton, Buttons,
    CategoriaH2
} from "./styles";
import g29 from "../../assets/Eletronicos/Logitech-G29.webp"

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
    { id: 1, name: "Produto 1", price: "R$ 99,90", image: g29, description: "O Logitech G29 Driving Force é um volante de alta performance projetado para proporcionar uma experiência de corrida realista em PC, PlayStation 4 e PlayStation 5. Equipado com force feedback de dois motores, ele simula com precisão as variações de terreno, perda de tração e frenagem, garantindo imersão total nas pistas." },
    { id: 1, name: "Produto 1", price: "R$ 99,90", image: g29, description: "O Logitech G29 Driving Force é um volante de alta performance projetado para proporcionar uma experiência de corrida realista em PC, PlayStation 4 e PlayStation 5. Equipado com force feedback de dois motores, ele simula com precisão as variações de terreno, perda de tração e frenagem, garantindo imersão total nas pistas." },
    { id: 1, name: "Produto 1", price: "R$ 99,90", image: g29, description: "O Logitech G29 Driving Force é um volante de alta performance projetado para proporcionar uma experiência de corrida realista em PC, PlayStation 4 e PlayStation 5. Equipado com force feedback de dois motores, ele simula com precisão as variações de terreno, perda de tração e frenagem, garantindo imersão total nas pistas." },
    { id: 1, name: "Produto 1", price: "R$ 99,90", image: g29, description: "O Logitech G29 Driving Force é um volante de alta performance projetado para proporcionar uma experiência de corrida realista em PC, PlayStation 4 e PlayStation 5. Equipado com force feedback de dois motores, ele simula com precisão as variações de terreno, perda de tração e frenagem, garantindo imersão total nas pistas." },
    { id: 1, name: "Produto 1", price: "R$ 99,90", image: g29, description: "O Logitech G29 Driving Force é um volante de alta performance projetado para proporcionar uma experiência de corrida realista em PC, PlayStation 4 e PlayStation 5. Equipado com force feedback de dois motores, ele simula com precisão as variações de terreno, perda de tração e frenagem, garantindo imersão total nas pistas." },
    { id: 1, name: "Produto 1", price: "R$ 99,90", image: g29, description: "O Logitech G29 Driving Force é um volante de alta performance projetado para proporcionar uma experiência de corrida realista em PC, PlayStation 4 e PlayStation 5. Equipado com force feedback de dois motores, ele simula com precisão as variações de terreno, perda de tração e frenagem, garantindo imersão total nas pistas." },
    { id: 1, name: "Produto 1", price: "R$ 99,90", image: g29, description: "O Logitech G29 Driving Force é um volante de alta performance projetado para proporcionar uma experiência de corrida realista em PC, PlayStation 4 e PlayStation 5. Equipado com force feedback de dois motores, ele simula com precisão as variações de terreno, perda de tração e frenagem, garantindo imersão total nas pistas." },
    { id: 1, name: "Produto 1", price: "R$ 99,90", image: g29, description: "O Logitech G29 Driving Force é um volante de alta performance projetado para proporcionar uma experiência de corrida realista em PC, PlayStation 4 e PlayStation 5. Equipado com force feedback de dois motores, ele simula com precisão as variações de terreno, perda de tração e frenagem, garantindo imersão total nas pistas." },
];

const Vitrine: React.FC = () => {
    const [products] = useState(mockProducts);

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
                    <Card key={product.id}>
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
        </Container>
    );
};

export default Vitrine;
