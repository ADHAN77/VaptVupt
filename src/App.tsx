import React from "react";
import Login from "./pages/Login/Login";
import GlobalStyle from "./globalStyles";

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyle />
      <Login />
    </div>
  );
};

export default App;