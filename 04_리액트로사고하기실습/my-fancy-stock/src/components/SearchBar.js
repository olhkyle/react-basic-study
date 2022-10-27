import React, { useState } from 'react';

function SearchBar ({datas}){
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <div>
            <form>
                <input value={input} type="text" placeholder='Search...' name="search" onChange={handleChange}/>
                <div>
                    <input type="checkbox" id="instock" />
                    <label htmlFor="instock">Only show products in stock</label>
                </div>
            </form> 
        </div>
    )
}

export default SearchBar;