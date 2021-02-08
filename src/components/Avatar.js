import React from 'react';
import { Image, StyleSheet} from 'react-native';

export default ({size, image, resize}) => {

    const sizes = {
        width: size,
        height: size,
        borderRadius: size / 2,
    }
    return(
        <Image 
            source={{uri: image}} 
            style={[
                sizes, 
                resize != null ? {top: resize} : null,
                styles.image
            ]}
        
        />
    )
}

const styles =  StyleSheet.create({
    image: {
        borderWidth: 3,
        borderColor: 'white',
    }
})