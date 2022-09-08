import React, { useState } from 'react'

export default function Counter (){
    // [값, 값을 변경할 때 쓰는 함수] useState안의 0은 처음 count의 시작값을 의미, setCount()괄호 안에는 count를 업데이트 할 값을 적어주면 된다.
    const operators = ['+', '-', '*'];

    const [info, setInfo] = useState({
        count : 0,
        show: true,
        operator: operators[0]
    });

    // const [array, setArray] = useState(['a','b','c','d']);

    return (
        <div>
            <button 
            onClick={() => {
                let result;
                if (info.operator === '+') result = info.count + 1
                if (info.operator === '-') result = info.count - 1
                if (info.operator === '*') result = info.count * 1
                setInfo({...info, count: result})
            }}>{info.operator}1</button>
            <button 
                onClick={() => {
                    // info.show = !info.show
                    // const newInfo = info
                    // setInfo(newInfo)
                    setInfo({...info, show: !info.show})
                }
            }>Show and Hide
            </button>
            <button 
            onClick={() => {
                const idx = Math.floor(Math.random() * operators.length)
                setInfo({...info, operator: operators[idx]})
            }}>Change Operator</button>
            <br/>
            {info.show === true && `Counter: ${info.count}`}
            {/* Counter: {count} */}
        </div>
    )
}