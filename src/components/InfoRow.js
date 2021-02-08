import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { Colors, Font, Sizes } from '../constants/Constants';

export default ({repos, followers, following}) => {

    return (
        <View style={styles.container}>

            <View style={styles.textContainer}>
                <Text style={styles.textHeader}>{followers}</Text>
                <Text style={styles.text}>Seguidores</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.textHeader}>{following}</Text>
                <Text style={styles.text}>Seguindo</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.textHeader}>{repos}</Text>
                <Text style={styles.text}>Repos</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.gray,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: Sizes.gapTag,
        paddingBottom: 10,
        paddingTop: 2,
        marginVertical: 30,
    },
    textContainer: {
        alignItems: 'center'
    },
    textHeader: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    text:{
        fontSize: Font.fontBody,
        color: 'white',
    }
})