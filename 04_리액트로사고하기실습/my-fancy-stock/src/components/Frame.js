import React from 'react';

export default function Frame(props){
    const { category, items, isStockOnly } = props;
    const stockedItem = isStockOnly ? items.filter(item => item.stocked === true) : items;

    return (
            <>
                <tr>
                    <th>{category}</th>
                </tr>
                {stockedItem.map((item,idx) => (
                    <tr key={idx}>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                    </tr>
                ))}
            </>
    )
}


