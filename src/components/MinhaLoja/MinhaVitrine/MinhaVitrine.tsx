import React, { useState } from "react";
import { 
    Container, Title, LogoContainer, Logo, FileInput, Form, Label, Input, TextArea, Button, 
    FormContainer
} from "./styles";

const MinhaVitrine: React.FC = () => {
    const [editando, setEditando] = useState(false);
    const [logo, setLogo] = useState<string | null>(null);
    const [loja, setLoja] = useState({
        nome: "Minha Loja",
        cnpj: "00.000.000/0000-00",
        endereco: "Rua Exemplo, 123 - Cidade",
        email: "contato@minhaloja.com",
        telefone: "(00) 00000-0000",
        bio: "Bem-vindo à minha loja! Temos os melhores produtos para você.",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setLoja((prevLoja) => ({ ...prevLoja, [name]: value }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setLogo(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    return (
        <Container>
            <Title>Minha Vitrine</Title>
            
            {/* Logo da loja */}
            <LogoContainer>
                <Logo src={logo || "https://via.placeholder.com/120"} alt="Logo da Loja" />
                <FileInput type="file" accept="image/*" onChange={handleImageChange} />
            </LogoContainer>

            {/* Informações da loja */}
            <FormContainer>
                <Form>
                    <Label>Nome da Loja:</Label>
                    <Input type="text" name="nome" value={loja.nome} onChange={handleInputChange} disabled={!editando} />

                    <Label>CPF/CNPJ:</Label>
                    <Input type="text" name="cnpj" value={loja.cnpj} onChange={handleInputChange} disabled={!editando} />

                    <Label>Endereço:</Label>
                    <Input type="text" name="endereco" value={loja.endereco} onChange={handleInputChange} disabled={!editando} />

                    <Label>E-mail:</Label>
                    <Input type="email" name="email" value={loja.email} onChange={handleInputChange} disabled={!editando} />

                    <Label>Telefone:</Label>
                    <Input type="text" name="telefone" value={loja.telefone} onChange={handleInputChange} disabled={!editando} />

                    <Label>Bio/Descrição:</Label>
                    <TextArea name="bio" value={loja.bio} onChange={handleInputChange} disabled={!editando} />
                </Form>
            </FormContainer>

            {/* Botão de ação */}
            <Button onClick={() => setEditando(!editando)} editando={editando}>
                {editando ? "Salvar" : "Editar Informações"}
            </Button>
        </Container>
    );
};

export default MinhaVitrine;
