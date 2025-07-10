import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CreateAccount from '../../modules/auth/screens/CreateAccount'
import Login from '../../modules/auth/screens/Login'

const Tab = createBottomTabNavigator()
export default function Navigation() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="CreateAccount" component={CreateAccount}/>
        </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
    container : {}
})