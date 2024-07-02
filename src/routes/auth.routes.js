import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from '../pages/Login';
import NewAccount from '../pages/NewAccount';

const Stack = createNativeStackNavigator();

function AuthRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" Component={Login} options={{headerShown: false }} />
            <Stack.Screen name="NewAccount" Component={NewAccount} options={{headerShown: false }} />
        </Stack.Navigator>
    )
}

export default AuthRoutes;