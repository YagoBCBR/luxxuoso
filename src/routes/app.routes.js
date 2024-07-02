import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Feed from '../pages/Feed';
import ClubeDePontos from '../pages/ClubeDePontos';
import EditProfile from '../pages/EditProfile';
import NewPost from '../pages/NewPost';
import Profile from '../pages/Profile';
import Search from '../pages/Search';

const Tab = createBottomTabNavigator();

function AppRoutes(){
    return(
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Feed' component={Feed} />
            <Tab.Screen name='ClubeDePontos' component={ClubeDePontos} />
            <Tab.Screen name='EditProfile' component={EditProfile} />
            <Tab.Screen name='NewPost' component={NewPost} />
            <Tab.Screen name='Profile' component={Profile} />
            <Tab.Screen name='Search' component={Search} />
        </Tab.Navigator>
    )
}

export default AppRoutes;