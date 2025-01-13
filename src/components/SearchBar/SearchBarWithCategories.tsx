import React from "react";
import { Container, Categories, CategoryButton } from "./styles";

interface Props {
    onCategorySelect: (category: string) => void;
}

const SearchBar: React.FC<Props> = ({ onCategorySelect }) => {
    const categories = [
        "Smartphones",
        "Roupas",
        "Computadores",
        "Eletrodomésticos",
        "TVs",
        "Calçados",
        "Bijuterias",
        "Livros",
        "Esportes",
    ];

    return (
        <Container>
            <div className="inner-container">
            <Categories>
                {categories.map((category) => (
                    <CategoryButton
                        key={category}
                        onClick={() => onCategorySelect(category)}
                    >
                        {category}
                    </CategoryButton>
                ))}
            </Categories>
            </div>
        </Container>
    );
};

export default SearchBar;
