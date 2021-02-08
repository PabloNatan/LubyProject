import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { Colors, Sizes } from '../constants/Constants';

export default props => {
    return(
            <View style={styles.titleRow}>
                <View 
                    style={styles.tag}
                />
               {props.children}

            </View>
    )
}

const styles = StyleSheet.create({
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    tag: {
        backgroundColor: Colors.tintColor,
        height: 40,
        width: 25,
        borderRadius: 10,
        left: -15,
        position: 'absolute'
       
      
    },
    
})