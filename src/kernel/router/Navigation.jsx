import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CreateAccount from '../../modules/auth/screens/CreateAccount'
import Login from '../../modules/auth/screens/Login'
import { Icon } from '@rneui/base'
function getTabBarIcon(route, active) {
 let iconName = '';
  switch (route.name) {
    case 'Login':
      iconName = active ? 'log-in' : 'log-in-outline';
      break;
    case 'CreateAccount':
      iconName = active ? 'person-add' : 'person-add-outline';
      break;
    default:
      iconName = 'help';
  }
  return iconName;
}
const Tab = createBottomTabNavigator()
export default function Navigation() {
  return (
    <NavigationContainer>
        <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <Icon
              name={getTabBarIcon(route, focused)}
              type='ionicon'
              size={24}
              color={focused ? '#3D6DCC' : '#ccc'}
            />
          ),
          headerShown: false,
          tabBarActiveTintColor: '#3D6DCC',
          tabBarInactiveTintColor: '#ccc',
        })}

        >
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="CreateAccount" component={CreateAccount} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
    container : {}
})

