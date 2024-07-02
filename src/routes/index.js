import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

function Routes(){
    const signed = false;
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
