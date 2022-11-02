import React, { useContext, useReducer } from 'react';
import { UserContext } from '../store/user';



export default function BlogPage(props) {
    const { type, contextDispatch } = useContext(UserContext);
    console.log(contextDispatch);
    // dispatch.changeJob('BE-developer')
                
    
    return (
        <div>
            <h1>Blog</h1>
            <div>{type.height}</div>
            <div>{type.gender}</div>
            <button onClick={() => contextDispatch({type: 'changeHeight', height: type.height + 1})}>change height</button>
            <button onClick={() => contextDispatch({type: 'changeGender', gender: 'female'})}>change gender</button> 
        </div>
    )
}