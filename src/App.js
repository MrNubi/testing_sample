// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import tricker from '../src/tricker/nonwink_torikaru.mp4';
import tricker_wink from '../src/tricker/wink_torikaru.mp4';
import trickerImg from '../src/tricker/tricker_eye_close.png';

function App() {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const ref = useRef();
  let torikaru = tricker;
  const [onMouse, setonMouse] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testId="counter">{count}</h3>
        <div
          style={{
            height: '386px',
            weight: '404px',
          }}
        >
          <video
            height={'100%'}
            weight="100%"
            className="video"
            ref={ref}
            muted={true}
            autoPlay={true}
            loop
            poster="../src/tricker/tricker_eye_close.png"
            preload="metadata"
            onClick={(loadedmetadata) => {
              setonMouse((prev) => !prev);
              ref.current.load();
              ref.current.play();
              console.log('onmouseOut', onMouse);
            }}
            // onMouseEnter={(loadedmetadata) => {
            //   let time = loadedmetadata.target.currentTime;

            //   setonMouse(true);
            //   ref.current.load();
            //   ref.current.play();
            //   console.log('onmouse', onMouse);
            // }}
            // onMouseOut={() => {
            //   setonMouse(false);
            //   ref.current.load();
            //   ref.current.play();
            //   console.log('onmouseOut', onMouse);
            // }}
          >
            <source
              className="one"
              type="video/mp4"
              src={onMouse ? tricker_wink : tricker}
            />
            {/* <source className="two" type="video/mp4" src={tricker_wink} /> */}
          </video>
        </div>

        <div className="btn-area" style={{ display: 'flex' }}>
          <button
            disabled={disabled}
            style={{ margin: '10px' }}
            data-testId="minus-button"
            onClick={() => {
              setCount((prev) => prev - 1);
              setonMouse((prev) => !prev);
              ref.current.load();
              ref.current.play();
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
              setonMouse((prev) => !prev);
              ref.current.load();
              ref.current.play();
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
