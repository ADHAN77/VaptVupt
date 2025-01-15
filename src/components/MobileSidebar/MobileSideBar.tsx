import React, { useState } from "react";
import { 
    MenuOverlay, 
    Sidebar, 
    CategoryButton, 
    SubcategoryList, 
    SubcategoryItem, 
    CategoryWrapper, 
    CloseButton, 
    Title, 
    IconWrapper 
} from "./styles";
import FecharIcon from "../../assets/icons/fechar.png"; // Ícone de fechar
import EletronicosIcon from "../../assets/icons/eletronicos.png";
import RoupasIcon from "../../assets/icons/roupas.png";
import ComputadoresIcon from "../../assets/icons/computadores.png";
import EletrodomesticosIcon from "../../assets/icons/eletrodomerticos.png";
import CalcadosIcon from "../../assets/icons//calcados.png";
import BijuteriasIcon from "../../assets/icons//bijuterias.png";
import LivrosIcon from "../../assets/icons/livros.png";
import EsportesIcon from "../../assets/icons/esportes.png";

interface Props {
    onCategorySelect: (category: string) => void;
    isOpen: boolean;  // Agora o estado 'isOpen' será passado como prop
    toggleSidebar: () => void;  // A função 'toggleSidebar' será passada como prop
}

const MobileSidebar: React.FC<Props> = ({ onCategorySelect, isOpen, toggleSidebar }) => {
    const categories = [
        {
            name: "Eletrônicos",
            icon: EletronicosIcon,
            subcategories: ["Celulares", "TVs", "Fones de Ouvido"],
        },
        {
            name: "Roupas",
            icon: RoupasIcon,
            subcategories: ["Camisetas", "Calças", "Vestidos"],
        },
        {
            name: "Computadores",
            icon: ComputadoresIcon,
            subcategories: ["Notebooks", "Desktops", "Acessórios"],
        },
        {
            name: "Eletrodomésticos",
            icon: EletrodomesticosIcon,
            subcategories: ["Geladeiras", "Fogões", "Micro-ondas"],
        },
        {
            name: "Calçados",
            icon: CalcadosIcon,
            subcategories: ["Tênis", "Sandálias", "Botas"],
        },
        {
            name: "Bijuterias",
            icon: BijuteriasIcon,
            subcategories: ["Colares", "Pulseiras", "Anéis"],
        },
        {
            name: "Livros",
            icon: LivrosIcon,
            subcategories: ["Ficção", "Não Ficção", "Acadêmicos"],
        },
        {
            name: "Esportes",
            icon: EsportesIcon,
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
                    <img src={FecharIcon} alt="Fechar" />
                </CloseButton>
                
                {/* Title */}
                <Title>O que está procurando?</Title>
                
                {/* Categories */}
                <div>
                    {categories.map((category) => (
                        <CategoryWrapper key={category.name}>
                            <CategoryButton onClick={() => handleCategoryClick(category.name)}>
                                <IconWrapper>
                                    <img src={category.icon} alt={category.name} />
                                </IconWrapper>
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
