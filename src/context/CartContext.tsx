import React, { createContext, useContext, useState, ReactNode } from "react";

// Definição do tipo do produto no carrinho
interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

// Definição do tipo do contexto
interface CartContextType {
    cart: CartItem[];
    addToCart: (product: CartItem) => void;
    updateQuantity: (id: number, quantity: number) => void;
    removeItem: (id: number) => void;
}

// Criando o contexto
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider para envolver a aplicação
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (product: CartItem) => {
        setCart((prevCart) => {
        const existingItem = prevCart.find((item) => item.id === product.id);
        if (existingItem) {
            return prevCart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
        } else {
            return [...prevCart, { ...product, quantity: 1 }];
        }
        });
    };

    const updateQuantity = (id: number, quantity: number) => {
        setCart((prevCart) =>
        prevCart.map((item) =>
            item.id === id ? { ...item, quantity } : item
        )
        );
    };

    const removeItem = (id: number) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeItem }}>
        {children}
        </CartContext.Provider>
    );
};

// Hook para usar o contexto
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart deve ser usado dentro de um CartProvider");
    }
    return context;
};
