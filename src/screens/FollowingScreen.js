import React, { useContext, useEffect, useCallback, useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, StatusBar, FlatList} from "react-native";
import { Colors } from '../constants/Constants';
import UserContext from '../contexts/UserContext';
import { fetchUser, fetchFollow } from "../util/api";
import Follower from '../components/Follower';

const keyExtractor = ({id}) => id.toString();

export default ({navigation: {navigate}}) => {
    const [page, setPage] = useState(1);
    const [shouldFetch, setShouldFetch] = useState(true);
    const [following, setFollowing] = useState([]);
    const {state: { userData },dispatch} = useContext(UserContext);

    useEffect(
        () => {
         
          if (!shouldFetch)   return;
          
          const fetch = async () => {
            try{

                const followers = await fetchFollow(`https://api.github.com/users/${userData.login}/following?&page=${page}`)
                setShouldFetch(false);
                setFollowing(oldFollowers => [...oldFollowers, ...followers]);
                setPage(prev => prev + 1);
            }catch(e){
                navigate('Login')
            }
          };
    
          fetch();
        },
        [page, shouldFetch],
    );

    const getUserDatas =  async login => {
        try{
            const followerData = await fetchUser(login);
            dispatch({
                type: 'loadFollowerProfile',
                payload: followerData,
            });
            navigate('FollowerProfileScreen');
        }catch(e){
            console.log('Failed get user data')
        }
    }

    const renderItem = ({item: {avatar_url, login}}) => {
      
        return(
            <TouchableOpacity
                onPress={() =>  getUserDatas(login)}
            >
                <Follower 
                    image={avatar_url}
                    login={login}
                />
            </TouchableOpacity>
        );
    }

    return(
        <View style={styles.container}>
            <FlatList 
                keyExtractor={keyExtractor}
                data={following}
                renderItem={renderItem}
                onEndReachedThreshold={0.5}
                onEndReached={() => setShouldFetch(true)}  
                initialNumToRender={6}  
            />
            <StatusBar barStyle="light-content" backgroundColor={Colors.backgroundHeader} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    }
})