import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Feed from '../pages/Feed';
import ClubeDePontos from '../pages/ClubeDePontos';
import NewPost from '../pages/NewPost';
import Profile from '../pages/Profile';

const Tab = createBottomTabNavigator();

function AppRoutes(){
    return(
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Feed' component={Feed} />
            <Tab.Screen name='Clube' component={ClubeDePontos} />
            <Tab.Screen name='Postar' component={NewPost} />
            <Tab.Screen name='Perfil' component={Profile} />
        </Tab.Navigator>
    )
}

export default AppRoutes;