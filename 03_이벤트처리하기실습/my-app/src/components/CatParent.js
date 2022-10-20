import React, { useRef } from "react";
import Cat from "./Cat";

// 해결점 : cat 컴포넌트 안에 있는 이미지 사이즈를 알고 싶다!
export default function CatParent() {
  console.log("부모 컴포넌트 CatParent");
  
  const ref = useRef();
  console.log(ref);
  return (
    <div>
      <h4> 고양이가 세상을 구한다 ️</h4>
      <div>
        <Cat ref={ref}/>
      </div>
    </div>
  );
}