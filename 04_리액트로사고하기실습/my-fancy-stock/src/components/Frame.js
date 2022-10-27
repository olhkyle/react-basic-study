import React from 'react';

export default function Frame(props){
    const { category, items } = props;
    return (
            <>
                    <tr>
                        <th>{category}</th>
                    </tr>
                    {items.map((item,idx) => (
                        <tr key={idx}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))}
            </>
    )
}


