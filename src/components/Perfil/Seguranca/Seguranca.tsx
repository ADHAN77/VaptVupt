import { useState } from "react";
import { Container, Label, Input, Button } from "./styles";

const Seguranca = () => {
    const [senhaAtual, setSenhaAtual] = useState("");
    const [novaSenha, setNovaSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Verificação simples para garantir que as senhas sejam iguais
        if (novaSenha !== confirmarSenha) {
        setErrorMessage("As senhas não coincidem.");
        return;
        }

        if (novaSenha.length < 6) {
        setErrorMessage("A nova senha deve ter pelo menos 6 caracteres.");
        return;
        }

        // Aqui seria o código para enviar os dados ao backend
        alert("Senha alterada com sucesso!");
    };

    return (
        <Container>
        <h2>Alterar Senha</h2>
        <form onSubmit={handleSubmit}>
            <div>
            <Label htmlFor="senhaAtual">Senha Atual</Label>
            <Input
                type="password"
                id="senhaAtual"
                value={senhaAtual}
                onChange={(e) => setSenhaAtual(e.target.value)}
                required
            />
            </div>

            <div>
            <Label htmlFor="novaSenha">Nova Senha</Label>
            <Input
                type="password"
                id="novaSenha"
                value={novaSenha}
                onChange={(e) => setNovaSenha(e.target.value)}
                required
            />
            </div>

            <div>
            <Label htmlFor="confirmarSenha">Confirmar Nova Senha</Label>
            <Input
                type="password"
                id="confirmarSenha"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                required
            />
            </div>

            {errorMessage && <p>{errorMessage}</p>}

            <Button type="submit">Alterar Senha</Button>
        </form>
        </Container>
    );
};

export default Seguranca;
