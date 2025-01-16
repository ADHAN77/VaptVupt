import React from "react";
import Header from "../../components/Header/Header";
import Products from "../../components/Products/Products";
import SearchBarWithCategories from "../../components/SearchBar/SearchBarWithCategories";
import BannersHome from "../../components/BannersHome/BannersHome";

const Home: React.FC = () => {

    const handleCategorySelect = (category: string) => {
        console.log("Categoria selecionada:", category);
    };

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
        <Header />
        <div style={{ marginTop: "60px" }}> {/* Adiciona espaçamento após o Header */}
            <SearchBarWithCategories
                onCategorySelect={handleCategorySelect}
            />
            <BannersHome />
            <Products />
        </div>
    </div>
    );
};

export default Home;