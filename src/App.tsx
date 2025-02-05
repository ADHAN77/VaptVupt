import React from "react";
import AppRoutes from "./routes";
import GlobalStyle from "./globalStyles";
import { CartProvider } from "./context/CartContext";

const App: React.FC = () => {
  return (
    <CartProvider>
      <GlobalStyle />
      <AppRoutes />
    </CartProvider>
  );
};

export default App;