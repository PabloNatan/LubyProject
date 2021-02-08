import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import Card from './Card';
import { Colors, Font, Sizes } from "../constants/Constants";
import {  Feather } from '@expo/vector-icons'; 

export default ({name, description, starsNum}) => {

    return (
        <View style={styles.container}>
            <Card title={name}>
                <Text style={styles.textCard}>{description}</Text>
            </Card>

            <View style={styles.row}>
                <View style={styles.stars}>
                    <Feather name="star" size={24} color={Colors.tintColor} />
                    <Text style={styles.text}>{starsNum}</Text>
                </View>

                <View style={styles.locks}>
                    <Feather name="unlock" size={24} color={Colors.green} />
                    <Feather name="lock" size={24} color={Colors.red} />
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       borderBottomWidth: 0.3,
       borderColor: '#dedede', 
       paddingVertical: 20,
    },
    textCard: {
        color: 'white',
        fontFamily: Font.body,
    },
    row: {
        flexDirection: 'row',
        paddingHorizontal: Sizes.gapTag,
        marginTop: 10,
        justifyContent: 'space-between'
    },
    stars: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: Sizes.fontBody,
        fontFamily: Font.body,
        fontWeight: '700',
        marginLeft: 8,
    },
    locks: {
        flexDirection: 'row',
        width: 55,
        justifyContent: 'space-between'
    }
})

