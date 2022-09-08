import React, { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

export default function Calculator() {
  const [state, setState] = useState({
    scale: 'c',
    temperature: 0
  });

  const handleTemperatureChange = (obj) => {
    // 자식 컴포넌트 temperatureinput은 어디에서 수정했는지 전달받고, 값(온도)는 무엇인지 전달받아서, setState를 업데이트 해줘야한다,
    // obj.scale, obj.temperature
    setState({...state, scale: obj.scale, temperature: obj.temperature})
  }

  function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  function tryConvert(temperature, convert){
    const input = parseFloat(temperature);
    if( Number.isNaN(input)){
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000; // 반올림
    return rounded.toString();
  }

  const { scale, temperature } = state; // 비구조화 할당 (구조분해 문법)

  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
  

  // 하위 컴포넌트(TemperatureInput)에서 값을 수정할 수 있게 해야 한다. 그리고, 섭씨, 화씨에서 수정한 것인지 알고 있어야 한다.
  return (
    <>
      <TemperatureInput scale={"c"} temperature = {celsius} onTemperatureChange = {handleTemperatureChange} />
      <TemperatureInput scale={"f"} temperature = {fahrenheit} onTemperatureChange = {handleTemperatureChange}/>
    </>
  );
}

