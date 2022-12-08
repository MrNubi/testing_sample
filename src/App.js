// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testId="counter">{count}</h3>
        <div className="btn-area" style={{ display: 'flex' }}>
          <button
            disabled={disabled}
            style={{ margin: '10px' }}
            data-testId="minus-button"
            onClick={() => {
              setCount((prev) => prev - 1);
            }}
          >
            -
          </button>

          <button
            disabled={disabled}
            style={{ margin: '10px' }}
            data-testId="plus-button"
            onClick={() => {
              setCount((prev) => prev + 1);
            }}
          >
            +
          </button>
        </div>
        <button
          data-testId="on/off-button"
          style={{ backgroundColor: 'blue' }}
          onClick={() => {
            setDisabled((prev) => !prev);
          }}
        >
          on/off
        </button>
      </header>
    </div>
  );
}

export default App;
