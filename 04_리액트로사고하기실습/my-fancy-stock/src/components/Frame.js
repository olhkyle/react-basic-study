import React from 'react';
import styled from 'styled-components';


export default function Frame(props){
    const { category, items, isStockOnly } = props;
    const stockedItem = isStockOnly ? items.filter(item => item.stocked === true) : items;

    return (
            <>
                <tr>
                    <Category>{category}</Category>
                </tr>
                {stockedItem.map((item,idx) => (
                    <tr key={idx}>
                        {/* <td style={item.stocked ? {color: 'black'} : {color: 'red'}}>{item.name}</td> */}
                        {/* <td style={{color: item.stocked  ? 'black' : 'red'}}>{item.name}</td> */}
                        <ProductName stocked={item.stocked}>{item.name}</ProductName>
                        <td>{item.price}</td>
                    </tr>
                ))}
            </>
    )
}


const Category = styled.th`
    font-weight: bold;
`

const ProductName = styled.td`
    color: ${props => props.stocked ? 'black' : 'red'}
`

