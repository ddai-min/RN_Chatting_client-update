import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './login';
import Membership from './membership';

const Stack = createNativeStackNavigator();

export default function LoginIndex() {
    return (
        <Stack.Navigator initialRouteName="Login"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login}></Stack.Screen>
            <Stack.Screen name="Membership" component={Membership}></Stack.Screen>
        </Stack.Navigator>
    );
}