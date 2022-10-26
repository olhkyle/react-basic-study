import React from 'react';

export default function Frame({name,price}){
    return (
            <>
                <tr>
                    <td>{name}</td>
                    <td>{price}</td>
                </tr>
            </>
    )
}


