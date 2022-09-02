import React, { useState } from 'react'

export default function Counter (){
    // [값, 값을 변경할 때 쓰는 함수] useState안의 0은 처음 count의 시작값을 의미, setCount()괄호 안에는 count를 업데이트 할 값을 적어주면 된다.
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <br/>
            Counter: {count}
        </div>
    )
}