import React, { useState } from "react";
import {
    OrdersPanel,
    OrderCard,
    OrderButton,
    CodeInput,
    ModalOverlay,
    ModalContent,
    CloseButton,
} from "./styles";
import pocox7 from "../../../assets/Eletronicos/POCO-X7.webp";
import notbook from "../../../assets/Eletronicos/Notebook-VAIO.webp";

// Dados fictícios para pedidos pendentes
const pedidosPendentesFicticios = [
    {
        id: 1,
        product: "Smartphone X",
        buyerCode: "ABC123",
        img: pocox7,
        nome: "Carlos Silva",
        endereco: "Rua das Flores, 123",
        complemento: "Apto 202",
        cpf: "123.456.789-00",
        pagamento: "Pix",
        quantidade: 2,
    },
    {
        id: 2,
        product: "Notebook Pro",
        buyerCode: "XYZ789",
        img: notbook,
        nome: "Ana Souza",
        endereco: "Av. Central, 45",
        complemento: "Casa",
        cpf: "987.654.321-00",
        pagamento: "Dinheiro",
        quantidade: 1,
    },
];

const Pedidos: React.FC = () => {
    const [pedidosPendentes, setPedidosPendentes] = useState(pedidosPendentesFicticios);
    const [codigoDigitado, setCodigoDigitado] = useState<{ [key: number]: string }>({});
    const [mostrandoCampo, setMostrandoCampo] = useState<{ [key: number]: boolean }>({});
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [pedidoSelecionado, setPedidoSelecionado] = useState<any | null>(null);

    const confirmarVenda = (id: number, codigoCorreto: string) => {
        if (codigoDigitado[id] === codigoCorreto) {
            alert("Venda confirmada!");
            setPedidosPendentes(pedidosPendentes.filter((pedido) => pedido.id !== id));
        } else {
            alert("Código incorreto. Tente novamente.");
        }
    };

    return (
        <OrdersPanel>
            <h2>Pedidos Pendentes</h2>
            {pedidosPendentes.length > 0 ? (
                pedidosPendentes.map((pedido) => (
                    <OrderCard key={pedido.id} onClick={() => setPedidoSelecionado(pedido)}>
    <img src={pedido.img} alt={pedido.product} />
    <p>{pedido.product}</p>
    {mostrandoCampo[pedido.id] ? (
        <>
            <CodeInput
                type="text"
                placeholder="Insira o código do comprador"
                value={codigoDigitado[pedido.id] || ""}
                onClick={(e) => e.stopPropagation()} // Impede que o clique no input abra a modal
                onChange={(e) =>
                    setCodigoDigitado({ ...codigoDigitado, [pedido.id]: e.target.value })
                }
            />
            <OrderButton 
                onClick={(e) => {
                    e.stopPropagation(); // Impede que o clique no botão abra a modal
                    confirmarVenda(pedido.id, pedido.buyerCode);
                }}
            >
                Confirmar Venda
            </OrderButton>
        </>
    ) : (
        <OrderButton 
            onClick={(e) => {
                e.stopPropagation(); // Impede que o clique no botão abra a modal
                setMostrandoCampo({ ...mostrandoCampo, [pedido.id]: true });
            }}
        >
            Enviado
        </OrderButton>
    )}
</OrderCard>
                ))
            ) : (
                <p>Nenhum pedido pendente.</p>
            )}

            {/* Modal de Detalhes do Pedido */}
            {pedidoSelecionado && (
                <ModalOverlay onClick={() => setPedidoSelecionado(null)}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <CloseButton onClick={() => setPedidoSelecionado(null)}>✖</CloseButton>
                        <h3>Detalhes do Pedido</h3>
                        <p><strong>Nome:</strong> {pedidoSelecionado.nome}</p>
                        <p><strong>Endereço:</strong> {pedidoSelecionado.endereco}, {pedidoSelecionado.complemento}</p>
                        <p><strong>CPF:</strong> {pedidoSelecionado.cpf}</p>
                        <p><strong>Forma de Pagamento:</strong> {pedidoSelecionado.pagamento}</p>
                        <p><strong>Quantidade:</strong> {pedidoSelecionado.quantidade}</p>
                    </ModalContent>
                </ModalOverlay>
            )}
        </OrdersPanel>
    );
};

export default Pedidos;
