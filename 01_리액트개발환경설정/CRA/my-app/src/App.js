import './App.css';
// import Header from './components/Header';
// import Welcome from './components/Welcome';
import Counter from './components/Counter';

function App() {
  // const info = {
  //   firstName : 'kwon',
  //   lastName : ' kyle',
  //   withImg : true,
  // }
  return (
    <div className="App" tabIndex='0'>
      {/* <Header title = {"Learn React A"}/>
      <Welcome {...info}/> // withImg만 적으면, react에서 attribute의 default값은 true이다 */}
      <Counter/>
    </div>
  );
}

export default App;
