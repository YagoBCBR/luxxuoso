import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';

import { AuthContext } from '../../contexts/auth';

function Settings(){
    const { signOut } = useContext(AuthContext);
    
    async function handleSignOut(){
        await signOut();
    }
    
    return(
        <View>
            <Text>TELA DE CONFIGURAÇÕES</Text>
            <Button title="Logout" 
            onPress={handleSignOut}/>
        </View>
    )
}

export default Settings;