import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  const updateCounter = (e) => {
    setCount(count +1);
  }
  return (
    <div className="App">
      <div className="flex flex-column v-align-center h100">
        <div className="display">{count}</div>
        <div className="buttons">
          <button className="btn" onClick={updateCounter}>Count</button>
        </div>
      </div>
    </div>
  );
}

export default App;
