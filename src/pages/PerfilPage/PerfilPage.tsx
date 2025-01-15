import React, { useState } from "react";
import {
    InfoItem,
    InfoLabel,
    InfoValue,
    OptionButton,
    ProfileContainer,
    ProfileContent,
    ProfileHeader,
    ProfileName,
    Section,
    SectionTitle,
    EditSection,
    BackButton,
} from "./styles";

const PerfilPage: React.FC = () => {
    const [isEditingInfo, setIsEditingInfo] = useState(false);
    const [isChangingPassword, setIsChangingPassword] = useState(false);

    const toggleEditInfo = () => {
        setIsEditingInfo((prev) => !prev);
        if (isChangingPassword) setIsChangingPassword(false); // Fecha a seção de senha, se aberta
    };

    const toggleChangePassword = () => {
        setIsChangingPassword((prev) => !prev);
        if (isEditingInfo) setIsEditingInfo(false); // Fecha a seção de edição, se aberta
    };

    const handleBackToHome = () => {
        window.location.href = "/home"; // Redireciona para a Home
    };

    return (
        <ProfileContainer>
            <ProfileHeader>
                <ProfileName>Nome da Pessoa</ProfileName> {/* Alterado de "Nome do Usuário" para "Nome da Loja" */}
            </ProfileHeader>

            <ProfileContent>
                {/* Informações Pessoais */}
                <Section>
                    <SectionTitle>Informações Pessoais</SectionTitle>
                    <InfoItem>
                        <InfoLabel>Nome:</InfoLabel>
                        <InfoValue>João da Silva</InfoValue>
                    </InfoItem>
                    <InfoItem>
                        <InfoLabel>Email:</InfoLabel>
                        <InfoValue>joao.silva@email.com</InfoValue>
                    </InfoItem>
                    <InfoItem>
                        <InfoLabel>Telefone:</InfoLabel>
                        <InfoValue>(11) 98765-4321</InfoValue>
                    </InfoItem>
                    <InfoItem>
                        <InfoLabel>Endereço:</InfoLabel>
                        <InfoValue>Rua das Flores, 123</InfoValue>
                    </InfoItem>
                    <InfoItem>
                        <InfoLabel>CPF:</InfoLabel>
                        <InfoValue>123.456.789-00</InfoValue>
                    </InfoItem>
                </Section>

                {/* Configurações */}
                <Section>
                    <SectionTitle>Configurações</SectionTitle>
                    <OptionButton onClick={toggleChangePassword}>
                        Alterar Senha
                    </OptionButton>
                    <OptionButton onClick={toggleEditInfo}>
                        Editar Informações
                    </OptionButton>
                </Section>

                {/* Seção para Alterar Senha */}
                {isChangingPassword && (
                    <EditSection>
                        <h3>Alterar Senha</h3>
                        <label>
                            Senha Atual:
                            <input type="password" placeholder="Digite sua senha atual" />
                        </label>
                        <label>
                            Nova Senha:
                            <input type="password" placeholder="Digite sua nova senha" />
                        </label>
                        <label>
                            Confirmar Nova Senha:
                            <input
                                type="password"
                                placeholder="Confirme sua nova senha"
                            />
                        </label>
                        <OptionButton>Salvar</OptionButton>
                    </EditSection>
                )}

                {/* Seção para Editar Informações */}
                {isEditingInfo && (
                    <EditSection>
                        <h3>Editar Informações</h3>
                        <label>
                            Nome:
                            <input type="text" defaultValue="João da Silva" />
                        </label>
                        <label>
                            Email:
                            <input type="email" defaultValue="joao.silva@email.com" />
                        </label>
                        <label>
                            Telefone:
                            <input type="tel" defaultValue="(11) 98765-4321" />
                        </label>
                        <label>
                            Endereço:
                            <input type="text" defaultValue="Rua das Flores, 123" />
                        </label>
                        <OptionButton>Salvar</OptionButton>
                    </EditSection>
                )}
            </ProfileContent>

            {/* Botão para voltar à Home */}
            <BackButton onClick={handleBackToHome}>Voltar para Home</BackButton>
        </ProfileContainer>
    );
};

export default PerfilPage;
