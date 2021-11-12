import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Chat from './chat';
import ChatDetail from './chatDetail';

const Stack = createNativeStackNavigator();

export default function ChatIndex() {
    return (
        <Stack.Navigator initialRouteName="Chat"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Chat" component={Chat}></Stack.Screen>
            <Stack.Screen name="ChatDetail" component={ChatDetail}></Stack.Screen>
        </Stack.Navigator>
    );
}