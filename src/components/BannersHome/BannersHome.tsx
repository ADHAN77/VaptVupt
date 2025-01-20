import React from "react";
import { BannerContainer, BannerItem } from "./styles";
import bannerImage from "../../assets/banners/BANNER-VAPTVUPT.jpg"; // Caminho relativo ao componente

const BannersHome: React.FC = () => {
    return (
        <BannerContainer>
            <BannerItem src={bannerImage} alt="Banner Home" />
        </BannerContainer>
    );
};

export default BannersHome;
