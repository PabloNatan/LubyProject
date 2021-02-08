import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { Sizes } from '../constants/Constants';
import Avatar from './Avatar';
import TitleRow from './TitleRow';
import { AntDesign } from '@expo/vector-icons'; 

export default ({image, login}) => {

    return (
        <View style={styles.container}>
            <TitleRow>
                <View style={styles.avatarContainer}>
                    <Avatar image={image} size={65} />
                </View>
            </TitleRow>

            <Text style={styles.text}>#{login}</Text>

            <View style={styles.iconContainer}>
                <AntDesign name="arrowright" size={28} color="white" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#dedede',
        borderBottomWidth: 0.3,
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarContainer: {
        paddingLeft: Sizes.gapTag, 
    },
    text: {
        marginLeft: 40,
        fontSize: Sizes.fontBody,
        color: 'white',
        fontWeight: 'bold',
    },  
    iconContainer: {
        right: Sizes.gapTag,
        position: 'absolute'
    }
})