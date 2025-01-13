import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContainer, LoginForm, Input, Button, Logo, PageContainer } from "./styles";
import logo from "../../assets/VaptVupt-Logo.png";

const Login: React.FC = () => {
    const [step, setStep] = useState<number>(1); // 1 = Login, 2 = Escolha de tipo, 3 = Cadastro
    const [userType, setUserType] = useState<"seller" | "buyer" | null>(null);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [storeName, setStoreName] = useState<string>("");
    const [cpfCnpj, setCpfCnpj] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [buyerName, setBuyerName] = useState<string>("");
    const [buyerCpf, setBuyerCpf] = useState<string>("");
    const [buyerAddress, setBuyerAddress] = useState<string>("");
    const [buyerHouseNumber, setBuyerHouseNumber] = useState<string>("");

    const navigate = useNavigate(); // Hook para navegação

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (step === 1) {
            // Lógica de validação (opcional)
            navigate("/home"); // Redirecionar para a Home ao logar
        } else if (step === 3) {
            if (userType === "seller") {
                console.log("Lojista:", { storeName, cpfCnpj, address, email, password });
            } else if (userType === "buyer") {
                console.log("Comprador:", { buyerName, buyerCpf, buyerAddress, buyerHouseNumber, email, password });
            }
            navigate("/home"); // Redirecionar para a Home ao cadastrar
        }
    };

    const goToStep2 = () => setStep(2);
    const goToStep3 = (isSeller: boolean) => {
        setStep(3);
        setUserType(isSeller ? "seller" : "buyer");
        if (isSeller) {
            setStoreName("");
        } else {
            setBuyerName("");
        }
    };

    const goBackToStep = () => {
        setStep(step - 1);
        setUserType(null);
    };

    return (
        <PageContainer>
            <Logo src={logo} alt="Logo" />
            <LoginContainer>
                <LoginForm onSubmit={handleSubmit}>
                    {step === 1 && (
                        <>
                            <h1>Login</h1>
                            <Input
                                type="email"
                                placeholder="E-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <Input
                                type="password"
                                placeholder="Senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <Button type="submit">Entrar</Button>
                            <Button type="button" onClick={goToStep2}>
                                Cadastre-se
                            </Button>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <h1>Escolha uma opção</h1>
                            <Button type="button" onClick={() => goToStep3(true)}>
                                Quero anunciar
                            </Button>
                            <Button type="button" onClick={() => goToStep3(false)}>
                                Quero comprar
                            </Button>
                            <Button type="button" onClick={goBackToStep}>
                                Voltar
                            </Button>
                        </>
                    )}

                    {step === 3 && (
                        <>
                            {userType === "seller" ? (
                                <>
                                    <h1>Cadastro de Lojista</h1>
                                    <Input
                                        type="text"
                                        placeholder="Nome da Loja"
                                        value={storeName}
                                        onChange={(e) => setStoreName(e.target.value)}
                                        required
                                    />
                                    <Input
                                        type="text"
                                        placeholder="CPF/CNPJ"
                                        value={cpfCnpj}
                                        onChange={(e) => setCpfCnpj(e.target.value)}
                                        required
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Endereço"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        required
                                    />
                                </>
                            ) : (
                                <>
                                    <h1>Cadastro de Comprador</h1>
                                    <Input
                                        type="text"
                                        placeholder="Nome"
                                        value={buyerName}
                                        onChange={(e) => setBuyerName(e.target.value)}
                                        required
                                    />
                                    <Input
                                        type="text"
                                        placeholder="CPF"
                                        value={buyerCpf}
                                        onChange={(e) => setBuyerCpf(e.target.value)}
                                        required
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Endereço"
                                        value={buyerAddress}
                                        onChange={(e) => setBuyerAddress(e.target.value)}
                                        required
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Número da casa"
                                        value={buyerHouseNumber}
                                        onChange={(e) => setBuyerHouseNumber(e.target.value)}
                                        required
                                    />
                                </>
                            )}

                            <Input
                                type="email"
                                placeholder="E-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <Input
                                type="password"
                                placeholder="Senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <Button type="submit">
                                Cadastrar {userType === "seller" ? "como Lojista" : "como Comprador"}
                            </Button>
                            <Button type="button" onClick={goBackToStep}>
                                Voltar
                            </Button>
                        </>
                    )}
                </LoginForm>
            </LoginContainer>
        </PageContainer>
    );
};

export default Login;
