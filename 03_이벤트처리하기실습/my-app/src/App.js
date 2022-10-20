import './App.css';
import CatParent from './components/CatParent';
import SimpleForm from './components/SimpleForm';
import Toggle from './components/Toggle';
import UnControlledForm from './components/UnControlledForm';

function App() {
  return (
    <div style={{margin: '20px'}}>
      <Toggle/>
      <br/>
      <br/>
      <SimpleForm/>
      <br/>
      <br/>
      <UnControlledForm/>
      <CatParent/>
    </div>
  );
}

export default App;
