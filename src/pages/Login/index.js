import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { Container, 
        Title, 
        Logo, 
        Input, 
        Button, 
        ButtonText,
        AreaInput } from './styles';

import {
        CreateAccountText,
        ButtonCreateAccount, 
        ButtonTextCreateAccount, 
        WelcomeTitle,
        WelcomeTitleBold, 
        WelcomeSubTitle } from '../NewAccount/styles'

function Login(){
    const [login, setLogin] = useState(true);
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [confirmationEmail, setConfirmationEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmationPassword, setConfirmationPassword] = useState("");
    const [birthdate, setBirthdate] = useState("");

    function toggleLogin(){
        setLogin(!login)
        setUsername('')
        setName('')
        setPassword('')
        setConfirmationPassword('')
        setBirthdate('')
        setEmail('')
        setConfirmationEmail('')
    }
    
    function handleSignIn(){
        if(email === '' || password === ''){
            console.log("PREENCHA TODOS OS CAMPOS")
            return
        }

        // Fazer o login do user

    }

    function handleSignUp(){
        if(name === '' || username === '' || email === '' || confirmationEmail === '' || confirmationEmail != email || password === '' || confirmationPassword === '' || confirmationPassword != password || birthdate === ''){
            console.log("PREENCHA TODOS OS CAMPOS PARA CADASTRAR")
            return
        }

        // Fazer o login do user
        
    }

    if (login){
        return(
            <Container>
                <Logo
                    source={require('../../assets/luxxuoso.png')}
                />
                <AreaInput>
                    <Input
                        placeholder="Digite seu usuário"
                        value={email}
                        onChangeText={ (text) => setEmail(text) }
                    />
                </AreaInput>
                <AreaInput>    
                    <Input
                        placeholder="Digite sua senha"
                        value={password}
                        onChangeText={ (text) => setPassword(text) }
                    />
                </AreaInput>
                <Button onPress={handleSignIn}>
                    <ButtonText>ENTRAR</ButtonText>
                </Button>
                <View>
                    <CreateAccountText>Não possui uma conta? Crie agora mesmo!</CreateAccountText>
                </View>
                <ButtonCreateAccount onPress={toggleLogin}>
                    <ButtonTextCreateAccount>CRIAR CONTA</ButtonTextCreateAccount>
                </ButtonCreateAccount>
    
            </Container>
        )
    };

    return(
        <Container>
            <AreaInput>
                <WelcomeTitle>Olá, <WelcomeTitleBold>Luxxuoso(a)!</WelcomeTitleBold></WelcomeTitle>
            </AreaInput>
            <AreaInput>
                <WelcomeSubTitle>Preencha os dados abaixo e crie sua conta!</WelcomeSubTitle>
            </AreaInput>
            <AreaInput>    
                <Input
                    placeholder="Digite seu nome"
                    value={name}
                    onChangeText={ (text) => setName(text) }
                />
            </AreaInput>
            <AreaInput>
                <Input
                    placeholder="Digite seu usuário"
                    value={username}
                    onChangeText={ (text) => setUsername(text) }
                />
            </AreaInput>
            <AreaInput>    
                <Input
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChangeText={ (text) => setEmail(text) }
                />
            </AreaInput>
            <AreaInput>    
                <Input
                    placeholder="Confirme seu e-mail"
                    value={confirmationEmail}
                    onChangeText={ (text) => setConfirmationEmail(text) }
                />
            </AreaInput>
            <AreaInput>    
                <Input
                    placeholder="Digite sua senha"
                    value={password}
                    onChangeText={ (text) => setPassword(text) }
                />
            </AreaInput>
            <AreaInput>    
                <Input
                    placeholder="Confirme sua senha"
                    value={confirmationPassword}
                    onChangeText={ (text) => setConfirmationPassword(text) }
                />
            </AreaInput>
            <AreaInput>    
                <Input
                    placeholder="Qual é a data do seu aniversário?"
                    value={birthdate}
                    onChangeText={ (text) => setBirthdate(text) }
                />
            </AreaInput>
            <Button onPress={handleSignUp}>
                <ButtonText>CRIAR CONTA</ButtonText>
            </Button>
            <View>
                <CreateAccountText>Já possui uma conta? Faça login abaixo!</CreateAccountText>
            </View>
            <ButtonCreateAccount onPress={toggleLogin}>
                <ButtonTextCreateAccount>FAZER LOGIN NA MINHA CONTA</ButtonTextCreateAccount>
            </ButtonCreateAccount>

        </Container>
    )
}

export default Login;