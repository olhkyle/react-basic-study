import React, { useContext, useReducer } from 'react';
import { UserContext } from '../store/user';



export default function BlogPage(props) {
    const { height,gender, contextDispatch } = useContext(UserContext);
    console.log(contextDispatch);
    // dispatch.changeJob('BE-developer')
                
    
    return (
        <div>
            <h1>Blog</h1>
            <div>{height}</div>
            <div>{gender}</div>
            <button onClick={() => contextDispatch({type: 'changeHeight', height: height + 1})}>change height</button>
            <button onClick={() => contextDispatch({type: 'changeGender', gender: 'female'})}>change gender</button> 
        </div>
    )
}