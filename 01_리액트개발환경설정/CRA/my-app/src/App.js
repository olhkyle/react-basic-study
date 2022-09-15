import "./App.css"
// import Header from "./components/Header"
import Welcome from "./components/Welcome"
import Counter2 from "./components/Counter2"
// import Calculator from "./components/Calculator"
// import Counter from './components/Counter';
// import Clock from "./components/ClassClock"
import FunctionClock from "./components/FunctionClock"

function App() {
  const info = {
    firstName: "kwon",
    lastName: " kyle",
    withImg: true,
  }
  const Title = (props) => (
    <span style={{ fontSize: "22px", color: "blue" }}>I like {props.name}</span>
  )
  return (
    <>
      <div className="App" tabIndex="0">
        {/* <Header title = {"Learn React A"}/> */}
        <Welcome {...info} />
        <Title name={"Frontend"} /> {/* 컴포넌트화 시키지 않은 */}
        <Counter2 />
        <FunctionClock />
      </div>
      {/* <Calculator /> */}
    </>
  )
}

export default App
