import React, { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(1);

  const add = () => setNumber((number) => number + 1);
  const subtract = () => setNumber((number) => number - 1);
  const multiplyBy2 = () => setNumber((number) => number * 2);
  const multiplyBy2AndAddBy1 = () => {
    multiplyBy2();
    add();
  };

  // *2 + 1 버튼을 클릭했을 때, 결과적으로 +1 되는 값을 반환하는데, 왜그럴까?
  // react에서 state 업데이트는 병합된다.
  // 다음과 같은 과정을 볼 수 있는데
  /*
  state는 사실 object이기 때문에, 다음의 객체 병합과정을 보면, 객체에 number라는 키는
  MultiplyBy2라는 함수 호출에 의해, number * 2로 덮어씌워지고, 다음으로 add라는 함수 호출에 의해 number라는 키의 값은 Number +1로 덮어씌워져, 결국은 +1의 결과값을 반환하게 된다.
  Object.assign({number}, {number : number * 2}, {number : number + 1})
  number -> 3(current) -> 6 -> 4(result)
  */

  // 비동기적으로 발생하는 문제를 피하려면, setState함수 매개변수로 함수를 넣어준다.

  return (
    <div>
      <h1>Number : {number}</h1>
      <div>
        <button onClick={add}>+ 1</button>
        <button onClick={subtract}>- 1</button>
        <button onClick={multiplyBy2}>*2</button>
        <button onClick={multiplyBy2AndAddBy1}>*2 + 1</button>
      </div>
    </div>
  );
}