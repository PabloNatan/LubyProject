import  React, { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { createBottomTabNavigator  } from "@react-navigation/bottom-tabs";
import  BottomTabBar  from '@react-navigation/bottom-tabs/src/views/BottomTabBar'
import { Feather } from '@expo/vector-icons'; 

import { Colors } from '../constants/Constants';
import ProfileStack from './ProfileStack';
import ReposStack from './ReposStack';
import FollowersStack from './FollowersStack';
import FollowingStack from './FollowingStack';

const Tab = createBottomTabNavigator();


export default  BottomTabNavigator  =  props => {
    return(
                
            <Tab.Navigator 
                sceneContainerStyle={{
                    paddingBottom: 50,
                    backgroundColor: Colors.background
                 }}
                tabBar={props => 
                    <BottomTabBar {...props}  activeTintColor={'black'} style={styles.tabBar}/>
                }
            >
                <Tab.Screen 
                    name='Home'  
                    component={ProfileStack}
                    options={{
                        tabBarIcon: ({color}) => <Feather name="home" size={24} color={color} />,
                        
                    }}
                />
                <Tab.Screen
                    name='Repos'
                    component={ReposStack}
                    options={{
                        tabBarIcon: ({color}) => <Feather name="github" size={24} color={color} />
                    }}
                />

                <Tab.Screen
                    name='Seguidores'
                    component={FollowersStack}
                    options={{
                        tabBarIcon: ({color}) => <Feather name="users" size={24} color={color} />
                    }}
                />

                <Tab.Screen
                    name='dataF'
                    component={FollowingStack}
                    options={{
                        tabBarIcon: ({color}) => <Feather name="users" size={24} color={color} />,
                        title: 'Seguindo'
                    }}
                />
            </Tab.Navigator>
        
    )
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#dfdfdf', 
        borderTopWidth: 0, 
        position: 'absolute', 
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        height: 50,
    }
})

const screenOptions = {
    headerTitleAlign: 'center',
    headerTintColor: 'white',
    headerStyle: {
        backgroundColor: Colors.backgroundHeader,
    }
}