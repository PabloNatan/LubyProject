import React  from 'react';
import { Colors } from '../constants/Constants';

import { HeaderBackButton, createStackNavigator } from '@react-navigation/stack';


import FollowingScreen from '../screens/FollowingScreen';

import FollowerProfileStack from './FollowerProfileStack';

const StackFollowing = createStackNavigator();

export default function FollowingStack({navigation: {navigate}}) {
 
    return(
        <StackFollowing.Navigator
            screenOptions={{
                headerStyle:{backgroundColor: Colors.backgroundHeader},
                headerTintColor: 'white',
            }}
        >
            <StackFollowing.Screen 
                name="FollowingScreen" 
                component={FollowingScreen}
                options={{
                    headerLeft: (props) => (<HeaderBackButton {...props} onPress={() => navigate('Home')}/>),
                    headerTitleAlign: 'center',
                    title: 'seguindo',
                }}
            />
            <StackFollowing.Screen 
                name="FollowingProfileScreen" 
                component={FollowerProfileStack}
                options={{
                    headerShown: false,
                }}
            />
        </StackFollowing.Navigator>
    )
}