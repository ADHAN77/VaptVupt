import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import PerfilPage from "./pages/PerfilPage/PerfilPage";
// Import outras páginas aqui quando criá-las

const AppRoutes: React.FC = () => {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/perfil" element={<PerfilPage />} />
        </Routes>
        </Router>
    );
};

export default AppRoutes;