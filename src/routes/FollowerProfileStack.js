import React, { useContext, useState } from 'react';
import { Colors } from '../constants/Constants';
import { StyleSheet, Text, View } from "react-native";
import { Entypo } from '@expo/vector-icons'; 
import UserContext from '../contexts/UserContext';
import ProfileScreen from '../screens/ProfileScreen';

import { createNameHash } from '../util/methods';

import { createStackNavigator } from "@react-navigation/stack";


import { fetchFollow, fetchRepositoreis, fetchUser } from "../util/api";
import { useEffect } from 'react/cjs/react.development';


const StackProfile = createStackNavigator();

export default function FollowerProfileStack({navigation: {navigate, reset}}) {
 
    const {state: {followData}, dispatch} = useContext(UserContext);
    const [newUser, setNewUser] = useState(false);
    

    const  setNewDatas = async () => {
        try{
            const newMainUser = await fetchUser(followData.login);
            dispatch({
                type: 'loadNewMainProfile',
                payload: {...newMainUser},
            })
            setNewUser(true);
         
        }catch(e){
            navigate('Login')
            
        }
    }

    useEffect(() => 
        {
            if(newUser) {

                reset({
                    index: 0,
                    routes: [{ name: 'Home' }],
                  });
            }
        }, [newUser]
    )


    const headerRight = (
        <View style={styles.headerRightStyle}>
            <Text style={styles.textProfileHeader}>Salvar</Text>
            <Entypo 
                name="login" 
                size={24} 
                color={Colors.green}
                onPress={() => setNewDatas()}
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
                name="FollowerProfileScreen" 
                component={ProfileScreen}
                options={{
                    headerTitleAlign: 'center',     
                    headerTitleStyle: {fontSize: 17},
                    title: createNameHash(followData.name == null ? followData.login : followData.name),
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
