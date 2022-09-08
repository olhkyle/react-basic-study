import React, { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";

const scaleNames = {
  c: "Celsius", // 섭씨
  f: "Fahrenheit", // 화씨
};

export default function TemperatureInput(props) {

  function handleChange(e) {
    // setTemperature(e.target.value);
    props.onTemperatureChange({scale : props.scale, temperature : e.target.value});
  }

  const scale = scaleNames[props.scale];

  return (
    <fieldset>
      <legend>Enter temperature in {scale}:</legend>
      <input value={props.temperature} onChange={handleChange} />
      <BoilingVerdict
        scale={props.scale}
        temperature={parseFloat(props.temperature)}
        // parseFloat메서드를 실행하는 이유는, input 창에 받는 값을 e.target.value로 접근하는데, 이것이 string 형태의 값을 반환하기 때문
      />
    </fieldset>
  );
}