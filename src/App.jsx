import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState(null);
  const [confirmedValue, setConfirmedValue] = useState(null);
  const [ourNumber, setOurNumber] = useState(null);
  const handleChange = e => {
    console.log(e);
    setValue(parseInt(e.target.value));
  };

  const handleSubmitRoll = e => {
    e.preventDefault();
    setConfirmedValue(value);
    setOurNumber(Math.floor(Math.random() * 2) + 1);
  };

  return (
    <div className='bg-red-500 font-bold flex items-center flex-col'>
      <h2>guess the number 1-10</h2>
      <form
        onChange={handleChange}
        className='flex items-center flex-col gap-2'
      >
        <input
          type='number'
          className='bg-amber-300 mt-2 text-center'
          placeholder='guess number'
          value={value}
        />
        <button
          onClick={handleSubmitRoll}
          className='rounded-2xl bg-green-300 m-2 p-1'
        >
          commit number and roll
        </button>
      </form>
      {confirmedValue === ourNumber && confirmedValue !== null && (
        <p>
          YOU WIN, you guessed {confirmedValue} and the random number was{' '}
          {ourNumber}
        </p>
      )}
      {confirmedValue !== ourNumber && (
        <p>
          Your number was {confirmedValue} But our number was {ourNumber}
        </p>
      )}
    </div>
  );
}

export default App;
