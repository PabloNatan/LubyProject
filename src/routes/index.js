import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/LoginScreen';
import BottomTabNavigator  from './BottomTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import UserContext from '../contexts/UserContext';


export default props => {
    const { state, dispatch } =  React.useContext(UserContext);

    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                {
                    state.userLogged == null ? (
                        <Stack.Screen
                            name='Login'
                            component={LoginScreen}
                            options={{animationTypeForReplace: state.isSignout ? 'pop' : 'push',}}
                        />

                    ): (

                        <Stack.Screen
                            name='BottomTabNavigator'
                            component={BottomTabNavigator}  
                        />
                    )

                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}