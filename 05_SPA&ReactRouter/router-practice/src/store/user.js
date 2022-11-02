import React, { useState, createContext, useReducer } from 'react';

export const UserContext = createContext(); // context를 내보내기

// const initialUser = {
//     name: 'kyle',
//     job: 'FE-developer'
// }
// const userReducer = (state, action) => {
//     switch (action.type) {
//         case 'changeJob':
//             return {...state, job: action.text}
//         default:
//             break;
//     }
// }

const initialType = {
    gender: 'male',
    height: 175,
}

const typeReducer = (state, action) => {
    switch (action.type) {
        case 'changeGender' :
            return {...state, gender : action.gender}
        case 'changeHeight':
            return {...state, height : action.height};
        default:
            break;
    }
}

export default function UserStore(props) {
    // const [ job, setJob ] = useState('FE-developer')
    // const user = {
    //     name: 'kyle',
    //     job,
    //     changeJob : (updatedJob) => setJob(updatedJob),
    // }

    // const [user, dispatch] = useReducer(userReducer, initialUser)

    const [type, contextDispatch] = useReducer(typeReducer, initialType);

    return (
        <UserContext.Provider value={ {type, contextDispatch} }>{ props.children }</UserContext.Provider>
    )
}