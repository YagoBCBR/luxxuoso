import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Feed from '../pages/Feed';
import ClubeDePontos from '../pages/ClubeDePontos';
import Cursos from '../pages/Cursos';
import Profile from '../pages/Profile';
import EditProfile from '../pages/EditProfile';
import PointsForm from '../pages/PointsForm';
import RewardsForm from '../pages/RewardsForm';
import NewPost from '../pages/NewPost';
// import PostsUsers from '../pages/PostsUsers';
import Settings from '../pages/Settings';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="Feed"
            component={Feed}
            options={{
                headerShown: false
            }}
            />

            <Stack.Screen 
            name="NewPost"
            component={NewPost}
            />

            <Stack.Screen 
            name="Profile"
            component={Profile}
            />
            
            {/* <Stack.Screen 
            name="PostsUsers"
            component={PostsUsers}
            /> */}
        </Stack.Navigator>
    )
}

function AppRoutes(){
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#000',
                tabBarInactiveTintColor: '#995D90',

                tabBarStyle:{
                    backgroundColor: '#D9D9D9',
                    borderTopWidth: 0
                }

            }}
        >
            <Tab.Screen 
            name='Feed' 
            component={StackRoutes}
            options={{
                tabBarIcon: ({ color, size }) => {
                    return <Feather name="globe" color={color} size={size} />
                }
            }}
            />

            <Tab.Screen 
            name='Clube' 
            component={ClubeDePontos} 
            options={{
                tabBarIcon: ({ color, size }) => {
                    return <Feather name="star" color={color} size={size} />
                }
            }}
            />

            <Tab.Screen 
            name='Home' 
            component={Home} 
            options={{
                tabBarIcon: ({ color, size }) => {
                    return <Feather name="home" color={color} size={size} />
                }
            }}
            />

            <Tab.Screen 
            name='Cursos' 
            component={Cursos} 
            options={{
                tabBarIcon: ({color, size}) => {
                    return <Feather name="tv" color={color} size={size} />
                }
            }}
            />

            <Tab.Screen 
            name='Perfil' 
            component={Profile}
            options={{
                tabBarIcon: ({color, size}) => {
                    return <Feather name="user" color={color} size={size} />
                }
            }} 
            />

        </Tab.Navigator>
    )
}

export default AppRoutes;