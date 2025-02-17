import { useState } from "react";
import { Container, Section, Item, Card, Button, ProductImage, CodeDisplay } from "./styles";
import pocox7 from "../../../assets/Eletronicos/POCO-X7.webp";
import notbook from "../../../assets/Eletronicos/Notebook-VAIO.webp";
import moletom from "../../../assets/Roupas/Moletom.avif";

interface Pedido {
    id: number;
    nome: string;
    preco: string;
    status: string;
    img: string;
    codigoRecebimento?: string; // Adicionando a propriedade opcional
}

const pedidosFicticios: Pedido[] = [
    { id: 1, nome: "Smartphone X", preco: "R$ 2.500,00", status: "Em andamento", img: pocox7 },
    { id: 2, nome: "Notebook", preco: "R$ 350,00", status: "Em andamento", img: notbook },
];

const historicoFicticio: Pedido[] = [
    {
        id: 3, nome: "Notebook Gamer", preco: "R$ 7.500,00", img: notbook,
        status: ""
    },
    {
        id: 4, nome: "Moletom", preco: "R$ 450,00", img: moletom,
        status: ""
    },
];

const MeusPedidos = () => {
    const [pedidos, setPedidos] = useState<Pedido[]>(pedidosFicticios);
    const [, setCodigo] = useState<string | null>(null);

    const gerarCodigoRecebimento = () => Math.random().toString(36).substring(2, 10).toUpperCase();

    const confirmarRecebimento = (id: number) => {
        const novoCodigo = gerarCodigoRecebimento();
        setCodigo(novoCodigo);
        setPedidos((prevPedidos) =>
            prevPedidos.map((pedido) =>
                pedido.id === id ? { ...pedido, codigoRecebimento: novoCodigo } : pedido
            )
        );
    };

    return (
        <Container>
            <Section>
                <h2>Histórico de Compras</h2>
                {historicoFicticio.map((item) => (
                    <Item key={item.id}>
                        <ProductImage src={item.img} alt={item.nome} />
                        <span>{item.nome}</span>
                        <span>{item.preco}</span>
                    </Item>
                ))}
            </Section>

            <Section>
                <h2>Pedidos em Andamento</h2>
                {pedidos.length > 0 ? (
                    pedidos.map((pedido) => (
                        <Card key={pedido.id}>
                            <ProductImage src={pedido.img} alt={pedido.nome} />
                            <p>{pedido.nome}</p>
                            <p>{pedido.preco}</p>
                            {!pedido.codigoRecebimento ? (
                                <Button onClick={() => confirmarRecebimento(pedido.id)}>Recebido</Button>
                            ) : (
                                <CodeDisplay>Código gerado: {pedido.codigoRecebimento}</CodeDisplay>
                            )}
                        </Card>
                    ))
                ) : (
                    <p>Nenhum pedido em andamento.</p>
                )}
            </Section>
        </Container>
    );
};

export default MeusPedidos;
