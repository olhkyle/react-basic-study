import React, { useRef, useState } from "react";
import Cat from "./Cat";

// 해결점 : cat 컴포넌트 안에 있는 이미지 사이즈를 알고 싶다!
export default function CatParent() {
  
  // const ref = useRef();
  // node를 인자로 받는 이유, attach 되었을 때 인자로 받기 때문
  const [height, setHeight] = useState(1);
  const catCallbackRef = (node) => {
    if(node !== null){
      console.log(node);
      setHeight(node.getBoundingClientRect().height);
    }
  }
  console.log("부모 컴포넌트 CatParent");

  const ageRef = useRef(1);
  // console.log(ageRef.current)

  return (
    <div>
      <h4> 고양이가 세상을 구한다 ️</h4>
      <div>
        <Cat ref={catCallbackRef}/>
        <h3>나이 : {ageRef.current}살</h3>
        <h4>키 : {height}</h4>
        {/* <button onClick={() => alert(ref.current.height + 'px')}>고양이의 크기를 알고 싶어</button> */}
        <button onClick={() => ageRef.current += 1}>새해</button>
        {/* <button onClick={() => setAge(age + 1)}>테스트</button> */}
      </div>
    </div>
  );
}