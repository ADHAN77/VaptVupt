import React from "react";
import AppRoutes from "./routes";
import GlobalStyle from "./globalStyles";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  );
};

export default App;