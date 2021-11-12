import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ListIndex from './list/listIndex';
import ChatIndex from './chat/chatIndex';
import RecommendIndex from './recommend/recommendIndex';

const Tab = createBottomTabNavigator();

export default function MainIndex() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "ListIndex") {
                        iconName = focused ? 'people' : 'people-outline';
                    }
                    else if (route.name === "ChatIndex") {
                        iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
                    }
                    else if (route.name === "RecommendIndex") {
                        iconName = focused ? 'person-add' : 'person-add-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color}></Ionicons>;
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray',
            })}>
            <Tab.Screen name="ListIndex" component={ListIndex}></Tab.Screen>
            <Tab.Screen name="ChatIndex" component={ChatIndex}></Tab.Screen>
            <Tab.Screen name="RecommendIndex" component={RecommendIndex}></Tab.Screen>
        </Tab.Navigator>
    );
}