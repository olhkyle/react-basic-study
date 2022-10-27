import React, { useState } from 'react';

function SearchBar (props){
    const { text, isStockOnly } = props.filter;

    // key를 input의 name으로 넘겨준다.
    const handleText = (e) => {
        props.updateFilter(e.target.name, e.target.value)
    }

    // key를 input의 name으로 넘겨준다.
    const handleIsStockOnly = (e) => {
        props.updateFilter(e.target.name, e.target.checked);
    }

    
    return (
        <div>
            <form>
                <input value={text} type="text" placeholder='Search...' name={"text"} onChange={handleText}/>
                <div>
                    <input type="checkbox" id="instock" name={'isStockOnly'} checked={isStockOnly} onChange={handleIsStockOnly}/>
                    <label htmlFor="instock">Only show products in stock</label>
                </div>
            </form> 
        </div>
    )
}

export default SearchBar;