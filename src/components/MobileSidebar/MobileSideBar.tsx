import React, { useState } from "react";
import { MenuOverlay, Sidebar, CategoryButton, SubcategoryList, SubcategoryItem, CategoryWrapper, CloseButton, Title } from "./styles";
import FecharIcon from "../../assets/icons/fechar.png"; // Importe o ícone de fechar

interface Props {
    onCategorySelect: (category: string) => void;
    isOpen: boolean;  // Agora o estado 'isOpen' será passado como prop
    toggleSidebar: () => void;  // A função 'toggleSidebar' será passada como prop
}

const MobileSidebar: React.FC<Props> = ({ onCategorySelect, isOpen, toggleSidebar }) => {
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

    const handleCategoryClick = (category: string) => {
        setExpandedCategory((prev) => (prev === category ? null : category));
    };

    return (
        <>
            {/* Menu Overlay */}
            {isOpen && <MenuOverlay onClick={toggleSidebar} />}
            
            {/* Sidebar */}
            <Sidebar isOpen={isOpen}>
                {/* Close Button */}
                <CloseButton onClick={toggleSidebar}>
                    <img src={FecharIcon} alt="Fechar" /> {/* Ícone de Fechar */}
                </CloseButton>
                
                {/* Title */}
                <Title>O que está procurando?</Title>
                
                {/* Categories */}
                <div>
                    {categories.map((category) => (
                        <CategoryWrapper key={category.name}>
                            <CategoryButton onClick={() => handleCategoryClick(category.name)}>
                                {category.name}
                            </CategoryButton>
                            {expandedCategory === category.name && (
                                <SubcategoryList>
                                    {category.subcategories.map((subcategory) => (
                                        <SubcategoryItem key={subcategory} onClick={() => onCategorySelect(subcategory)}>
                                            {subcategory}
                                        </SubcategoryItem>
                                    ))}
                                </SubcategoryList>
                            )}
                        </CategoryWrapper>
                    ))}
                </div>
            </Sidebar>
        </>
    );
};

export default MobileSidebar;
