import React from 'react';
import { View, Text } from 'react-native';

import { Container, 
        Title, 
        Logo, 
        Input, 
        Button, 
        ButtonText,
        AreaInput } from './styles';

function Login(){
    return(
        <Container>
            
            <Logo
                source={require('../../assets/luxxuoso.png')}
            />
            
            <AreaInput>
                <Input
                    placeholder="seuemail@teste.com.br"
                />
            </AreaInput>
            
            <AreaInput>    
                <Input
                    placeholder="************"
                />
            </AreaInput>

            <Button>
                <ButtonText>ENTRAR</ButtonText>
            </Button>

        </Container>
    )
}

export default Login;