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

    function toggleLogin(){
        setLogin(!login)
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
                    />
                </AreaInput>
                <AreaInput>    
                    <Input
                        placeholder="Digite sua senha"
                    />
                </AreaInput>
                <Button>
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
                    placeholder="Digite seu usuário"
                />
            </AreaInput>
            <AreaInput>    
                <Input
                    placeholder="Digite seu e-mail"
                />
            </AreaInput>
            <AreaInput>    
                <Input
                    placeholder="Confirme seu e-mail"
                />
            </AreaInput>
            <AreaInput>    
                <Input
                    placeholder="Digite sua senha"
                />
            </AreaInput>
            <AreaInput>    
                <Input
                    placeholder="Confirme sua senha"
                />
            </AreaInput>
            <AreaInput>    
                <Input
                    placeholder="Qual é a data do seu aniversário?"
                />
            </AreaInput>
            <Button>
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