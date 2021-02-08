import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, ActivityIndicator, Dimensions} from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

import { Colors, Font, Sizes } from '../constants/Constants';
import UserContext from '../contexts/UserContext';
import { fetchUser, getAllUserData } from '../util/api';
import { TextInput } from 'react-native-gesture-handler';

const screenWidth = Dimensions.get('screen').width;
export default ({navigation: {navigate}}) => {
 

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
   
    const [text, setText] = useState(null);

    const { dispatch } = useContext(UserContext);

    const loadInitialData = async () => {
        setLoading(true);
        if(text == '' || text == null) {
            setMessage('Campo obrigatório');
            return;
        }
        try {
            const userData = await fetchUser(text);
            dispatch({
                type: 'addInitialState',
                payload: {
                    ...userData
               }
            })
        }catch(e){
            setMessage('Falha em obter os dados')
        }
        setLoading(false)
    }
    return(
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                {
                    loading && 
                    (
                        <ActivityIndicator size={120} color={Colors.tintColor}/>
                    )
                }
                {
                    !loading &&
                    (
                        <AntDesign name="github" size={120} color={Colors.tintColor} />
                    )
                }
            </View>
            
            <View style={styles.textInputContainer}>
                <TextInput
                    value={text}
                    style={styles.textInput}
                    placeholder='Usuário'
                    onChangeText={(value) => {setText(value); setMessage('')}}
                />
                                    
                <View style={styles.messageContainer}>
                    <Text style={styles.messageText}>{message}</Text>
                </View> 
            </View>
            
            <TouchableOpacity style={styles.button}
                onPress={() => loadInitialData()}
            >
                <Text style={styles.textButton}>Entrar</Text>
                <AntDesign name="arrowright" size={24} color="black"  />
            </TouchableOpacity>

            <StatusBar barStyle="light-content" backgroundColor={Colors.background} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        height: 120,
    },
    textInputContainer: {
        marginTop: 20,
        width: screenWidth - 40,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 8,
        justifyContent:'center',
    },
    textInput: {
        flex: 1,
        paddingLeft: 15,
    },
    messageContainer: {
        position: 'absolute',
        right: 15,
        alignSelf: 'center',
        
    },
    messageText: {
        color: Colors.danger,
        fontSize: Sizes.fontBody,
        
    },
    button: {
        flexDirection: 'row',
        width: screenWidth - 40,
        backgroundColor: Colors.tintColor,
        height: 40,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    textButton: {
        fontSize: Sizes.fontTitle,
        marginRight: 4,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }
})