import React from 'react';
import Frame from './Frame';


function StoreTable(props) {
    const { products, filter } = props
    
    // 1-1
    // const sportingGoods = products.filter(product => product.category === 'Sporting Goods');
    // const electronics = products.filter(product => product.category === 'Electronics');

    // 2. products에 filter.text와 같은 것이 있다면, 그 친구만 렌더링
    const targetProduct = products.filter(p => p.name === filter.text);
    const filteredProducts = targetProduct.length > 0 ? targetProduct : products;
    

    // 1-2. 확장성을 고려한 코드 (서버로부터 데이터를 전달받는 경우, 해당 데이터 중 기존에 갖고 있던 category가 아닐수도 있다.)
    // reduce((누적값, 현재값, 인덱스, 요소) => {return 결과}, 초기값)
    // 예상 결과
    // {
    //     sportingGoods: [{}, {}, {}],
    //     electronics: [{},{},{},],
    //     a: [],
    // }
    const result = filteredProducts.reduce((acc,cur) => {
        if(acc.hasOwnProperty(cur.category)){
            // key(category)를 갖고 있는 case로 배열에 추가
            return {...acc, [cur.category] : [...acc[cur.category], cur]}
        } else{
            // 새로운 카테고리의 key를 생성하고 배열도 추가해줘야 됨
            return {...acc, [cur.category] : [cur]}
        }
    }, {})


    const keys = Object.keys(result);

    
    return (
        <div>
            <table>
                <thead>
                    <tr style={{fontWeight: 'bold'}}>
                        <th>Name</th>   
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {keys.map((key,idx) => <Frame key={idx} category={key} items={result[key]} isStockOnly={filter.isStockOnly}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default StoreTable;