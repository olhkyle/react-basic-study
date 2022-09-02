import React from 'react'
import duk from '../images/SAM_2768.JPG'

const Welcome = ({withImg, firstName, lastName}) => {
    // image + Hello, firstName, lastName
    return (
        <>
            {withImg && <img src={duk} alt='welcome duk' height='400'/>}
            <div>Hello!</div>
            <div>
                <span>{firstName}</span>
                {lastName}
            </div>
        </>
    )
}

export default Welcome;