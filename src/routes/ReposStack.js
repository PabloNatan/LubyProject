import React, { useContext } from 'react';
import { createStackNavigator  } from "@react-navigation/stack";

import { Colors } from '../constants/Constants';

import RepositoriesScreen from '../screens/RepositoriesScreen';
import { HeaderBackButton } from '@react-navigation/stack';
import UserContext from '../contexts/UserContext';
import { StyleSheet, Text, View } from 'react-native';


const StackRepos = createStackNavigator();

export default function ReposStack({navigation: {navigate}}) {
    const { state: { userData } } = useContext(UserContext);
    return(
        <StackRepos.Navigator
            screenOptions={{
                headerStyle:{backgroundColor: Colors.backgroundHeader},
                headerTintColor: 'white',
                headerTitleAlign: 'center',
                headerLeft: (props) => (<HeaderBackButton {...props} onPress={() => navigate('ProfileScreen')}/>)
            }}
        >
            <StackRepos.Screen 
                name="RepositoriesScreen" 
                component={RepositoriesScreen}
                options={{
                    title: `${userData.public_repos} repositórios`
                }}
            />
        </StackRepos.Navigator>
    )
}

const styles = StyleSheet.create({
    textProfileHeader: {
        fontSize: 16,
        color: 'white',
        paddingRight: 8,
    },
    headerRightStyle: {
        flexDirection: 'row',

    }
})
