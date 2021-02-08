import React, {useContext} from 'react';
import { View, Text, StyleSheet } from "react-native";
import { HeaderBackButton, createStackNavigator } from '@react-navigation/stack';
import UserContext from '../contexts/UserContext';
import { Colors, Font } from '../constants/Constants';


import { Entypo } from '@expo/vector-icons'; 

import FollowersScreen from '../screens/FollowersScreen';
import FollowerProfileStack from './FollowerProfileStack';

const StackFollowers = createStackNavigator();

export default function FollowersStack({navigation: { navigate }}) {
    const { state: { userData } } = useContext(UserContext);

    return(
        <StackFollowers.Navigator
            screenOptions={{
                headerStyle:{backgroundColor: Colors.backgroundHeader},
                headerTintColor: 'white',
            }}
        >
            <StackFollowers.Screen 
                name="FollowersScreen" 
                component={FollowersScreen}
                options={{
                    headerTitleAlign: 'center',
                    title: `${userData.followers} seguidores`,
                    headerLeft: (props) => (<HeaderBackButton {...props} onPress={() => navigate('Home')}/>)
                }}
            />
            <StackFollowers.Screen 
                name="FollowerProfileScreen" 
                component={FollowerProfileStack}
                options={{headerShown: false}}
            />
        </StackFollowers.Navigator>
    )
}

