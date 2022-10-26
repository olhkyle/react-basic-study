import React, { useState } from 'react';
import Form from './Form';
import FilteredResult from './FilteredResult';

function OnlineStore(){
    const datas = [
            {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
            {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
            {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
            {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
            {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
            {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
    ];


    return (
        <div style={{margin: 20, padding: 20}}>
            <Form datas={datas}/>
            <FilteredResult datas={datas}/>
        </div>
    )
}

export default OnlineStore;