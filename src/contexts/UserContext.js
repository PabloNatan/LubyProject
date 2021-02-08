import React, { createContext, useReducer  } from 'react';


const UserContext = createContext({});

const actions = {
    addInitialState(state, action){
        return {
            userData: action.payload,
            userLogged: true,
        };
    },
    logOut(state,action){
        return {
            ...state,
            userLogged: null,
            isisSignout: true,
        }
    },
    loadFollowerProfile(state, action){
        return {
            ...state,
            followData: action.payload,
        }
    },
    loadNewMainProfile(state, action){
        return{
            ...state,
            userData: action.payload,
        }
    }
}

export const UserProvider = props => {


    function reducer(state, action){
        const fn = actions[action.type];
        return fn ? fn(state, action) : state;
    }


    const [state, dispatch] = useReducer(reducer, {})


    return(
        <UserContext.Provider value={{
            state, dispatch
        }}>
            {props.children}
        </UserContext.Provider>

    )
}
export default UserContext;