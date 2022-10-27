import React, { useState } from 'react';
import SearchBar from './SearchBar';
import StoreTable from './StoreTable';

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
            <SearchBar datas={datas}/>
            <StoreTable products={datas}/>
        </div>
    )
}

export default OnlineStore;