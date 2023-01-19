import React, { useEffect, useState } from 'react';
import './App.css';
import FirstComponent from './Components/Control/Control';
import Hint from './Components/Hint/Hint';
import HintViewModel from './store/HintsViewModel';

function App() {
  const [countHint, setCountHint] = useState(3);
  const [hint, setHint] = useState(new HintViewModel(countHint));

  useEffect(() => {
    setHint(new HintViewModel(countHint));
  }, [countHint]);

  return (
    <div className='main'>
      <FirstComponent />
      <div className='countries'>
        <div className='options'>
          <p>Выберите количество подсказок:</p>
          <select
            onChange={(e) => setCountHint(Number(e.target.value))}
            name=''
            id=''
          >
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
          </select>
        </div>
        <Hint viewModel={hint} />
      </div>
    </div>
  );
}

export default App;
