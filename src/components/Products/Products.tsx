import React, { useState } from "react";
import cartIcon from "../../assets/icons/cart.png"; // Importando o ícone do carrinho
import notbook from "../../assets/Eletronicos/Notebook-VAIO.webp"
import Monitor from "../../assets/Eletronicos/Monitor-Mancer.jpg"
import g29 from "../../assets/Eletronicos/Logitech-G29.webp"
import pocox7 from "../../assets/Eletronicos/POCO-X7.webp"
import calca from "../../assets/Roupas/Calca-masculina.jpg"
import camisa from "../../assets/Roupas/Camisa-academia.avif"
import cuecas from "../../assets/Roupas/cuecas-calvin-klein.webp"
import moletom from "../../assets/Roupas/Moletom.avif"
import harryPotter from "../../assets/Livros/Livro-Harry-Potter.jpg"
import aCabana from "../../assets/Livros/Livro-ACabana.webp"
import paiRico from "../../assets/Livros/Livro-PaiRicoPaiPobre.webp"
import smartMoney from "../../assets/Livros/Livro-SmartMoney.jpeg"

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
            name: "Notebook Vaio",
            price: "R$ 6.299,00",
            description: "Notebook VAIO® FH15 Intel® Core™ i7-12650H Shell Efi GeForce RTX® 3050 32GB RAM 1TB SSD 15.6 Full HD  Cinza Escuro",
            category: "Eletrônicos",
            image: notbook,
        },
        {
            id: 2,
            name: "Monitor Mancer Valak",
            price: "R$ 819,99",
            description: "Z180H, 23.6 Pol. VA, Curvo, FHD, 1ms, 180Hz, FreeSync e G-Sync, HDMI/DP, MCR-VKZ180H-BL01",
            category: "Eletrônicos",
            image: Monitor,
        },
        {
            id: 3,
            name: "Logitech G29",
            price: "R$ 2.989,00",
            description: "Volante Logitech G29 Driving Force para PS5, PS4, PS3 e PC",
            category: "Eletrônicos",
            image: g29,
        },
        {
            id: 4,
            name: "Xiaomi Poco X7 Pro",
            price: "R$ 4.274,99",
            description: "Smartphone Xiaomi Poco X7 Pro 5G 512GB 12GB RAM Dual SIM Tela 6.67 - Preto",
            category: "Eletrônicos",
            image: pocox7,
        },
        {
            id: 5,
            name: "Calça Masculina",
            price: "R$ 70,00",
            description: "Perfeito para academia ou até mesmo para o dia a dia.",
            category: "Roupas",
            image: calca,
        },
        {
            id: 6,
            name: "Camisa de compreção Spider-man",
            price: "R$ 150,00",
            description: "Camisa para academia para valorisar o shape",
            category: "Roupas",
            image: camisa,
        },
        {
            id: 7,
            name: "Cuecas Calvin-Klein",
            price: "R$ 89,90",
            description: "Combo de 4 caucas Calvin-Klein",
            category: "Roupas",
            image: cuecas,
        },
        {
            id: 8,
            name: "Moletom Vans Preto",
            price: "R$ 280,00",
            description: "Mais conforto e estilo para o seu dia a dia",
            category: "Roupas",
            image: moletom,
        },
        {
            id:9,
            name: "Harry Potter e o Cálice de Fogo",
            price: "R$ 66,64",
            description: "Verão, Harry Potter, agora com 14 anos, sente sua cicatriz arder durante um sonho bastante real com Lord Voldemort",
            category: "Livros",
            image: harryPotter,
        },
        {
            id: 10,
            name: "A cabana",
            price: "R$ 44,93",
            description: "Durante uma viagem de fim de semana, a filha mais nova de Mack Allen Phillips é raptada e evidências de que ela foi brutalmente assassinada são encontradas numa velha cabana.",
            category: "Livros",
            image: aCabana,
        },
        {
            id: 11,
            name: "Pai Rico, pai Pobre: Edição de 20 Anos",
            price: "R$ 38,43",
            description: "A escola prepara as crianças para o mundo real? Essa é a primeira pergunta com a qual o leitor se depara neste livro. O recado é ousado e direto: boa formação e notas altas não bastam para assegurar o sucesso de alguém.",
            category: "Livros",
            image: paiRico,
        },
        {
            id: 12,
            name: "SMART MONEY: A arte de atrair investidores e dinheiro inteligente para seu negócio.",
            price: "R$ 49,28",
            description: "O empreendedor é quem deve escolher seu investidor, não o contrário. Mesmo para quem tem experiência em gerir o próprio negócio, captar recursos e conquistar novos investidores pode ser um quebra-cabeças sem fim. ",
            category: "Livros",
            image: smartMoney,
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
