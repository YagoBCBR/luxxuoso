import React from 'react';
import { View, Text } from 'react-native';

import { Container, Title, Input, Button, ButtonText } from './styles';

function Login(){
    return(
        <Container>
            <Title>
                <Text style={{ color: '#995D90' }}>Luxxuoso</Text>
            </Title>

            <Input
                placeholder="seuemail@teste.com.br"
            />

            
            <Input
                placeholder="************"
            />

            <Button>
                <ButtonText>Acessar</ButtonText>
            </Button>

        </Container>
    )
}

export default Login;