import logo from './logo.svg';
import {Square} from "./components/Component.js";
import './App.css';

function OnlyEven({arr})
{

  return <>{arr.join(", ")}</>
}

function App() {
  return (
    <div className="App">
      <h1>Задача №1</h1>
      <Square n={5}/>
      <h1>Задача №2</h1>
      <OnlyEven arr={[14, 5, 6, 12, 21, 2]} />
    </div>

  );
}

export default App;
