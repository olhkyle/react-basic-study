import React, { useState } from "react";
import { useRouter }from 'next/router'
import BottomButton from "../src/components/BottomButton";

export default function deviceChoice() {
  const router  = useRouter();
  const [state, setState] = useState('');
  const onChangeHandler = (e) => {
    setState(e.target.value)
  }

  console.log(state);
  return (
    <div className="container">
    <div className="wrapper">
      <h3 className="title">
        아이맥과 맥북 중 원하는 장비를 선택해주세요.
      </h3>
    </div>
    <label htmlFor="iMac">
      <input type="radio" name="device" id="device" value="iMac" onChange={onChangeHandler}/>
      IMac
    </label>
    <label htmlFor="macbook">
      <input type="radio" name="device" id="device" value="MacBook" onChange={onChangeHandler}/>
      MacBook
    </label>
    <BottomButton onClick={
      () => router.push('/accessory-choice')
    }>액세서리 선택 화면으로 넘어가기</BottomButton>
  </div>
  )
}
