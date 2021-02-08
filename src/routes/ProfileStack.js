import React, { useContext } from 'react';
import { Colors } from '../constants/Constants';
import { StyleSheet, Text, View } from "react-native";
import { Entypo } from '@expo/vector-icons'; 
import UserContext from '../contexts/UserContext';
import ProfileScreen from '../screens/ProfileScreen';

import { createNameHash } from '../util/methods';

import { createStackNavigator } from "@react-navigation/stack";



const StackProfile = createStackNavigator();

export default function ProfileStack() {
    const {dispatch} = useContext(UserContext);
    const {state: { userData } }  = useContext(UserContext);
    
 
    const headerRight = (
        <View style={styles.headerRightStyle}>
            <Text style={styles.textProfileHeader}>Sair</Text>
            <Entypo 
                name="log-out" 
                size={24} 
                color={Colors.red}
                onPress={() => dispatch({type: 'logOut'})}
            />
        </View>
    )
    return(
        <StackProfile.Navigator
            screenOptions={{
                headerTintColor: 'white',
            }}
        >
            <StackProfile.Screen 
                name="ProfileScreen" 
                component={ProfileScreen}
                options={{
                    headerTitleStyle: {fontSize: 17},
                    title: createNameHash(userData.name == null ? userData.login : userData.name),
                    headerRight: () => headerRight,
                    headerStyle:{
                        elevation: 0, 
                        backgroundColor: Colors.backgroundHeader,
                        
                    }
                }}
            
            />
        </StackProfile.Navigator>
    )
}


const styles = StyleSheet.create({
    headerRightStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 12,
    },
    textProfileHeader: {
        fontSize: 16,
        color: 'white',
        marginRight: 6,
        fontFamily: 'sans-serif-thin',
    }
})
