import './App.css';
import { num } from './Utils/number';
import { useState, useRef } from 'react';
import Box from './Components/Box';

function App() {
  const [send, setSend] = useState(null);
  const [error, setError] = useState(false);
  const elementRef = useRef();

  const handleClick = () => {
    if (+elementRef.current.value > 9) {
      setError(true);
      setSend(0);
    } else {
      setError(false);
      setSend(+elementRef.current.value);
    }
  };

  return (
    <div className='App'>
      <div className="wrapper">
        <h1 className='title'>Hacker Earth Challenge</h1>
        {error ? <p className='error'>Enter the value between 1 - 9</p>:<p> &nbsp;</p>}
      </div>
      <div className='input-wrapper'>
        <p className='sub-title'>Enter the Value between 1 - 9</p>
        <input className='input' ref={elementRef} />
        <button className='btn' onClick={handleClick}>
          Click Me
        </button>
      </div>
      <div className='tab'>
        {num.map((item, index) => {
          return <Box item={item} val={send} className='box' key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
