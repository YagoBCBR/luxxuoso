import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import { AuthContext } from '../contexts/auth';

function Routes(){
    const { signed } = useContext(AuthContext);
    const loading = false;
    
    if(loading){
        return(
            <View 
            style={{
                flex:1, 
                justifyContent: 'center', 
                alignItems: 'center', 
                backgroundColor: '#fff'
            }}>
                <ActivityIndicator size={50} color="#995D90" />
            </View>
        )    
    }

    return(
        signed ? <AppRoutes/> : <AuthRoutes/>
    )
}

export default Routes;
