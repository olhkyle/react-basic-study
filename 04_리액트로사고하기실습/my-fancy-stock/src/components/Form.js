import React, { useState } from 'react';

function Form ({datas}){
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <div>
            <form>
                <input value={input} type="text" placeholder='Search...' name="search" style={{padding: '3px 0'}} onChange={handleChange}/>
                <br/>
                <input type="checkbox" id="instock" />
                <label htmlFor="instock">Only show products in stock</label>
            </form> 
        </div>
    )
}

export default Form;