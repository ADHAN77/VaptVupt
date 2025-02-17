import { useState } from "react";
import { Container, InfoContainer, InfoItem, Input, Textarea, EditButton, SaveButton } from "./styles";

interface Usuario {
    nome: string;
    telefone: string;
    email: string;
    endereco: string;
    complemento: string;
    cpf: string;
    cep: string;
}

const usuarioFicticio: Usuario = {
    nome: "João Silva",
    telefone: "1234-5678",
    email: "joao.silva@example.com",
    endereco: "Rua Exemplo, 123",
    complemento: "Apto 202, Bloco B, 2º andar",
    cpf: "123.456.789-00",
    cep: "12345-678",
};

const MeusInformacoes = () => {
    const [usuario, setUsuario] = useState<Usuario>(usuarioFicticio);
    const [editMode, setEditMode] = useState<boolean>(false);
    const [editData, setEditData] = useState<Usuario | null>(null);

    const handleEdit = () => {
        setEditData(usuario); // Armazenar os dados atuais para edição
        setEditMode(true); // Habilitar modo de edição
    };

    const handleSave = () => {
        if (editData) {
            setUsuario(editData); // Atualizar os dados do usuário
            setEditMode(false); // Desabilitar modo de edição
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEditData((prevData) => ({
            ...prevData!,
            [name]: value,
        }));
    };

    return (
        <Container>
            <InfoContainer>
                <h2>Informações Pessoais</h2>
                <InfoItem>
                    <strong>Nome:</strong>
                    {editMode ? (
                        <Input
                            type="text"
                            name="nome"
                            value={editData?.nome}
                            onChange={handleChange}
                        />
                    ) : (
                        <span>{usuario.nome}</span>
                    )}
                </InfoItem>
                <InfoItem>
                    <strong>Telefone:</strong>
                    {editMode ? (
                        <Input
                            type="text"
                            name="telefone"
                            value={editData?.telefone}
                            onChange={handleChange}
                        />
                    ) : (
                        <span>{usuario.telefone}</span>
                    )}
                </InfoItem>
                <InfoItem>
                    <strong>Email:</strong>
                    {editMode ? (
                        <Input
                            type="email"
                            name="email"
                            value={editData?.email}
                            onChange={handleChange}
                        />
                    ) : (
                        <span>{usuario.email}</span>
                    )}
                </InfoItem>
                <InfoItem>
                    <strong>Endereço:</strong>
                    {editMode ? (
                        <Input
                            type="text"
                            name="endereco"
                            value={editData?.endereco}
                            onChange={handleChange}
                        />
                    ) : (
                        <span>{usuario.endereco}</span>
                    )}
                </InfoItem>
                <InfoItem>
                    <strong>Complemento:</strong>
                    {editMode ? (
                        <Textarea
                            name="complemento"
                            value={editData?.complemento}
                            onChange={handleChange}
                            maxLength={80} // Limita a 150 caractere
                        />
                    ) : (
                        <span>{usuario.complemento}</span>
                    )}
                </InfoItem>
                <InfoItem>
                    <strong>CPF:</strong>
                    {editMode ? (
                        <Input
                            type="text"
                            name="cpf"
                            value={editData?.cpf}
                            onChange={handleChange}
                        />
                    ) : (
                        <span>{usuario.cpf}</span>
                    )}
                </InfoItem>
                <InfoItem>
                    <strong>CEP:</strong>
                    {editMode ? (
                        <Input
                            type="text"
                            name="cep"
                            value={editData?.cep}
                            onChange={handleChange}
                        />
                    ) : (
                        <span>{usuario.cep}</span>
                    )}
                </InfoItem>

                {editMode ? (
                    <SaveButton onClick={handleSave}>Salvar</SaveButton>
                ) : (
                    <EditButton onClick={handleEdit}>Editar</EditButton>
                )}
            </InfoContainer>
        </Container>
    );
};

export default MeusInformacoes;
