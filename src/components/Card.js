import React from 'react';
import { View, StyleSheet, Text } from "react-native";
import TitleRow from './TitleRow';
import { Sizes } from '../constants/Constants';

export default ({title, children}) => {

    return (
        <View>
            <TitleRow>
                <View style={styles.containerTitleText}>
                    <Text style={styles.textTitle}>{title}</Text>
                </View>
            </TitleRow>

            <View style={styles.textContainer}>
                {children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        paddingLeft: Sizes.gapTag,
        paddingRight: Sizes.gapTag,
    },
    containerTitleText: {
        paddingRight: 30,
    },
    textTitle:{
        color: 'white',
        fontSize: Sizes.fontTitle,
        fontWeight: 'bold',
        textTransform: "uppercase",
        left: Sizes.gapTag,

    }
})


