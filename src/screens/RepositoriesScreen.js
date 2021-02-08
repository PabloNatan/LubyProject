import React, { useContext, useEffect, useState} from 'react';

import { View, StyleSheet, StatusBar, FlatList} from "react-native";
import Repo from '../components/Repo';

import { Colors } from "../constants/Constants";
import UserContext from '../contexts/UserContext';
import { fetchRepositories } from '../util/api';

const keyExtractor = ({id}) => id.toString();

export default props => {

    const [page, setPage] = useState(1);
    const [shouldFetch, setShouldFetch] = useState(true);
    const [repos, setRepos] = useState([]);
    const {state: { userData },dispatch} = useContext(UserContext);
   
    useEffect(
        () => {
          if (!shouldFetch)   return;
          
          const fetch = async () => {
            try{

                const repos =  await fetchRepositories(`https://api.github.com/users/${userData.login}/repos?&per_page=25&page=${page}`);
                setShouldFetch(false);
                setRepos(oldRepos => [...oldRepos, ...repos]);
                setPage(prev => prev + 1);
            }catch(e){
                props.navigation.navigate('Login')
            }  
          };
    
          fetch();
        },
        [page, shouldFetch],
    );
    const renderItem = ({item: {name, description, stars}}) => {
        
        return(
            <Repo 
                name={name}
                description={description}
                starsNum={stars}
            />
        )
    }

    return(
        <View style={styles.container}>
            <FlatList
                keyExtractor={keyExtractor}
                data={repos}
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