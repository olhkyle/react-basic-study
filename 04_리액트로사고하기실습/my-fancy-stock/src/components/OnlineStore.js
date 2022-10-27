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
    // state로 활용해야하는 값 및 위치
    // 1. 유저가 input에 입력한 값
    // 2. checkbox를 클릭한 값
    // 위치 : searchBar 컴포넌트에서 상태값을 변경할 수도 있지만, searchBar 컴포넌트의 형제 요소인
    // storeTable 컴포넌트에 필터링된 값을 넘겨주기 힘들기 때문에, state 끌어올리기를 이용해, state를 두 컴포넌트의 상위 요소인 OnlineStore 컴포넌트에 state를 위치시킨다.
    const [filter, setFilter] = useState({
        text: '',
        isStockOnly: false,
    })

    // setFilter를 그대로 넘겨줘도 되지만, 함수로 한번감싸서 넘겨주는 방식도 있다.
    const updateFilter = (key, value) => {
        console.log(key,value);
        setFilter({
            ...filter, [key] : value
        })
    }

    console.log(filter);

    return (
        <div style={{margin: 20, padding: 20}}>
            <SearchBar filter={filter} updateFilter={updateFilter}/>
            <StoreTable products={datas} filter={filter}/>
        </div>
    )
}

export default OnlineStore;