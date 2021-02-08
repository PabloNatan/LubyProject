import React, { useContext } from 'react';

import { View, Text, StyleSheet, StatusBar, Dimensions} from "react-native";
import Avatar from '../components/Avatar';
import Card from '../components/Card';
import InfoRow from '../components/InfoRow';

import { Colors, Font } from "../constants/Constants";
import UserContext from '../contexts/UserContext';

const screenWidth = Dimensions.get('screen').width;
export default ({route: {name, params}}) => {
    
    const {state: { userData}, state: { followData }} = useContext(UserContext);
    
    const user = name == 'ProfileScreen' || params == 'newMain' ? userData : followData;
    
    return(
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Avatar size={110} image={user.avatar_url} resize={20} />
            </View>

            <Card title={user.name == null ? user.login : user.name}>
                <Text style={styles.textCard}>{user.email == null ? user.login : user.email}</Text>
                <Text style={styles.textCard}>{user.location}</Text>
            </Card>

            <InfoRow
                followers={user.followers}
                following={user.following}
                repos={user.public_repos}
            />

            <Card title='Bio'>
                <Text style={styles.textCard}>{user.bio}</Text>
                
            </Card>
            
            <StatusBar barStyle="light-content" backgroundColor={Colors.backgroundHeader} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    avatarContainer: {
        width: screenWidth,
        height: 75,
        backgroundColor: Colors.backgroundHeader,
        alignItems: 'center',
        marginBottom: 80,
    },
    textCard: {
        color: 'white',
        fontFamily: Font.body,
        textAlign: 'justify'
    }
})