import React from "react";
import {View, Text, StyleSheet} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../modules/auth/screens/Login";
import RecoverPassword from "../../modules/auth/screens/RecoverPassword";
const Stack = createStackNavigator();
export default function LoginStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
            }}
            initialRouteName="LoginStack"
        >
            <Stack.Screen
                name="LoginStack"
                component={Login}
                options={{ title: "Iniciar Sesión" }}
            />
            <Stack.Screen
                name="RecoverPasswordStack"
                component={RecoverPassword}
                options={{ title: "Recuperar Contraseña" }}
            />
        </Stack.Navigator>
    );
}