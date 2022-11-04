import React, { useState } from "react";
import { useRouter }from 'next/router'
import BottomButton from "../src/components/BottomButton";

export default function accessoryChoice() {
  const router  = useRouter();
  const [accessory, setAccessory] = useState('');
  const onChangeHandler = (e) => {
    setAccessory(e.target.value)
  }

  
  return (
    <div className="container">
    <div className="wrapper">
      <h3 className="title">
        모니터와 키보드 중 원하는 액세서리를 선택해주세요.
      </h3>
    </div>
    <label htmlFor="Monitor">
      <input type="radio" name="accessory" id="accessory" value="Monitor" onChange={onChangeHandler}/>
      Monitor
    </label>
    <label htmlFor="Keyboard">
      <input type="radio" name="accessory" id="accessory" value="Keyboard" onChange={onChangeHandler}/>
      Keyboard
    </label>
    <BottomButton onClick={
      () => router.push('/complete')
    }>완료 화면으로 넘어가기</BottomButton>
  </div>
  )
}
