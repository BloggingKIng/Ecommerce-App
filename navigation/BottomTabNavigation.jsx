import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Search, Profile } from '../screens';
import { Ionicons } from '@expo/vector-icons';
import {COLORS} from '../constants/theme';

const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard:false,
    headerShown:false,
    tabBarStyle: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        elevation: 0,
        height:70,
    },

}

export default function BottomNavigation (){
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({focused}) =>{
                    return (
                        <Ionicons name={focused ? 'home' : 'home-outline'} size={24} color={focused ? COLORS.primary : COLORS.gray} />
                    )
                }
            }}/>
            <Tab.Screen name="Search" component={Search} options={{
                tabBarIcon: ({focused}) =>{
                    return (
                        <Ionicons name={focused ? 'search' : 'search-outline'} size={24} color={focused ? COLORS.primary : COLORS.gray} />
                    )
                }
            }}/>
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({focused}) =>{
                    return (
                        <Ionicons name={focused ? 'person' : 'person-outline'} size={24} color={focused ? COLORS.primary : COLORS.gray} />
                    )
                }
            }}/>
        </Tab.Navigator>
    )
}