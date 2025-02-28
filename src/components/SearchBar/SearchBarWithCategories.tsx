import React, { useState, useEffect, useRef } from "react";
import { Container, Categories, CategoryButton, SubcategoryList, SubcategoryItem, CategoryWrapper } from "./styles";

interface Props {
    onCategorySelect: (category: string) => void;
}

const SearchBar: React.FC<Props> = ({ onCategorySelect }) => {
    const categories = [
        {
            name: "Eletrônicos",
            subcategories: ["Celulares", "TVs", "Fones de Ouvido"],
        },
        {
            name: "Roupas",
            subcategories: ["Camisetas", "Calças", "Vestidos"],
        },
        {
            name: "Computadores",
            subcategories: ["Notebooks", "Desktops", "Acessórios"],
        },
        {
            name: "Eletrodomésticos",
            subcategories: ["Geladeiras", "Fogões", "Micro-ondas"],
        },
        {
            name: "Calçados",
            subcategories: ["Tênis", "Sandálias", "Botas"],
        },
        {
            name: "Bijuterias",
            subcategories: ["Colares", "Pulseiras", "Anéis"],
        },
        {
            name: "Livros",
            subcategories: ["Ficção", "Não Ficção", "Acadêmicos"],
        },
        {
            name: "Esportes",
            subcategories: ["Bolas", "Chuteiras", "Equipamentos"],
        },
    ];

    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
    const subcategoryRef = useRef<HTMLUListElement | null>(null); // Referência ajustada

    const handleCategoryClick = (category: string) => {
        setExpandedCategory((prev) => (prev === category ? null : category));
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            subcategoryRef.current &&
            !subcategoryRef.current.contains(event.target as Node)
        ) {
            setExpandedCategory(null);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <Container>
            <div className="inner-container">
                <Categories>
                    {categories.map((category) => (
                        <CategoryWrapper key={category.name}>
                            <CategoryButton
                                onClick={() => handleCategoryClick(category.name)}
                            >
                                {category.name}
                            </CategoryButton>
                            {expandedCategory === category.name && (
                                <SubcategoryList ref={subcategoryRef}>
                                    {category.subcategories.map((subcategory) => (
                                        <SubcategoryItem
                                            key={subcategory}
                                            onClick={() => onCategorySelect(subcategory)}
                                        >
                                            {subcategory}
                                        </SubcategoryItem>
                                    ))}
                                </SubcategoryList>
                            )}
                        </CategoryWrapper>
                    ))}
                </Categories>
            </div>
        </Container>
    );
    
};

export default SearchBar;
