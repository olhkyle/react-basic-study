import React, { useState, useEffect } from "react"

function Clock() {
  const [date, setDate] = useState(new Date())

  const tick = () => {
    setDate(new Date())
  }

  useEffect(() => {
    console.log("componentDidMount")
    const timerId = setInterval(tick, 1000)
    return () => {
      console.log("componentWillUnMount")
      clearInterval(timerId)
    }
  }, [])

  useEffect(() => {
    console.log("componentDidUpdate")
    console.log(date)
  }, [date])

  return (
    <div>
      <span>안녕하세요</span>
      <p>현재시각은 {date.toLocaleTimeString()}</p>
    </div>
  )
}

export default Clock
