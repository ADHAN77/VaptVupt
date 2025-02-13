import { useCart } from "../../context/CartContext";
import {
    SidebarContainer,
    SidebarOverlay,
    CloseButton,
    Title,
    CartList,
    CartItem,
    ItemImage,
    ItemInfo,
    QuantityControl,
    RemoveButton,
    Footer,
    TotalText,
    CheckoutButton,
    EmptyCartMessage,
    QuantityWrapper,
    ProductPrice,
    TitlePriceWrapper,
    ProductTitle,
} from "./styles";
import CloseIcon from "../../assets/icons/fechar.png";
import LixeiraIcon from "../../assets/icons/lixeira.png";

interface CartSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
    const { cart, updateQuantity, removeItem } = useCart();

    // Calcular o total diretamente no JSX
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <>
            {isOpen && <SidebarOverlay onClick={onClose} />}
            <SidebarContainer isOpen={isOpen}>
                <CloseButton onClick={onClose}>
                    <img src={CloseIcon} alt="Fechar" />
                </CloseButton>
                <Title>Carrinho de compras</Title>

                <CartList>
                    {cart.length > 0 ? cart.map(item => (
                        <CartItem key={item.id}>
                            <ItemImage src={item.image} alt={item.name} />
                            <ItemInfo>
                                <TitlePriceWrapper>
                                    <ProductTitle>{item.name}</ProductTitle>
                                    <ProductPrice>R${item.price.toFixed(2)}</ProductPrice>
                                </TitlePriceWrapper>
                            </ItemInfo>
                            <QuantityWrapper>
                                <QuantityControl>
                                    <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                </QuantityControl>
                                <RemoveButton onClick={() => removeItem(item.id)}>
                                    <img src={LixeiraIcon} alt="Lixeira" />
                                </RemoveButton>
                            </QuantityWrapper>
                        </CartItem>
                    )) : <EmptyCartMessage>Seu carrinho está vazio.</EmptyCartMessage>}
                </CartList>

                <Footer>
                    {/* Renderize o total aqui */}
                    <TotalText>Total: R$ {total.toFixed(2)}</TotalText>
                    <CheckoutButton>Finalizar Pedido</CheckoutButton>
                </Footer>
            </SidebarContainer>
        </>
    );
}
