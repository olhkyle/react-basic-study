import React, { useState } from 'react';
import Frame from './Frame';


function FilteredResult({datas}) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>   
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Sporting Goods</th>
                    </tr>
                    {datas.map((data) => data.category === 'Sporting Goods' && <Frame 
                    key={data.name}
                    price={data.price}
                    name={data.name}/>)}
                    <tr>
                        <th>Electronics</th>
                    </tr>
                    {datas.map((data) => data.category === 'Electronics' && <Frame 
                    key={data.name}
                    price={data.price}
                    name={data.name}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default FilteredResult;